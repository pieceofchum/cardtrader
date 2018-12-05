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


// Component that lists all the Card Series
// Contracts for which the current wallet
// account owns Trading Cards

var MyCardSeriesIndex = function (_Component) {
  (0, _inherits3.default)(MyCardSeriesIndex, _Component);

  function MyCardSeriesIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyCardSeriesIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyCardSeriesIndex.__proto__ || (0, _getPrototypeOf2.default)(MyCardSeriesIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mySeries: [],
      mySeriesCount: 0,
      account: 0,
      loading: false,
      errorMessage: '',
      isSet: false
    }, _this.onSeriesDetails = function (event, address) {
      event.preventDefault();
      _routes.Router.pushRoute('/trader/' + address);
      _this.setState({ loading: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyCardSeriesIndex, [{
    key: 'loadData',

    // Retrieve all the Card Series Contracts
    // for which the current account owns cards
    // from the contract and stored on the blockchain
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var cardSeriesAddresses, accounts, account, mySeries, i, cardSeries, cards, summary, cardSeriesSummary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ loading: true, errorMessage: '' });

                _context.prev = 1;
                _context.next = 4;
                return _factory2.default.methods.getDeployedCardSeries().call();

              case 4:
                cardSeriesAddresses = _context.sent;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                account = accounts[0];
                mySeries = new _map2.default();
                i = 0;

              case 11:
                if (!(i < cardSeriesAddresses.length)) {
                  _context.next = 24;
                  break;
                }

                cardSeries = (0, _cardseries2.default)(cardSeriesAddresses[i]);
                _context.next = 15;
                return cardSeries.methods.getCardsByOwner(account).call();

              case 15:
                cards = _context.sent;
                _context.next = 18;
                return cardSeries.methods.getSummary().call();

              case 18:
                summary = _context.sent;
                cardSeriesSummary = {
                  seriesID: summary[0],
                  seriesName: summary[1],
                  seriesDescription: summary[2],
                  numCards: summary[3],
                  numTraderRequests: summary[4],
                  manager: summary[5],
                  cards: cards
                };

                if (cards.length > 0) {
                  mySeries.set(cardSeriesSummary, cardSeriesAddresses[i]);
                }

              case 21:
                i++;
                _context.next = 11;
                break;

              case 24:

                this.setState({
                  mySeries: mySeries,
                  mySeriesCount: cardSeriesAddresses.length,
                  account: account, isSet: true
                });
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context['catch'](1);

                this.setState({ errorMessage: _context.t0.message });

              case 30:
                _context.prev = 30;

                this.setState({ loading: false });
                return _context.finish(30);

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 27, 30, 33]]);
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
    key: 'renderCardSeries',
    value: function renderCardSeries() {
      var _this2 = this;

      var items = [];
      this.state.mySeries.forEach(function (address, value) {
        items.push({
          header: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }, value.seriesName)), _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }, value.seriesDescription))),
          description: _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
              return _this2.onSeriesDetails(e, address);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          }, 'View Card Series'),
          meta: "The number of cards you own in this series is " + value.cards.length,
          fluid: true
        });
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mySeries = _state.mySeries,
          account = _state.account;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'My Card Series - ', account == 0 ? 'Please make sure to login to your MetaMask plug-in' : account, '\xA0\xA0', _react2.default.createElement(_semanticUiReact.Loader, { size: 'mini', inline: true,
        active: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), this.state.mySeriesCount > 0 ? this.renderCardSeries() : this.state.isSet ? "No Card Series Found" : "Loading data please wait"), !!this.state.errorMessage ? _react2.default.createElement(_semanticUiReact.Message, { error: true,
        header: 'Error',
        content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }) : '');
    }
  }]);

  return MyCardSeriesIndex;
}(_react.Component);

exports.default = MyCardSeriesIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFx0cmFkZXJcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkNvbnRhaW5lciIsIkxvYWRlciIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJDYXJkU2VyaWVzIiwiTXlDYXJkU2VyaWVzSW5kZXgiLCJzdGF0ZSIsIm15U2VyaWVzIiwibXlTZXJpZXNDb3VudCIsImFjY291bnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiaXNTZXQiLCJvblNlcmllc0RldGFpbHMiLCJldmVudCIsImFkZHJlc3MiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hSb3V0ZSIsInNldFN0YXRlIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FyZFNlcmllcyIsImNhbGwiLCJjYXJkU2VyaWVzQWRkcmVzc2VzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImkiLCJsZW5ndGgiLCJjYXJkU2VyaWVzIiwiZ2V0Q2FyZHNCeU93bmVyIiwiY2FyZHMiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsImNhcmRTZXJpZXNTdW1tYXJ5Iiwic2VyaWVzSUQiLCJzZXJpZXNOYW1lIiwic2VyaWVzRGVzY3JpcHRpb24iLCJudW1DYXJkcyIsIm51bVRyYWRlclJlcXVlc3RzIiwibWFuYWdlciIsInNldCIsIm1lc3NhZ2UiLCJsb2FkRGF0YSIsIml0ZW1zIiwiZm9yRWFjaCIsInZhbHVlIiwicHVzaCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZSIsIm1ldGEiLCJmbHVpZCIsInJlbmRlckNhcmRTZXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQVcsQUFBUTs7QUFDbEMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFB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O0FBQUE7V0FBQSxFQVpLLEFBWUwsQUFJSjtnQkFBTSxtREFBbUQsTUFBQSxBQUFNLE1BaEJ0RCxBQWdCNEQsQUFDckU7aUJBakJGLEFBQVcsQUFpQkYsQUFFVjtBQW5CWSxBQUNUO0FBRkosQUFzQkE7OzJDQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0E7bUJBQ3VCLEtBRHZCLEFBQzRCO1VBRDVCLEFBQ0Msa0JBREQsQUFDQztVQURELEFBQ1ksaUJBRFosQUFDWSxBQUVuQjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBc0IsZ0NBQUEsQUFBVyxJQUFYLEFBQWUsdURBQXJDLEFBQTBGLFNBQ3hGLDRCQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFFBQU8sUUFBcEIsQUFDUTtnQkFBUSxLQUFBLEFBQUssTUFEckIsQUFDMkI7b0JBRDNCO3NCQUZKLEFBQ0UsQUFDRSxBQUlBO0FBSkE7Z0JBSUEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsSUFDM0IsS0FEQSxBQUNBLEFBQUsscUJBQ0wsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLHlCQVR6QixBQUNFLEFBU00sQUFJSiw4QkFBQyxDQUFDLEtBQUEsQUFBSyxNQUFQLEFBQWEsK0JBQ1gsQUFBQywwQ0FBUSxPQUFULEFBQ1M7Z0JBRFQsQUFDZ0IsQUFDUDtpQkFBUyxLQUFBLEFBQUssTUFGdkIsQUFFNkI7b0JBRjdCO3NCQURGLEFBQ0U7QUFBQTtPQUFBLElBaEJSLEFBQ0UsQUFrQk8sQUFJVjs7Ozs7QUF0SDZCLEEsQUF5SGhDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RyYXltL3VkZW15LWV0aC9jYXJkdHJhZGVyIn0=