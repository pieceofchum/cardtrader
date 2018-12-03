import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import CardRow from '../../../components/CardRow';

class CardIndex extends Component {
  state = {
    cardCount: 0,
    cardIDs: [],
    cardOwners: []
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    console.log("Fucker " + address);
    return { address };
  }

  async loadData(){
    const { address } = this.props;
    const cardSeries = CardSeries(address);

    console.log("In cards loadData with address of " + address);

    const cardIDs = await cardSeries.methods.getAllCards().call();

    const cardCount = cardIDs.length;

    const cardOwners = await Promise.all(
      Array(parseInt(cardCount)).fill().map((element, index) => {
        return cardSeries.methods.getCardOwnerByCardID(cardIDs[index]).call();
      })
    );

    console.log(cardIDs);
    console.log(cardOwners);
    this.setState({ cardCount: cardCount, cardIDs: cardIDs, cardOwners: cardOwners });
  }

  componentDidMount(){
    console.log("Bitch");
    this.loadData();
  }

  renderRows() {
    if (this.state.cardCount > 0) {
      return this.state.cardIDs.map((cardID, index) => {
        return <CardRow
          key={index}
          id={index}
          cardID={cardID}
          cardOwner={this.state.cardOwners[index]}
          address={this.props.address}
        />
      });
    }
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Cards</h3>
        <Link route={`/cardseries/${this.props.address}`}>
          <a><Button primary>Back</Button></a>
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
        <div>Found {this.state.cardCount} cards.</div>
      </Layout>
    );
  }
}

export default CardIndex;