import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import TradeRequestRow from '../../../components/TradeRequestRow';

// Component that displays all the
// Trade Requests that have been
// submitted within the current
// Card Series Contract, this is
// a read-only view and managers c
// cannot edit/approve/decline a
// Trade Request
class TradeRequestIndex extends Component {

  // Retrieve the Trade Requests that
  // are stored in the selected
  // Card Series Contract
  static async getInitialProps(props) {
    const { address } = props.query;
    const cardSeries = CardSeries(address);
    const tradeRequestIDs = await cardSeries.methods.getAllTradeRequests().call();
    const tradeCount = tradeRequestIDs.length;

    const tradeRequests = await Promise.all(
      Array(parseInt(tradeCount)).fill().map((element, index) => {
        return cardSeries.methods.tradeRequestsByKey(tradeRequestIDs[index]).call();
      })
    );

    return { address, tradeCount, tradeRequests };
  }

  renderRows() {
    return this.props.tradeRequests.map((tradeRequest, index) => {
      return <TradeRequestRow
        key={index}
        id={index}
        tradeRequest={tradeRequest}
        address={this.props.address}
      />
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Trade Requests</h3>
        <Link route={`/cardseries/${this.props.address}`}>
          <a><Button primary>Back</Button></a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Owner 1</HeaderCell>
              <HeaderCell>Owner 2</HeaderCell>
              <HeaderCell>CardID 1</HeaderCell>
              <HeaderCell>CardID 2</HeaderCell>
              <HeaderCell>Status</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found {this.props.tradeCount} trade requests.</div>
      </Layout>
    );
  }
}

export default TradeRequestIndex;