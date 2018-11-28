'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _cardseries = require('../../../ethereum/cardseries');

var _cardseries2 = _interopRequireDefault(_cardseries);

var _CardRow = require('../../../components/CardRow');

var _CardRow2 = _interopRequireDefault(_CardRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\cardseries\\cards.js?entry';


var CardIndex = function (_Component) {
  (0, _inherits3.default)(CardIndex, _Component);

  function CardIndex() {
    (0, _classCallCheck3.default)(this, CardIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CardIndex.__proto__ || (0, _getPrototypeOf2.default)(CardIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.cardIDs.map(function (cardID, index) {
        return _react2.default.createElement(_CardRow2.default, {
          key: index,
          id: index,
          cardID: cardID,
          cardOwner: _this2.props.cardOwners[index],
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Cards'), _react2.default.createElement(_routes.Link, { route: '/cardseries/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Back')), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Card ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Owner'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.renderRows())), _react2.default.createElement(_routes.Link, { route: '/cardseries/' + this.props.address + '/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Add Card',
        icon: 'add circle',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Found ', this.props.cardCount, ' cards.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, cardSeries, cardIDs, cardCount, cardOwners;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                cardSeries = (0, _cardseries2.default)(address);

                //NEED TO ADD A NEW FUNCTION TO CONTRACT TO RETURN THE CARDS ARRAY

                _context.next = 4;
                return cardSeries.methods.getAllCards().call();

              case 4:
                cardIDs = _context.sent;
                cardCount = cardIDs.length;
                _context.next = 8;
                return _promise2.default.all(Array(parseInt(cardCount)).fill().map(function (element, index) {
                  return cardSeries.methods.getCardOwnerByCardID(cardIDs[index]).call();
                }));

              case 8:
                cardOwners = _context.sent;

                console.log(cardIDs);
                console.log(cardOwners);
                return _context.abrupt('return', { address: address, cardCount: cardCount, cardIDs: cardIDs, cardOwners: cardOwners });

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

  return CardIndex;
}(_react.Component);

exports.default = CardIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFxjYXJkc2VyaWVzXFxjYXJkcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhcmRTZXJpZXMiLCJDYXJkUm93IiwiQ2FyZEluZGV4IiwicHJvcHMiLCJjYXJkSURzIiwibWFwIiwiY2FyZElEIiwiaW5kZXgiLCJjYXJkT3duZXJzIiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsImNhcmRDb3VudCIsInF1ZXJ5IiwiY2FyZFNlcmllcyIsIm1ldGhvZHMiLCJnZXRBbGxDYXJkcyIsImNhbGwiLCJsZW5ndGgiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJnZXRDYXJkT3duZXJCeUNhcmRJRCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7O2lDQXNCUzttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsT0FBVSxBQUMvQzsrQkFBTyxBQUFDO2VBQUQsQUFDQSxBQUNMO2NBRkssQUFFRCxBQUNKO2tCQUhLLEFBR0csQUFDUjtxQkFBVyxPQUFBLEFBQUssTUFBTCxBQUFXLFdBSmpCLEFBSU0sQUFBc0IsQUFDakM7bUJBQVMsT0FBQSxBQUFLLE1BTFQsQUFLZTs7c0JBTGY7d0JBQVAsQUFBTyxBQU9SO0FBUFE7QUFDTCxTQURLO0FBRFQsQUFBTyxBQVNSLE9BVFE7Ozs7NkJBV0E7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDbUMsdUJBRG5DLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFFakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDBCQUFBLEFBQUMsOEJBQUssd0JBQXNCLEtBQUEsQUFBSyxNQUFqQyxBQUF1QztvQkFBdkM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBRUUsQUFDRSxBQUVGLDBCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKTixBQUNFLEFBQ0UsQUFFRSxBQUdKLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGNBWkosQUFLRSxBQU9FLEFBQ0MsQUFBSyxBQUdSLGdDQUFBLEFBQUMsOEJBQUssd0JBQXNCLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxVQUF2QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGO29CQUFBO3NCQWxCTixBQWdCRSxBQUNFLEFBQ0UsQUFPSjtBQVBJO0FBQ0UsNEJBTU4sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLFdBMUIzQixBQUNFLEFBeUJFLEFBR0w7Ozs7OzJHQWpFNEIsQTs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE1BQWxCLEEsQUFFRjtBLDZCQUFhLDBCQUFBLEFBQVcsQUFFOUIsQTs7Ozs7dUJBQ3NCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGNBQW5CLEFBQWlDLEE7O21CQUFqRDtBLG1DQUVBO0EsNEJBQVksUUFBUSxBOzt5Q0FFRCxBQUFRLFVBQ3pCLFNBQU4sQUFBTSxBQUFTLFlBQWYsQUFBMkIsT0FBM0IsQUFBa0MsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDeEQ7eUJBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIscUJBQXFCLFFBQXhDLEFBQXdDLEFBQVEsUUFBdkQsQUFBTyxBQUF3RCxBQUNoRTtBQUhzQixBQUN2QixBLGlCQUFBLENBRHVCOzttQkFBbkI7QSxzQ0FNTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLFNBQUYsU0FBVyxXQUFYLFdBQXNCLFNBQXRCLFNBQStCLFlBQS9CLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQmEsQSxBQXFFeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY2FyZHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZHJheW0vdWRlbXktZXRoL2NhcmR0cmFkZXIifQ==