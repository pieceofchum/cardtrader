'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _cardseries = require('../../../ethereum/cardseries');

var _cardseries2 = _interopRequireDefault(_cardseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\index.js?entry';


var MyCardSeriesIndex = function (_Component) {
  (0, _inherits3.default)(MyCardSeriesIndex, _Component);

  function MyCardSeriesIndex() {
    (0, _classCallCheck3.default)(this, MyCardSeriesIndex);

    return (0, _possibleConstructorReturn3.default)(this, (MyCardSeriesIndex.__proto__ || (0, _getPrototypeOf2.default)(MyCardSeriesIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyCardSeriesIndex, [{
    key: 'renderCardSeries',
    value: function renderCardSeries() {
      var items = [];
      this.props.mySeries.forEach(function (key, value) {
        items.push({
          header: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, value.seriesName)), _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, value.seriesDescription))),
          description: _react2.default.createElement(_routes.Link, { route: '/cardseries/' + key, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, 'View Card Series')),
          meta: "The number of cards you own in this series is " + value.cards.length,
          fluid: true
        });
      });

      console.log(items);

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          account = _props.account,
          mySeries = _props.mySeries;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'My Card Series'), mySeries.size === 0 ? _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'No Card Series with cards owned by you were found.') : this.renderCardSeries()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var cardSeriesAddresses, accounts, account, mySeries, i, cardSeries, cards, seriesName, summary, cardSeriesSummary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.deployedCardSeries().call();

              case 2:
                cardSeriesAddresses = _context.sent;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                account = accounts[0];
                mySeries = new _map2.default();
                i = 0;

              case 9:
                if (!(i < cardSeriesAddresses.length)) {
                  _context.next = 25;
                  break;
                }

                cardSeries = (0, _cardseries2.default)(cardSeriesAddresses[i]);
                _context.next = 13;
                return cardSeries.methods.getCardsByOwner(account).call();

              case 13:
                cards = _context.sent;
                _context.next = 16;
                return cardSeries.methods._seriesName.call();

              case 16:
                seriesName = _context.sent;
                _context.next = 19;
                return cardSeries.methods.getSummary().call();

              case 19:
                summary = _context.sent;
                cardSeriesSummary = {
                  address: props.query.address,
                  seriesID: summary[0],
                  seriesName: summary[1],
                  seriesDescription: summary[2],
                  numCards: summary[3],
                  numTraderRequests: summary[4],
                  manager: summary[5],
                  cards: cards
                };

                if (cards.length > 0) {
                  //mySeries.push(cardSeriesAddresses[i]);
                  mySeries.set(cardSeriesSummary, cardSeriesAddresses[i]);
                }

              case 22:
                i++;
                _context.next = 9;
                break;

              case 25:

                console.log(mySeries);

                return _context.abrupt('return', { account: account, mySeries: mySeries });

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyCardSeriesIndex;
}(_react.Component);

exports.default = MyCardSeriesIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsImZhY3RvcnkiLCJ3ZWIzIiwiTGF5b3V0IiwiTGluayIsIkNhcmRTZXJpZXMiLCJNeUNhcmRTZXJpZXNJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJteVNlcmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInB1c2giLCJoZWFkZXIiLCJzZXJpZXNOYW1lIiwic2VyaWVzRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJjYXJkcyIsImxlbmd0aCIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsImFjY291bnQiLCJzaXplIiwicmVuZGVyQ2FyZFNlcmllcyIsIm1ldGhvZHMiLCJkZXBsb3llZENhcmRTZXJpZXMiLCJjYWxsIiwiY2FyZFNlcmllc0FkZHJlc3NlcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJpIiwiY2FyZFNlcmllcyIsImdldENhcmRzQnlPd25lciIsIl9zZXJpZXNOYW1lIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJjYXJkU2VyaWVzU3VtbWFyeSIsImFkZHJlc3MiLCJxdWVyeSIsInNlcmllc0lEIiwibnVtQ2FyZHMiLCJudW1UcmFkZXJSZXF1ZXN0cyIsIm1hbmFnZXIiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7O3VDQW9DZSxBQUNqQjtVQUFJLFFBQUosQUFBWSxBQUNaO1dBQUEsQUFBSyxNQUFMLEFB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