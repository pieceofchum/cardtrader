import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import CardSeries from '../../../ethereum/cardseries';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

// Component to add trading cards to
// a Card Series maintained by the
// Card Series Factory
class CardNew extends Component {
  state = {
    cardID: '',
    owner: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  // Collect data on the web form and
  // attempt to add the data to create
  // a new card for a specific Card Series
  // Contract, when complete the new card
  // will be added to the blockchain and
  // the end user will be routed back to
  // the card list for the card series
  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      const cardSeries = CardSeries(this.props.address);

      await cardSeries.methods
        .addCard(this.state.cardID, this.state.owner)
        .send({
          from: accounts[0]
        });

      Router.pushRoute(`/cardseries/cards/${this.props.address}`);
    }catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return(
      <Layout>
        <h3>Add a Card</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Card ID</label>
            <Input
              value={this.state.cardID}
              onChange={event => this.setState({cardID: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Owner Address</label>
            <Input
              value={this.state.owner}
              onChange={event => this.setState({owner: event.target.value})}
            />
          </Form.Field>
          <Message error header="Error" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CardNew;