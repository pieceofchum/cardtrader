import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
import Layout from '../../../components/Layout'
import { Link } from '../../../routes';

class CardSeriesIndex extends Component {
  static async getInitialProps() {
    const cardseries = await factory.methods.getDeployedCardSeries().call();
    console.log(cardseries);
    return { cardseries };
  }

  renderCardSeries() {
    const items = this.props.cardseries.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/cardseries/${address}`}>
            <a>View Card Series</a>
          </Link>
        ),
        fluid: true
      }
    });

    return <Card.Group items={items}/>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Manage Card Series</h3>
          <Link route="/cardseries/new">
            <a>
              <Button
                floated="right"
                content="Create Card Series"
                icon="add circle"
                primary/>
            </a>
          </Link>
          {this.renderCardSeries()}
        </div>
      </Layout>
    )
  }
}

export default CardSeriesIndex;