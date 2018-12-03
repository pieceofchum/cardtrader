import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import factory from '../../../ethereum/factory';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class CardSeriesNew extends Component {
  state = {
    seriesID: '',
    seriesName: '',
    seriesDescription:'',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCardSeries(this.state.seriesID, this.state.seriesName, this.state.seriesDescription)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/cardseries');
    }catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return(
      <Layout>
        <h3>Create a Card Series</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Series ID</label>
            <Input
              value={this.state.seriesID}
              onChange={event => this.setState({seriesID: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Series Name</label>
            <Input
              value={this.state.seriesName}
              onChange={event => this.setState({seriesName: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Series Description</label>
            <Input
              value={this.state.seriesDescription}
              onChange={event => this.setState({seriesDescription: event.target.value})}
            />
          </Form.Field>
          <Message error header="Error" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CardSeriesNew;