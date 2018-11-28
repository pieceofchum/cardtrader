import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class TradeRequestRow extends Component {
  render () {
    const { Row, Cell} = Table;
    const { id, tradeRequest } = this.props;

    console.log(tradeRequest);

    return (
      <Row>
        <Cell>{tradeRequest.owner1}</Cell>
        <Cell>{tradeRequest.owner2}</Cell>
        <Cell>{tradeRequest.cardID1}</Cell>
        <Cell>{tradeRequest.cardID2}</Cell>
        <Cell>
          {tradeRequest.owner1Approval ?
            <Button color={"green"} basic>
              Approved
            </Button>
            : (
            <Button color={"yellow"} basic>
              Awaiting Approval
            </Button>
          )}
        </Cell>
        <Cell>
          {tradeRequest.owner2Approval ?
            <Button color={"green"} basic>
              Approved
            </Button>
            : (
              <Button color={"yellow"} basic>
                Awaiting Approval
              </Button>
            )}
        </Cell>
        <Cell>{tradeRequest.approvalComplete}</Cell>
        <Cell>{tradeRequest.tradeCompleted}</Cell>
      </Row>
    );
  }
}

export default TradeRequestRow;