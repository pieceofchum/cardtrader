import React, { Component } from 'react';
import web3 from '../../../ethereum/web3';
import { Button, Card } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';

class CardTraderHome extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const accounts = await web3.eth.getAccounts();

    const cardSeries = CardSeries(address);
    const cardIDs = await cardSeries.methods.getCardsByOwner(accounts[0]).call();
    const cardCount = cardIDs.length;

    const cards = {
      cardCount: cardCount,
      cardIDs: cardIDs
    }
    console.log(cards);
    return { address, cards };
  }

  renderCards() {
    const items = this.props.cards.cardIDs.map(id => {
      return {
        image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
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

  render() {
    return (
      <Layout>
        <h3>Cards</h3>
        {this.renderCards()}
      </Layout>
    )
  }
}

export default CardTraderHome;