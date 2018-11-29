import React, { Component } from 'react';
import { Button, Table, Segment } from 'semantic-ui-react';
import { Link } from '../../../routes';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import TradeRequestRow from '../../../components/TradeRequestRow';

class TradeRequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const cardSeries = CardSeries(address);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const tradeRequestIDs = await cardSeries.methods.getTradeRequestsByOwner(account).call();

    /*
    const tradeRequests = await Promise.all(
      Array(parseInt(tradeCount)).fill().map((element, index) => {
        return cardSeries.methods.getTradeRequestsByOwner(tradeRequestIDs[index]).call();
      })
    );
    */
    
    const tradeRequests = [];

    console.log(tradeRequestIDs);
    return { address, tradeRequests };
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
          <a>Back</a>
        </Link>
        <Table small>
          <Header>
            <Row>
              <HeaderCell>Owner 1</HeaderCell>
              <HeaderCell>Owner 2</HeaderCell>
              <HeaderCell>CardID 1</HeaderCell>
              <HeaderCell>CardID 2</HeaderCell>
              <HeaderCell>Owner 1 Approval</HeaderCell>
              <HeaderCell>Owner 2 Approval</HeaderCell>
              <HeaderCell>Approved</HeaderCell>
              <HeaderCell>Completed</HeaderCell>
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