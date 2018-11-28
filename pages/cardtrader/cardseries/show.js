import React, { Component } from 'react';
import { Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import { Link } from '../../../routes'

class CardSeriesShow extends Component {
  static async getInitialProps(props) {
    const cardseries = CardSeries(props.query.address);
    const summary = await cardseries.methods.getSummary().call();

    return {
      address: props.query.address,
      seriesID: summary[0],
      seriesName: summary[1],
      seriesDescription: summary[2],
      numCards: summary[3],
      numTraderRequests: summary[4],
      manager: summary[5]
    };
  }

  renderCards() {
    const {
      seriesID,
      seriesName,
      seriesDescription,
      numCards,
      numTraderRequests,
      manager
    } = this.props;

    const items = [
      {
        header: seriesName,
        meta: 'Name of the Trading Card Series',
        description: 'The name of the Trading Card Series contained in the contract',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: seriesDescription,
        meta: 'Description of the Trading Card Series',
        description: 'A description of the Trading Card Series',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: numCards,
        meta: 'Number of Cards In Series',
        description: 'The number of unique Trading Cards contained in the contract',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: numTraderRequests,
        meta: 'Number of Trading Requests',
        description: 'Number of Trading Requests contained in the contract',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: manager,
        meta: 'Manager of Trading Card Series',
        description: 'The manager of the contract that can create new cards',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} itemsPerRow={3}/>;
  }

  render() {
    return (
      <Layout>
        <h3>Card Series Details</h3>
        <Grid width={10}>
          <Grid.Row>
            <Grid.Column>
              {this.renderCards()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Link route={`/cardseries/traderequests/${this.props.address}`}>
                <a>
                  <Button primary>View Trade Requests</Button>
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column width={3}>
              <Link route={`/cardseries/cards/${this.props.address}`}>
                <a>
                  <Button primary>View Cards</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CardSeriesShow;