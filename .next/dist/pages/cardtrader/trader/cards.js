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
    (0, _classCallCheck3.default)(this, CardTraderHome);

    return (0, _possibleConstructorReturn3.default)(this, (CardTraderHome.__proto__ || (0, _getPrototypeOf2.default)(CardTraderHome)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardTraderHome, [{
    key: 'renderCards',
    value: function renderCards() {
      var _this2 = this;

      var items = this.props.cards.cardIDs.map(function (id) {
        return {
          image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
          header: 'Card ID: ' + id,
          extra: _react2.default.createElement(_routes.Link, { route: '/traderequest/' + _this2.props.address + '/' + id, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, _react2.default.createElement(_semanticUiReact.Button, {
            floated: 'right',
            content: 'Trade',
            icon: 'add circle',
            primary: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }))),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Cards'), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, accounts, cardSeries, cardIDs, cardCount, cards;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                cardSeries = (0, _cardseries2.default)(address);
                _context.next = 7;
                return cardSeries.methods.getCardsByOwner(accounts[0]).call();

              case 7:
                cardIDs = _context.sent;
                cardCount = cardIDs.length;
                cards = {
                  cardCount: cardCount,
                  cardIDs: cardIDs
                };

                console.log(cards);
                return _context.abrupt('return', { address: address, cards: cards });

              case 12:
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

  return CardTraderHome;
}(_react.Component);

exports.default = CardTraderHome;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXGNhcmRzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkJ1dHRvbiIsIkNhcmQiLCJMaW5rIiwiTGF5b3V0IiwiQ2FyZFNlcmllcyIsIkNhcmRUcmFkZXJIb21lIiwiaXRlbXMiLCJwcm9wcyIsImNhcmRzIiwiY2FyZElEcyIsIm1hcCIsImltYWdlIiwiaGVhZGVyIiwiaWQiLCJleHRyYSIsImFkZHJlc3MiLCJmbHVpZCIsInJlbmRlckNhcmRzIiwicXVlcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FyZFNlcmllcyIsIm1ldGhvZHMiLCJnZXRDYXJkc0J5T3duZXIiLCJjYWxsIiwiY2FyZENvdW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7a0NBaUJVO21CQUNaOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixRQUFqQixBQUF5QixJQUFJLGNBQU0sQUFDL0M7O2lCQUFPLEFBQ0UsQUFDUDtrQkFBUSxjQUZILEFBRWlCLEFBQ3RCO2lDQUNFLEFBQUMsOEJBQUssMEJBQXdCLE9BQUEsQUFBSyxNQUE3QixBQUFtQyxnQkFBekMsQUFBb0Q7d0JBQXBEOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNFLEFBQUM7cUJBQUQsQUFDVSxBQUNSO3FCQUZGLEFBRVUsQUFDUjtrQkFIRixBQUdPLEFBQ0w7cUJBSkY7d0JBQUE7MEJBTkQsQUFJSCxBQUNFLEFBQ0UsQUFRTjtBQVJNO0FBQ0U7aUJBUFYsQUFBTyxBQWNFLEFBRVY7QUFoQlEsQUFDTDtBQUZKLEFBQWMsQUFtQmQsT0FuQmM7OzJDQW9CWixBQUFDLHNCQUFELEFBQU0sU0FBTSxhQUFaLEFBQXlCLEdBQUcsT0FBNUIsQUFBbUM7b0JBQW5DO3NCQURGLEFBQ0UsQUFFSDtBQUZHO09BQUE7Ozs7NkJBSUssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyxlQUhMLEFBQ0UsQUFFRyxBQUFLLEFBR1g7Ozs7OzJHLEFBaEQ0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE1BQWxCLEE7O3VCQUNlLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0Esb0NBRUE7QSw2QkFBYSwwQkFBQSxBLEFBQVc7O3VCQUNSLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGdCQUFnQixTQUFuQyxBQUFtQyxBQUFTLElBQTVDLEEsQUFBZ0Q7O21CQUFoRTtBLG1DQUNBO0EsNEJBQVksUUFBUSxBQUVwQixBO0E7NkJBQVEsQUFDRCxBQUNYOzJCLEFBRlksQUFFSCxBQUVYO0FBSmMsQUFDWjs7d0JBR0YsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxTQUFGLFNBQVcsT0FBWCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZGtCLEEsQUFvRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNhcmRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RyYXltL3VkZW15LWV0aC9jYXJkdHJhZGVyIn0=