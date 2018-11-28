import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return(
    <Menu style={{ marginTop: '10px' }}>
      <Link route='/'>
        <a className="item">
          CardTrader
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route='/cardseries'>
          <a className="item">
            Manage Card Series
          </a>
        </Link>
        <Link route="/trader">
          <a className="item">
            Card App
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};