const routes = require('next-routes')();

routes
  .add('/cardseries', '/cardtrader/cardseries/index')
  .add('/cardseries/new', '/cardtrader/cardseries/new')
  .add('/cardseries/:address', '/cardtrader/cardseries/show')
  .add('/cardseries/:address/new', '/cardtrader/cardseries/newCard')
  .add('/cardseries/cards/:address', '/cardtrader/cardseries/cards')
  .add('/cardseries/traderequests/:address', '/cardtrader/cardseries/traderequests')
  .add('/trader', '/cardtrader/trader/index');
 // .add('/traderequests/requests', '/cardtrader/traderequests/index')
 // .add('/traderequests/requests/new', '/cardtrader/traderequests/new');

module.exports = routes;