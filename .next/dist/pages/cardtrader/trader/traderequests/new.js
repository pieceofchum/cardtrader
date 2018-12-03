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

var _reactResponsiveCarousel = require('react-responsive-carousel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\traderequests\\new.js?entry';


var TradeRequest = function (_Component) {
  (0, _inherits3.default)(TradeRequest, _Component);

  function TradeRequest() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TradeRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TradeRequest.__proto__ || (0, _getPrototypeOf2.default)(TradeRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selCard: 0,
      cardCount: 0,
      cardChoices: [],
      account: 0,
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var selCardID, myCardID, accounts, cardSeries;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 2;
                selCardID = _this.state.cardChoices[_this.state.selCard];
                myCardID = _this.props.myCardID;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                cardSeries = (0, _cardseries2.default)(_this.props.address);
                _context.next = 11;
                return cardSeries.methods.createTradeRequest(myCardID, selCardID).send({
                  from: accounts[0]
                });

              case 11:

                _routes.Router.pushRoute('/traderequest/' + _this.props.address);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
                _context.prev = 17;

                _this.setState({ loading: false });
                return _context.finish(17);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 14, 17, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TradeRequest, [{
    key: 'loadData',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, account, cardSeries, myCardIDs, cardCount, allCards, cardChoices;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                account = accounts[0];
                cardSeries = (0, _cardseries2.default)(this.props.address);
                _context2.next = 7;
                return cardSeries.methods.getCardsByOwner(account).call();

              case 7:
                myCardIDs = _context2.sent;
                cardCount = myCardIDs.length;
                _context2.next = 11;
                return cardSeries.methods.getAllCards().call();

              case 11:
                allCards = _context2.sent;
                cardChoices = allCards.filter(function (card) {
                  return !myCardIDs.includes(card);
                });

                this.setState({ cardCount: cardCount, cardChoices: cardChoices, account: account });

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'renderCard',
    value: function renderCard(cardID) {
      return _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/' + cardID + '.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'This is the card your trading')));
    }
  }, {
    key: 'renderCarousel',
    value: function renderCarousel() {
      var _this3 = this;

      if (this.state.cardCount > 0) {
        return _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showArrows: true, showIndicators: false, showThumbs: false,
          onChange: function onChange(event) {
            return _this3.setState({ selCard: event });
          },
          selectedItem: this.state.selCard, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, this.state.cardChoices.map(function (cardID, index) {
          return _react2.default.createElement('div', { key: cardID, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, _react2.default.createElement('img', { src: '/static/' + cardID + '.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }));
        }));
      }
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      return _react2.default.createElement(_semanticUiReact.Grid, { padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, float: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, this.renderCard(this.props.myCardID)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, float: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, this.renderCarousel(), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'This is the card your trading for'))))));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'Select Card to Trade For ', this.state.account), _react2.default.createElement(_routes.Link, { route: '/trader/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Back'))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, this.renderCards(), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Create Trade Request')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var _props$query, address, cardid;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, cardid = _props$query.cardid;
                return _context3.abrupt('return', { address: address, myCardID: cardid });

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TradeRequest;
}(_react.Component);

exports.default = TradeRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXHRyYWRlcmVxdWVzdHNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIkltYWdlIiwiRm9ybSIsIk1lc3NhZ2UiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiQ2FyZFNlcmllcyIsIkNhcm91c2VsIiwiVHJhZGVSZXF1ZXN0Iiwic3RhdGUiLCJzZWxDYXJkIiwiY2FyZENvdW50IiwiY2FyZENob2ljZXMiLCJhY2NvdW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwic2VsQ2FyZElEIiwibXlDYXJkSUQiLCJwcm9wcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYXJkU2VyaWVzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJjcmVhdGVUcmFkZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJnZXRDYXJkc0J5T3duZXIiLCJjYWxsIiwibXlDYXJkSURzIiwibGVuZ3RoIiwiZ2V0QWxsQ2FyZHMiLCJhbGxDYXJkcyIsImZpbHRlciIsImNhcmQiLCJpbmNsdWRlcyIsImxvYWREYXRhIiwiY2FyZElEIiwibWFwIiwiaW5kZXgiLCJyZW5kZXJDYXJkIiwicmVuZGVyQ2Fyb3VzZWwiLCJyZW5kZXJDYXJkcyIsInF1ZXJ5IiwiY2FyZGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQU8sQUFBTTs7QUFDMUMsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVM7Ozs7Ozs7SUFFSCxB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QTdCLEFBQW1DO29CQUFuQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FIUCxBQUVFLEFBQ0UsQUFBRyxBQUVMLDJCQUFBLEFBQUMsdUNBQUssVUFBVyxLQUFqQixBQUFzQixVQUFXLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUEvQyxBQUFxRDtvQkFBckQ7c0JBQUEsQUFDSTtBQURKO2NBQUEsQUFDSSxBQUFLLEFBQ1AsK0JBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FUTixBQUNFLEFBS0UsQUFHRSxBQUlQOzs7Ozs2R0EvRzRCLEE7Ozs7Ozs7K0JBQ0MsTSxBQUFNLE9BQTFCLEEsdUJBQUEsQSxTQUFTLEEsc0JBQUEsQTtrREFDVixFQUFFLFNBQUYsU0FBVyxVQUFYLEFBQXFCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaTCxBLEFBNEgzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZHJheW0vdWRlbXktZXRoL2NhcmR0cmFkZXIifQ==