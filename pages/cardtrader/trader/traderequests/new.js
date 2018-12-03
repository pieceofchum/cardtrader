import React, { Component } from 'react';
import web3 from '../../../../ethereum/web3';
import { Button, Card, Grid, Image, Form, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout';
import CardSeries from '../../../../ethereum/cardseries';
import { Carousel } from 'react-responsive-carousel';

class TradeRequest extends Component {
  state = {
    selCard: 0,
    cardCount: 0,
    cardChoices: [],
    account: 0,
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const { address, cardid } = props.query;
    return { address, myCardID: cardid };
  }

  async loadData() {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const cardSeries = CardSeries(this.props.address);
    const myCardIDs = await cardSeries.methods.getCardsByOwner(account).call();
    const cardCount = myCardIDs.length;
    const allCards = await cardSeries.methods.getAllCards().call();
    const cardChoices  = allCards.filter( ( card ) => !myCardIDs.includes( card ) );

    this.setState( { cardCount: cardCount, cardChoices: cardChoices, account: account } );
  }

  componentDidMount(){
    this.loadData();
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const selCardID = this.state.cardChoices[this.state.selCard];
      const myCardID = this.props.myCardID;
      const accounts = await web3.eth.getAccounts();
      const cardSeries = CardSeries(this.props.address);

      await cardSeries.methods
        .createTradeRequest(myCardID, selCardID)
        .send({
         from: accounts[0]
       });

      Router.pushRoute(`/traderequest/${this.props.address}`);
    }catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  renderCard(cardID) {
    return (
      <Card>
        <Image src={'/static/' + cardID + '.jpg'}/>
        <Card.Content>
          <Card.Description>This is the card your trading</Card.Description>
        </Card.Content>
      </Card>
    );
  }

  renderCarousel() {
    if (this.state.cardCount > 0) {
      return (
        <Carousel showArrows={true} showIndicators={false} showThumbs={false}
                  onChange={event => this.setState({ selCard: event })}
                  selectedItem={ this.state.selCard }>
          {
            this.state.cardChoices.map((cardID, index) => {
              return (
                <div key={cardID}>
                  <img src={'/static/' + cardID + '.jpg'}/>
                </div>
              )}
            )
          }
        </Carousel>
      );
    }
  }

  renderCards() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            {this.renderCard(this.props.myCardID)}
          </Grid.Column>
          <Grid.Column width={6}>
            <Card>
              {this.renderCarousel()}
              <Card.Content>
                <Card.Description>This is the card your trading for</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  render() {
    return (
      <Layout>
        <h3>Select Card to Trade For {this.state.account}</h3>
        <p>
          <Link route={`/trader/${this.props.address}`}>
            <a><Button primary>Back</Button></a>
          </Link>
        </p>
        <Form onSubmit={ this.onSubmit } error={!!this.state.errorMessage}>
          { this.renderCards() }
          <Message error header="Error" content={this.state.errorMessage}/>
          <Button primary loading={this.state.loading}>Create Trade Request</Button>
        </Form>
      </Layout>
    );
  }
}

export default TradeRequest;