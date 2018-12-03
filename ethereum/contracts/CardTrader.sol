pragma solidity ^0.4.25;

contract CardSeriesFactory {
    address[] private _deployedCardSeries;
    mapping (uint => bool) private _deployedCardSeriesID;

    function createCardSeries(uint seriesID, string seriesName,
                string seriesDescription) public {
        require(!_deployedCardSeriesID[seriesID]);
        address newCardSeries = new CardSeries(seriesID, seriesName,
                                            seriesDescription, msg.sender);
        _deployedCardSeries.push(newCardSeries);
    }

    function getDeployedCardSeries() public view returns(address[]) {
        return _deployedCardSeries;
    }
}

contract CardSeries {
    enum TradeStatus { AwaitingApproval, Approved, Declined, Completed }

    struct TradeRequest{
        address owner1;
        address owner2;
        uint cardID1;
        uint cardID2;
        TradeStatus status;
    }

    struct TradeRequestKeys{
        bytes32[] keys;
        uint keyCount;
    }

    //mapping of key to the trade request
    //this variable is public in order to
    //return a TradeRequest structure
    //which is not supported for functions
    mapping (bytes32 => TradeRequest) public tradeRequestsByKey;

    //mapping of key to the trade request
    mapping (address => TradeRequestKeys) private _tradeRequestsByOwner;

    // Array of al trade reqeusts in this series
    bytes32[] private _tradeRequests;

    //array of unique card id's
    uint[] private _cards;

    //mapping of unique card id's
    mapping (uint => bool) private _cardsByCardID;

    //mapping of card id's to owner
    mapping (uint => address) private _ownedCardsByCardID;

    //mapping of owner to all cards owned by them
    mapping (address => uint[]) private _cardsOwnedByAddress;

    //address of the manager of the contract
    address public manager;

    //a series id that identifies the card
    //campaign which all cards in this contract
    //are part of and can be externally linked
    uint private _seriesID;

    //Series Name is a human readable and
    //meaningful name for this series
    string private _seriesName;

    //A description of the series
    string private _seriesDescription;

    //Modifier to restrict some functions to the manager
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint seriesID, string seriesName,
                        string seriesDescription, address creator)  public {
        manager = creator;
        _seriesID = seriesID;
        _seriesName = seriesName;
        _seriesDescription = seriesDescription;
    }

    function createTradeRequest(uint cardID1, uint cardID2)
            public returns (bytes32) {

        require(msg.sender == getCardOwnerByCardID(cardID1));

        address owner1 = msg.sender;
        address owner2 = getCardOwnerByCardID(cardID2);

        require(owner1 != owner2);

        uint keyCount = _tradeRequests.length;

        bytes32 key = keccak256(abi.encodePacked(owner1, cardID1, owner2, cardID2, keyCount));

        TradeRequest memory newTradeRequest = TradeRequest({
            owner1: owner1,
            owner2: owner2,
            cardID1: cardID1,
            cardID2: cardID2,
            status: TradeStatus.AwaitingApproval
        });

        tradeRequestsByKey[key] = newTradeRequest;

        _tradeRequestsByOwner[owner1].keys.push(key);
        _tradeRequestsByOwner[owner1].keyCount++;
        _tradeRequestsByOwner[owner2].keys.push(key);
        _tradeRequestsByOwner[owner2].keyCount++;

        _tradeRequests.push(key);

        return key;
    }

    function approveTradeRequest(bytes32 key) public {
        TradeRequest storage tradeRequest = tradeRequestsByKey[key];
        address owner = msg.sender;

        require(tradeRequest.owner2 == owner);

        tradeRequest.status = TradeStatus.Approved;
        completeTrade(tradeRequest);
    }

    function declineTradeRequest(bytes32 key) public {
        TradeRequest storage tradeRequest = tradeRequestsByKey[key];
        address owner = msg.sender;

        require((tradeRequest.owner2 == owner) ||
                (tradeRequest.owner1 == owner));

        tradeRequest.status = TradeStatus.Declined;
    }


    function completeTrade(TradeRequest storage tradeRequest) private returns (bool) {
          _ownedCardsByCardID[tradeRequest.cardID1] = tradeRequest.owner2;
          _ownedCardsByCardID[tradeRequest.cardID2] = tradeRequest.owner1;

          uint i = 0;

          uint[] storage owner1Cards = _cardsOwnedByAddress[tradeRequest.owner1];
          for(i = 0; i < owner1Cards.length; i++){
              if (owner1Cards[i] == tradeRequest.cardID1)
              {
                  owner1Cards[i] = tradeRequest.cardID2;
                  break;
              }
          }

        uint[] storage owner2Cards = _cardsOwnedByAddress[tradeRequest.owner2];
          for(i = 0; i < owner2Cards.length; i++){
              if (owner2Cards[i] == tradeRequest.cardID2)
              {
                  owner2Cards[i] = tradeRequest.cardID1;
                  break;
              }
          }

          tradeRequest.status = TradeStatus.Completed ;
    }

    function addCard(uint cardID, address owner) restricted public {
        require(!_cardsByCardID[cardID]);

        _ownedCardsByCardID[cardID] = owner;
        _cardsByCardID[cardID]=true;
        _cardsOwnedByAddress[owner].push(cardID);
        _cards.push(cardID);
    }

    function getTradeRequestsByOwner(address ownerID) public view returns (bytes32[]) {
        return _tradeRequestsByOwner[ownerID].keys;
    }

    function getAllTradeRequests() public view returns (bytes32[]) {
        return _tradeRequests;
    }

    function getAllCards() public view returns (uint[]) {
        return _cards;
    }

    function getCardsByOwner(address ownerID) public view returns (uint[]) {
        return _cardsOwnedByAddress[ownerID];
    }

    function getCardOwnerByCardID(uint cardID) public view returns (address) {
        return _ownedCardsByCardID[cardID];
    }

    function hasOwner(address owner) public view returns (bool) {
        if (_cardsOwnedByAddress[owner].length > 0) {
            return true;
        }

        return false;
    }

    function getSeriesName() public view returns (string) {
        return _seriesName;
    }

    function getSummary() public view returns (uint, string, string, uint, uint, address) {
         return(
          _seriesID,
          _seriesName,
          _seriesDescription,
          _cards.length,
          _tradeRequests.length,
          manager
        );
    }
}