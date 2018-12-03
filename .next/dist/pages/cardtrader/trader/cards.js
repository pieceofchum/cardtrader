'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _cardseries = require('../../../ethereum/cardseries');

var _cardseries2 = _interopRequireDefault(_cardseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\cards.js?entry';


var CardTraderHome = function (_Component) {
  (0, _inherits3.default)(CardTraderHome, _Component);

  function CardTraderHome() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CardTraderHome);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardTraderHome.__proto__ || (0, _getPrototypeOf2.default)(CardTraderHome)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cards: {
        cardCount: 0,
        cardIDs: []
      },
      account: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CardTraderHome, [{
    key: 'loadData',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var address, accounts, account, cardSeries, cardIDs, cardCount, cards;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = this.props.address;
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                account = accounts[0];
                cardSeries = (0, _cardseries2.default)(address);
                _context.next = 8;
                return cardSeries.methods.getCardsByOwner(account).call();

              case 8:
                cardIDs = _context.sent;
                cardCount = cardIDs.length;
                cards = {
                  cardCount: cardCount,
                  cardIDs: cardIDs
                };

                this.setState({ cards: cards, account: account });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _ref2.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _this2 = this;

      if (this.state.cards.cardCount > 0) {
        var items = this.state.cards.cardIDs.map(function (id) {
          return {
            image: '/static/' + id + '.jpg',
            header: 'Card ID: ' + id,
            extra: _react2.default.createElement(_routes.Link, { route: '/traderequest/' + _this2.props.address + '/' + id, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            }, _react2.default.createElement('a', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            }, _react2.default.createElement(_semanticUiReact.Button, {
              floated: 'right',
              content: 'Trade',
              icon: 'add circle',
              primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            }))),
            fluid: true
          };
        });

        return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 3, items: items, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Cards for ', this.state.account), _react2.default.createElement(_routes.Link, { route: '/trader', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Back'))), _react2.default.createElement(_routes.Link, { route: '/traderequest/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'View Trade Requests',
        icon: 'add circle',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CardTraderHome;
}(_react.Component);

exports.default = CardTraderHome;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXGNhcmRzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkJ1dHRvbiIsIkNhcmQiLCJMaW5rIiwiTGF5b3V0IiwiQ2FyZFNlcmllcyIsIkNhcmRUcmFkZXJIb21lIiwic3RhdGUiLCJjYXJkcyIsImNhcmRDb3VudCIsImNhcmRJRHMiLCJhY2NvdW50IiwiYWRkcmVzcyIsInByb3BzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhcmRTZXJpZXMiLCJtZXRob2RzIiwiZ2V0Q2FyZHNCeU93bmVyIiwiY2FsbCIsImxlbmd0aCIsInNldFN0YXRlIiwibG9hZERhdGEiLCJpdGVtcyIsIm1hcCIsImltYWdlIiwiaWQiLCJoZWFkZXIiLCJleHRyYSIsImZsdWlkIiwicmVuZGVyQ2FyZHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7NE5BQ0osQTs7bUJBQ1MsQUFDTSxBQUNYO2lCQUhJLEFBQ0MsQUFFSSxBQUVYO0FBSk8sQUFDTDtlQUZJLEFBS0csQTtBQUxILEFBQ047Ozs7Ozs7Ozs7O21CQWFRO0EsMEJBQVksSyxBQUFLLE1BQWpCLEE7O3VCQUNlLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSwwQkFBVSxTQUNWLEEsQUFEVSxBQUFTO0EsNkJBQ04sMEIsQUFBQSxBQUFXOzt1QkFDUixXQUFBLEFBQVcsUUFBWCxBQUFtQixnQkFBbkIsQUFBbUMsUyxBQUFuQyxBQUE0Qzs7bUJBQTVEO0EsbUNBQ0E7QSw0QkFBWSxRQUFRLEFBRXBCLEE7QTs2QkFBUSxBQUNELEFBQ1g7MkJBRlksQUFFSCxBLEFBR1g7QUFMYyxBQUNaOztxQkFJRixBQUFLLFNBQVUsRUFBQyxPQUFELEFBQVEsT0FBTyxTQUE5QixBQUFlLEFBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBR3RCLEFBQ2pCO1dBQUEsQUFBSyxBQUNOOzs7O2tDQUVhO21CQUNaOztVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixZQUFyQixBQUFpQyxHQUFHLEFBQ2xDO1lBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFFBQWpCLEFBQXlCLElBQUksY0FBTSxBQUMvQzs7bUJBQ1MsYUFBQSxBQUFhLEtBRGYsQUFDb0IsQUFDekI7b0JBQVEsY0FGSCxBQUVpQixBQUN0QjttQ0FDRSxBQUFDLDhCQUFLLDBCQUF3QixPQUFBLEFBQUssTUFBN0IsQUFBbUMsZ0JBQXpDLEFBQW9EOzBCQUFwRDs0QkFBQSxBQUNFO0FBREY7YUFBQSxrQkFDRSxjQUFBOzswQkFBQTs0QkFBQSxBQUNFO0FBREY7QUFBQSwrQkFDRSxBQUFDO3VCQUFELEFBQ1UsQUFDUjt1QkFGRixBQUVVLEFBQ1I7b0JBSEYsQUFHTyxBQUNMO3VCQUpGOzBCQUFBOzRCQU5ELEFBSUgsQUFDRSxBQUNFLEFBUU47QUFSTTtBQUNFO21CQVBWLEFBQU8sQUFjRSxBQUVWO0FBaEJRLEFBQ0w7QUFGSixBQUFjLEFBbUJkLFNBbkJjOzs2Q0FvQlosQUFBQyxzQkFBRCxBQUFNLFNBQU0sYUFBWixBQUF5QixHQUFHLE9BQTVCLEFBQW1DO3NCQUFuQzt3QkFERixBQUNFLEFBRUg7QUFGRztTQUFBO0FBR0w7Ozs7NkJBRVEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFlLG1CQUFBLEFBQUssTUFEdEIsQUFDRSxBQUEwQixBQUMxQiwwQkFBQSxBQUFDLDhCQUFLLE9BQU47b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUc7QUFBSDtBQUFBLHlCQUFHLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBSFAsQUFFRSxBQUNFLEFBQUcsQUFFTCwyQkFBQSxBQUFDLDhCQUFLLDBCQUF3QixLQUFBLEFBQUssTUFBbkMsQUFBeUM7b0JBQXpDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1EsQUFDUjtpQkFGQSxBQUVRLEFBQ1I7Y0FIQSxBQUdLLEFBQ0w7aUJBSkE7b0JBQUE7c0JBUE4sQUFLRSxBQUNFLEFBQ0UsQUFPSDtBQVBHO0FBQ0EsaUJBVFIsQUFDRSxBQWNHLEFBQUssQUFHWDs7Ozs7NkdBdkU0QixBOzs7OzttQkFDbkI7QSwwQkFBWSxNQUFNLEEsTSxBQUFsQjtrREFDRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhrQixBLEFBbUY3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjYXJkcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kcmF5bS91ZGVteS1ldGgvY2FyZHRyYWRlciJ9