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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _cardseries = require('../../../ethereum/cardseries');

var _cardseries2 = _interopRequireDefault(_cardseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\cardseries\\index.js?entry';


// Component that lists all the card series
// that are maintained by the Card Series
// Factory contract

var CardSeriesIndex = function (_Component) {
  (0, _inherits3.default)(CardSeriesIndex, _Component);

  function CardSeriesIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CardSeriesIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardSeriesIndex.__proto__ || (0, _getPrototypeOf2.default)(CardSeriesIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allCardSeries: [],
      cardSeriesCount: 0,
      loading: false,
      isSet: false,
      errorMessage: ''
    }, _this.onViewDetails = function (event, address) {
      event.preventDefault();
      _routes.Router.pushRoute('/cardseries/' + address);
      _this.setState({ loading: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CardSeriesIndex, [{
    key: 'loadData',

    // Load all the cards series contained in
    // the Card Series Factory contract
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var cardSeriesAddresses, allCardSeries, i, cardSeries, summary, cardSeriesSummary;
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
                allCardSeries = new _map2.default();
                i = 0;

              case 7:
                if (!(i < cardSeriesAddresses.length)) {
                  _context.next = 17;
                  break;
                }

                cardSeries = (0, _cardseries2.default)(cardSeriesAddresses[i]);
                _context.next = 11;
                return cardSeries.methods.getSummary().call();

              case 11:
                summary = _context.sent;
                cardSeriesSummary = {
                  seriesID: summary[0],
                  seriesName: summary[1],
                  seriesDescription: summary[2],
                  numCards: summary[3],
                  numTraderRequests: summary[4],
                  manager: summary[5],
                  address: cardSeriesAddresses[i]
                };

                allCardSeries.set(cardSeriesSummary, cardSeriesAddresses[i]);

              case 14:
                i++;
                _context.next = 7;
                break;

              case 17:

                this.setState({
                  allCardSeries: allCardSeries,
                  cardSeriesCount: cardSeriesAddresses.length,
                  isSet: true
                });
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](1);

                this.setState({ errorMessage: _context.t0.message });

              case 23:
                _context.prev = 23;

                this.setState({ loading: false });
                return _context.finish(23);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 20, 23, 26]]);
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
      this.state.allCardSeries.forEach(function (address, value) {
        items.push({
          header: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }, address)), _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }, value.seriesName)), _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, _react2.default.createElement('h4', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }, value.seriesDescription))),
          description: _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
              return _this2.onViewDetails(e, address);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }, 'View Card Series'),
          fluid: true
        });
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'Manage Card Series\xA0\xA0', _react2.default.createElement(_semanticUiReact.Loader, { size: 'mini', inline: true,
        active: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), _react2.default.createElement(_routes.Link, { route: '/cardseries/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Card Series',
        icon: 'add circle',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), this.state.cardSeriesCount > 0 ? this.renderCardSeries() : this.state.isSet ? "No Card Series Found" : "Loading data please wait"), !!this.state.errorMessage ? _react2.default.createElement(_semanticUiReact.Message, { error: true,
        header: 'Error',
        content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }) : '');
    }
  }]);

  return CardSeriesIndex;
}(_react.Component);

exports.default = CardSeriesIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFxjYXJkc2VyaWVzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDb250YWluZXIiLCJMb2FkZXIiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJDYXJkU2VyaWVzIiwiQ2FyZFNlcmllc0luZGV4Iiwic3RhdGUiLCJhbGxDYXJkU2VyaWVzIiwiY2FyZFNlcmllc0NvdW50IiwibG9hZGluZyIsImlzU2V0IiwiZXJyb3JNZXNzYWdlIiwib25WaWV3RGV0YWlscyIsImV2ZW50IiwiYWRkcmVzcyIsInByZXZlbnREZWZhdWx0IiwicHVzaFJvdXRlIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYXJkU2VyaWVzIiwiY2FsbCIsImNhcmRTZXJpZXNBZGRyZXNzZXMiLCJpIiwibGVuZ3RoIiwiY2FyZFNlcmllcyIsImdldFN1bW1hcnkiLCJzdW1tYXJ5IiwiY2FyZFNlcmllc1N1bW1hcnkiLCJzZXJpZXNJRCIsInNlcmllc05hbWUiLCJzZXJpZXNEZXNjcmlwdGlvbiIsIm51bUNhcmRzIiwibnVtVHJhZGVyUmVxdWVzdHMiLCJtYW5hZ2VyIiwic2V0IiwibWVzc2FnZSIsImxvYWREYXRhIiwiaXRlbXMiLCJmb3JFYWNoIiwidmFsdWUiLCJwdXNoIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJlIiwiZmx1aWQiLCJyZW5kZXJDYXJkU2VyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFRLEFBQVcsQUFBUTs7QUFDMUMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCO0FBQ0E7QUFDQTs7SSxBQUNNOzs7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QUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNFLDhDQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFFBQU8sUUFBcEIsQUFDUTtnQkFBUSxLQUFBLEFBQUssTUFEckIsQUFDMkI7b0JBRDNCO3NCQUZKLEFBQ0UsQUFDRSxBQUdGO0FBSEU7MkJBR0YsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjtvQkFBQTtzQkFQTixBQUtFLEFBQ0UsQUFDRSxBQVFGO0FBUkU7QUFDRSxpQkFPSixBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixJQUM3QixLQURBLEFBQ0EsQUFBSyxxQkFDTCxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIseUJBbEJ6QixBQUNFLEFBa0JJLEFBSUYsOEJBQUMsQ0FBQyxLQUFBLEFBQUssTUFBUCxBQUFhLCtCQUNiLEFBQUMsMENBQVEsT0FBVCxBQUNTO2dCQURULEFBQ2dCLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BRnZCLEFBRTZCO29CQUY3QjtzQkFEQSxBQUNBO0FBQUE7T0FBQSxJQXpCTixBQUNFLEFBMkJLLEFBSVI7Ozs7O0FBdkgyQixBLEFBMEg5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kcmF5bS91ZGVteS1ldGgvY2FyZHRyYWRlciJ9