import React, {Component} from 'react';
import { Menu, Loader } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class Header extends Component {
  onMenuSelect = (event, route) => {
    event.preventDefault();
    Router.pushRoute(route);
  };

  render() {
    return(
      <Menu style={{ marginTop: '10px' }}>
        <a className="item" href="#" onClick={(e) => this.onMenuSelect(e, '/')}>
          CardTrader
        </a>
        <Menu.Menu position="right">
          <a className="item" href="#" onClick={(e) => this.onMenuSelect(e, '/cardseries')}>
            Manage Card Series
          </a>
          <a className="item" href="#" onClick={(e) => this.onMenuSelect(e, '/trader')}>
            Card App
          </a>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
