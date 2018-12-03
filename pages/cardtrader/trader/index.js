import React, {Component} from 'react';
import { Card, Button, Container} from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout'
import { Link } from '../../../routes';
import CardSeries from "../../../ethereum/cardseries";

class MyCardSeriesIndex extends Component {
  state = {
    mySeries: [],
    account: 0
  };

  async loadData() {
    const cardSeriesAddresses = await factory.methods.getDeployedCardSeries().call();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    var mySeries = new Map();

    for(var i = 0; i < cardSeriesAddresses.length; i++){
      let cardSeries = CardSeries(cardSeriesAddresses[i]);
      let cards = await cardSeries.methods.getCardsByOwner(account).call();
      let seriesName = await cardSeries.methods.getSeriesName.call();
      const summary = await cardSeries.methods.getSummary().call();

      let cardSeriesSummary = {
        seriesID: summary[0],
        seriesName: summary[1],
        seriesDescription: summary[2],
        numCards: summary[3],
        numTraderRequests: summary[4],
        manager: summary[5],
        cards: cards
      };

      if (cards.length > 0) {
        mySeries.set(cardSeriesSummary, cardSeriesAddresses[i]);
      }
    }

    this.setState({ mySeries: mySeries, account: account});
  }

  componentDidMount(){
    this.loadData();
  }

  renderCardSeries() {
    var items = [];
    this.state.mySeries.forEach((key, value) => {
      items.push({
        header: (
            <Container>
              <div>
                <h4>{value.seriesName}</h4>
              </div>
              <div>
                <h4>{value.seriesDescription}</h4>
              </div>
            </Container>
        ),
        description: (
            <Link route={`/trader/${key}`}>
              <a>View Card Series</a>
            </Link>
        ),
        meta: "The number of cards you own in this series is " + value.cards.length,
        fluid: true
      });
    });

    return <Card.Group items={items}/>;
  }

  render() {
    const { mySeries , account} = this.state;

    return (
      <Layout>
        <div>
          <h3>My Card Series - {account == 0 ? 'Please make sure to login to your MetaMask plug-in':account} </h3>
          {this.renderCardSeries()}
        </div>
      </Layout>
    )
  }
}

export default MyCardSeriesIndex;