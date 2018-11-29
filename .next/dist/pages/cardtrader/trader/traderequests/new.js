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

var _web = require('../../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../../routes');

var _Layout = require('../../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _cardseries = require('../../../../ethereum/cardseries');

var _cardseries2 = _interopRequireDefault(_cardseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\traderequests\\new.js?entry';


var TradeRequest = function (_Component) {
  (0, _inherits3.default)(TradeRequest, _Component);

  function TradeRequest() {
    (0, _classCallCheck3.default)(this, TradeRequest);

    return (0, _possibleConstructorReturn3.default)(this, (TradeRequest.__proto__ || (0, _getPrototypeOf2.default)(TradeRequest)).apply(this, arguments));
  }

  (0, _createClass3.default)(TradeRequest, [{
    key: 'renderCard',
    value: function renderCard(cardID) {
      return _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, { value: 'Card ID: ' + cardID, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      return _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.renderCard(this.props.cards.myCardID)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.renderCard())));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Fucker'), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.renderCards(), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Create Trade Request')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var _props$query, address, cardid, accounts, cardSeries, myCardIDs, cardCount, allCards, cardChoices, cards;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, cardid = _props$query.cardid;
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                cardSeries = (0, _cardseries2.default)(address);
                _context.next = 7;
                return cardSeries.methods.getCardsByOwner(accounts[0]).call();

              case 7:
                myCardIDs = _context.sent;
                cardCount = myCardIDs.length;
                _context.next = 11;
                return cardSeries.methods.getAllCards().call();

              case 11:
                allCards = _context.sent;
                cardChoices = allCards.filter(function (card) {
                  return !myCardIDs.includes(card);
                });
                cards = {
                  cardCount: cardCount,
                  myCardID: cardid,
                  cardChoices: cardChoices
                };

                console.log(cards);
                return _context.abrupt('return', { address: address, cards: cards });

              case 16:
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

  return TradeRequest;
}(_react.Component);

exports.default = TradeRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXHRyYWRlcmVxdWVzdHNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIkltYWdlIiwiRm9ybSIsIkxpbmsiLCJMYXlvdXQiLCJDYXJkU2VyaWVzIiwiVHJhZGVSZXF1ZXN0IiwiY2FyZElEIiwicmVuZGVyQ2FyZCIsInByb3BzIiwiY2FyZHMiLCJteUNhcmRJRCIsInJlbmRlckNhcmRzIiwicXVlcnkiLCJhZGRyZXNzIiwiY2FyZGlkIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhcmRTZXJpZXMiLCJtZXRob2RzIiwiZ2V0Q2FyZHNCeU93bmVyIiwiY2FsbCIsIm15Q2FyZElEcyIsImNhcmRDb3VudCIsImxlbmd0aCIsImdldEFsbENhcmRzIiwiYWxsQ2FyZHMiLCJjYXJkQ2hvaWNlcyIsImZpbHRlciIsImNhcmQiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBTzs7QUFDcEMsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OytCLEFBcUJPLFFBQVEsQUFDakI7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHdDQUFNLEtBQVAsQUFBVztvQkFBWDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNFLEFBQUMsc0JBQUQsQUFBTSxVQUFPLE9BQU8sY0FBcEIsQUFBa0M7b0JBQWxDO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBSVA7QUFKTzs7Ozs7a0NBTU0sQUFDWjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFGaEMsQUFDRSxBQUNHLEFBQWlDLEFBRXBDLDRCQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0c7QUFESDtjQU5OLEFBQ0UsQUFDRSxBQUlFLEFBQ0csQUFBSyxBQUtmOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsY0FBQSxBQUNJLEFBQUssQUFDUCwrQkFBQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUxOLEFBQ0UsQUFFRSxBQUVFLEFBSVA7Ozs7OzJHQXhENEIsQTs7Ozs7OzsrQkFDQyxNQUFNLEEsT0FBMUIsQSx1QixBQUFBLFMsQUFBUyxzQixBQUFBOzt1QkFFTSxjQUFBLEFBQUssSUFBSSxBLEFBQVQ7O21CQUFqQjtBLG9DQUNBO0EsNkJBQWEsMEJBQUEsQSxBQUFXOzt1QkFDTixXQUFBLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsU0FBbkMsQUFBbUMsQUFBUyxJQUE1QyxBQUFnRCxBOzttQkFBbEU7QSxxQ0FDQTtBLDRCQUFZLFUsQUFBVTs7dUJBQ0wsV0FBQSxBQUFXLFFBQVgsQUFBbUIsY0FBbkIsQUFBaUMsQTs7bUJBQWxEO0Esb0NBQ0E7QSx1Q0FBZSxBQUFTLE9BQVEsVUFBQSxBQUFFLE1BQUY7eUJBQVksQ0FBQyxVQUFBLEFBQVUsU0FBdkIsQUFBYSxBQUFvQjtBQUFsRCxBQUVmLEEsaUJBRmU7QTs2QkFFUCxBQUNELEFBQ1g7NEJBRlksQUFFRixBQUNWOytCQUhZLEFBR0MsQSxBQUdmO0FBTmMsQUFDWjs7d0JBS0YsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxTQUFGLFNBQVcsT0FBWCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJnQixBLEFBNEQzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZHJheW0vdWRlbXktZXRoL2NhcmR0cmFkZXIifQ==