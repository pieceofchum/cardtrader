import React, { Component } from 'react';
import web3 from '../../../ethereum/web3';
import { Button, Card } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';

// Component that displays all the
// Trading Cards the current wallet
// account owns along with a button
// at the bottom of each card to allow
// the owner to trade the card for
// another one within the same
// Card Series Contract
class CardTraderHome extends Component {
  state = {
    cards: {
      cardCount: 0,
      cardIDs: []
    },
    account: 0
  };

  static async getInitialProps(props){
    const { address } = props.query;
    return { address };
  }

  // Retrieve all the cards owned
  // by the current account from the
  // selected Card Series Contract
  async loadData() {
    const { address } = this.props;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const cardSeries = CardSeries(address);
    const cardIDs = await cardSeries.methods.getCardsByOwner(account).call();
    const cardCount = cardIDs.length;

    const cards = {
      cardCount: cardCount,
      cardIDs: cardIDs
    }

    this.setState( {cards: cards, account: account });
  }

  componentDidMount(){
    this.loadData();
  }

  renderCards() {
    if (this.state.cards.cardCount > 0) {
      const items = this.state.cards.cardIDs.map(id => {
        return {
          image: '/static/' + id + '.jpg',
          header: 'Card ID: ' + id,
          extra: (
            <Link route={`/traderequest/${this.props.address}/${id}`}>
              <a>
                <Button
                  floated="right"
                  content="Trade"
                  icon="add circle"
                  primary/>
              </a>
            </Link>
          ),
          fluid: true
        }
      });

      return (
        <Card.Group itemsPerRow={3} items={items}/>
      );
    }
  }

  render() {
    return (
      <Layout>
        <h3>Cards for {this.state.account}</h3>
        <Link route={`/trader`}>
          <a><Button primary>Back</Button></a>
        </Link>
        <Link route={`/traderequest/${this.props.address}`}>
          <a>
            <Button
            floated="right"
            content="View Trade Requests"
            icon="add circle"
            primary/>
          </a>
        </Link>
        {this.renderCards()}
      </Layout>
    )
  }
}

export default CardTraderHome;