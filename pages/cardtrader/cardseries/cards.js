import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import CardRow from '../../../components/CardRow';

class CardIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    const cardSeries = CardSeries(address);

    //NEED TO ADD A NEW FUNCTION TO CONTRACT TO RETURN THE CARDS ARRAY
    const cardIDs = await cardSeries.methods.getAllCards().call();

    const cardCount = cardIDs.length;

    const cardOwners = await Promise.all(
      Array(parseInt(cardCount)).fill().map((element, index) => {
        return cardSeries.methods.getCardOwnerByCardID(cardIDs[index]).call();
      })
    );

    console.log(cardIDs);
    console.log(cardOwners);
    return { address, cardCount, cardIDs, cardOwners };
  }

  renderRows() {
    return this.props.cardIDs.map((cardID, index) => {
      return <CardRow
        key={index}
        id={index}
        cardID={cardID}
        cardOwner={this.props.cardOwners[index]}
        address={this.props.address}
      />
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Cards</h3>
        <Link route={`/cardseries/${this.props.address}`}>
          <a>Back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Card ID</HeaderCell>
              <HeaderCell>Owner</HeaderCell>
            </Row>
          </Header>
          <Body>
          {this.renderRows()}
          </Body>
        </Table>
        <Link route={`/cardseries/${this.props.address}/new`}>
          <a>
            <Button
              floated="right"
              content="Add Card"
              icon="add circle"
              primary/>
          </a>
        </Link>
        <div>Found {this.props.cardCount} cards.</div>
      </Layout>
    );
  }
}

export default CardIndex;