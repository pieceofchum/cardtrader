import React, { Component } from 'react';
import { Button, Table, Segment, Message } from 'semantic-ui-react';
import {Link, Router} from '../../../../routes';
import web3 from '../../../../ethereum/web3';
import Layout from '../../../../components/Layout';
import CardSeries from '../../../../ethereum/cardseries';
//import TradeRequestRowApproval from '../../../../components/TradeRequestRowApproval';

class MyTradeRequests extends Component {
  state = {
    tradeCount: 0,
    tradeRequests: [],
    tradeRequestIDs: [],
    account: 0,
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  async loadData() {
    const { address } = this.props;
    const cardSeries = CardSeries(address);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const tradeRequestIDs = await cardSeries.methods.getTradeRequestsByOwner(account).call();
    const tradeCount = tradeRequestIDs.length;

    const tradeRequests = await Promise.all(
      Array(parseInt(tradeCount)).fill().map((element, index) => {
        return cardSeries.methods.tradeRequestsByKey(tradeRequestIDs[index]).call();
      })
    );

    this.setState( { tradeCount: tradeCount, tradeRequests: tradeRequests,
                    tradeRequestIDs: tradeRequestIDs, account: account });
  }

  componentDidMount(){
    this.loadData();
  }

  approve = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    var tradeKey = new String(event.target.value);

    try {
      const accounts = await web3.eth.getAccounts();
      const cardSeries = CardSeries(this.props.address);
      console.log(tradeKey);

      await cardSeries.methods
        .approveTradeRequest(tradeKey.valueOf())
        .send({
          from: accounts[0]
        });
    }catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  decline = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    var tradeKey = new String(event.target.value);

    try {
      const accounts = await web3.eth.getAccounts();
      const cardSeries = CardSeries(this.props.address);
      console.log(tradeKey);

      await cardSeries.methods
        .declineTradeRequest(tradeKey.valueOf())
        .send({
          from: accounts[0]
        });
    }catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
      window.location.reload();    }
  };

  renderRowDetail (tradeRequest, tradeRequestID) {
    const { Row, Cell} = Table;
    const { account } = this.state;

    return (
      <Row key={tradeRequestID}>
        <Cell>{tradeRequest.owner1}</Cell>
        <Cell>{tradeRequest.owner2}</Cell>
        <Cell>{tradeRequest.cardID1}</Cell>
        <Cell>{tradeRequest.cardID2}</Cell>
        <Cell>
          {tradeRequest.owner2 == account ?
            tradeRequest.status == 1 ? 'Approved'
              : tradeRequest.status == 2 ? 'Declined'
              : tradeRequest.status == 3 ? 'Completed'
                :
                (
                  <div>
                    <Button basic
                            color='green'
                            loading={this.state.loading}
                            onClick={this.approve}
                            value={tradeRequestID}>
                      Approve
                    </Button>
                    <Button basic
                            color='red'
                            loading={this.state.loading}
                            onClick={this.decline}
                            value={tradeRequestID}>
                      Decline
                    </Button>
                  </div>
                )
            : tradeRequest.status == 0 ? 'Awaiting Approval'
              : tradeRequest.status == 1 ? 'Approved'
                : tradeRequest.status == 2 ? 'Declined'
                  : 'Completed'
          }
        </Cell>
      </Row>
    );
  }

  renderRows() {
    console.log("What the hell " + this.state.tradeCount);
    if (this.state.tradeCount > 0) {
      return this.state.tradeRequests.map((tradeRequest, index) => {
        return this.renderRowDetail(tradeRequest, this.state.tradeRequestIDs[index]);
      });
    }
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    const { tradeCount } = this.state;

    return (
      <Layout>
        <h3>
          Trade Requests for {this.state.account}
        </h3>
        <Link route={`/trader/${this.props.address}`}>
          <a><Button primary>Back</Button></a>
        </Link>
        {!!this.state.errorMessage ? <Message error header="Error" content={this.state.errorMessage}/> : ''}
        <Table>
          <Header>
            <Row key={1}>
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
        <div>Found { tradeCount } trade requests.</div>
      </Layout>
    );
  }
}

export default MyTradeRequests;