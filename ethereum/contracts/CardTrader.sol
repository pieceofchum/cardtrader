pragma solidity ^0.4.17;

contract CardSeriesFactory {
    address[] public deployedCardSeries;
    mapping (uint => bool) public deployedCardSeriesID;

    function createCardSeries(uint seriesID, string seriesName,
                string seriesDescription) public {
        require(!deployedCardSeriesID[seriesID]);
        address newCardSeries = new CardSeries(seriesID, seriesName,
                                            seriesDescription, msg.sender);
        deployedCardSeries.push(newCardSeries);
    }

    function deployedCardSeries() public view returns(address[]) {
        return deployedCardSeries;
    }
}

contract CardSeries {
    struct TradeRequest{
        address owner1;
        address owner2;
        uint cardID1;
        uint cardID2;
        bool approvalComplete;
        bool owner1Approval;
        bool owner2Approval;
        bool tradeCompleted;
    }

    struct TradeRequestKeys{
        bytes32[] keys;
        uint keyCount;
    }

    //mapping of key to the trade request
    mapping (bytes32 => TradeRequest) public tradeRequestsByKey;

    //mapping of key to the trade request
    mapping (address => TradeRequestKeys) public tradeRequestsByOwner;

    bytes32[] _tradeRequests;

    //array of unique card id's
    uint[] public cards;

    //mapping of unique card id's
    mapping (uint => bool) public _cardsByCardID;

    //mapping of card id's to owner
    mapping (uint => address) private _ownedCardsByCardID;

    //mapping of owner to all cards owned by them
    mapping (address => uint[]) public _cardsOwnedByAddress;

    //address of the manager of the contract
    address public manager;

    //a series id that identifies the card
    //campaign which all cards in this contract
    //are part of and can be externally linked
    uint public _seriesID;
    string public _seriesName;
    string public _seriesDescription;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function CardSeries(uint seriesID, string seriesName,
                        string seriesDescription, address creator) public {
        manager = creator;
        _seriesID = seriesID;
        _seriesName = seriesName;
        _seriesDescription = seriesDescription;
    }

    function createTradeRequest(address owner1, uint cardID1, address owner2, uint cardID2)
            public returns (bytes32) {

        bytes32 key = keccak256(owner1, cardID1, owner2, cardID2);

        TradeRequest memory newTradeRequest = TradeRequest({
            owner1: owner1,
            owner2: owner2,
            cardID1: cardID1,
            cardID2: cardID2,
            approvalComplete: false,
            owner1Approval: false,
            owner2Approval: false,
            tradeCompleted: false
        });

        tradeRequestsByKey[key] = newTradeRequest;

        tradeRequestsByOwner[owner1].keys.push(key);
        tradeRequestsByOwner[owner1].keyCount++;
        tradeRequestsByOwner[owner2].keys.push(key);
        tradeRequestsByOwner[owner2].keyCount++;

        _tradeRequests.push(key);

        return key;
    }

    function approveTradeRequest(bytes32 key, address owner) public {
        TradeRequest storage tradeRequest = tradeRequestsByKey[key];

        require((tradeRequest.owner1 == owner)||
                (tradeRequest.owner2 == owner));

        if (tradeRequest.owner1 == owner){
            tradeRequest.owner1Approval = true;
        }else {
            tradeRequest.owner2Approval = true;
        }

        if (tradeRequest.owner1Approval &&
            tradeRequest.owner2Approval){
            tradeRequest.approvalComplete = true;

            completeTrade(tradeRequest);
        }
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

          tradeRequest.tradeCompleted = true ;
    }

    function addCard(uint cardID, address owner) public {
        require(!_cardsByCardID[cardID]);

        _ownedCardsByCardID[cardID] = owner;
        _cardsByCardID[cardID]=true;
        _cardsOwnedByAddress[owner].push(cardID);
        cards.push(cardID);
    }

    function getTradeRequestsByOwner(address ownerID) public view returns (bytes32[]) {
        return tradeRequestsByOwner[ownerID].keys;
    }

    function getAllTradeRequests() public view returns (bytes32[]) {
        return _tradeRequests;
    }

    function getAllCards() public view returns (uint[]) {
        return cards;
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

    function getSummary() public view returns (uint, string, string, uint, uint, address) {
         return(
          _seriesID,
          _seriesName,
          _seriesDescription,
          cards.length,
          _tradeRequests.length,
          manager
        );
    }
}