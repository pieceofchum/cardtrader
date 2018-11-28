'use strict';

var routes = require('next-routes')();

routes.add('/cardseries', '/cardtrader/cardseries/index').add('/cardseries/new', '/cardtrader/cardseries/new').add('/cardseries/:address', '/cardtrader/cardseries/show').add('/cardseries/:address/new', '/cardtrader/cardseries/newCard').add('/cardseries/cards/:address', '/cardtrader/cardseries/cards').add('/cardseries/traderequests/:address', '/cardtrader/cardseries/traderequests').add('/trader', '/cardtrader/trader/index');
// .add('/traderequests/requests', '/cardtrader/traderequests/index')
// .add('/traderequests/requests/new', '/cardtrader/traderequests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGVBQ3NCLEFBRHRCLGdDQUVHLEFBRkgsSUFFTyxBQUZQLG1CQUUwQixBQUYxQiw4QkFHRyxBQUhILElBR08sQUFIUCx3QkFHK0IsQUFIL0IsK0JBSUcsQUFKSCxJQUlPLEFBSlAsNEJBSW1DLEFBSm5DLGtDQUtHLEFBTEgsSUFLTyxBQUxQLDhCQUtxQyxBQUxyQyxnQ0FNRyxBQU5ILElBTU8sQUFOUCxzQ0FNNkMsQUFON0Msd0NBT0csQUFQSCxJQU9PLEFBUFAsV0FPa0IsQUFQbEI7QUFRQztBQUNBOztBQUVELE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZHJheW0vdWRlbXktZXRoL2NhcmR0cmFkZXIifQ==