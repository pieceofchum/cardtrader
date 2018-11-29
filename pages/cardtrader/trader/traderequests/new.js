import React, { Component } from 'react';
import web3 from '../../../../ethereum/web3';
import { Button, Card, Grid, Image, Form } from 'semantic-ui-react';
import { Link } from '../../../../routes';
import Layout from '../../../../components/Layout';
import CardSeries from '../../../../ethereum/cardseries';

class TradeRequest extends Component {
  static async getInitialProps(props) {
    const { address, cardid } = props.query;

    const accounts = await web3.eth.getAccounts();
    const cardSeries = CardSeries(address);
    const myCardIDs = await cardSeries.methods.getCardsByOwner(accounts[0]).call();
    const cardCount = myCardIDs.length;
    const allCards = await cardSeries.methods.getAllCards().call();
    const cardChoices  = allCards.filter( ( card ) => !myCardIDs.includes( card ) );

    const cards = {
      cardCount: cardCount,
      myCardID: cardid,
      cardChoices: cardChoices
    }

    console.log(cards);
    return { address, cards };
  }

  renderCard(cardID) {
    return (
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header value={'Card ID: ' + cardID}/>
        </Card.Content>
      </Card>
    );
  }

  renderCards() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            {this.renderCard(this.props.cards.myCardID)}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.renderCard()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  render() {
    return (
      <Layout>
        <h3>Fucker</h3>
        <Form>
          { this.renderCards() }
          <Button primary>Create Trade Request</Button>
        </Form>
      </Layout>
    );
  }
}

export default TradeRequest;