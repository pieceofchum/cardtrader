webpackHotUpdate(7,{

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _map = __webpack_require__(374);

var _map2 = _interopRequireDefault(_map);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(476);

var _factory = __webpack_require__(987);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(669);

var _web2 = _interopRequireDefault(_web);

var _Layout = __webpack_require__(1164);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(726);

var _cardseries = __webpack_require__(1181);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cardtrader\\trader\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41YTE3NjBmZmQ5MDc0MDY4MjAxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FyZHRyYWRlci90cmFkZXI/MTk3ODgwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQ29udGFpbmVyLCBMb2FkZXIsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IENhcmRTZXJpZXMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhcmRzZXJpZXNcIjtcclxuXHJcbi8vIENvbXBvbmVudCB0aGF0IGxpc3RzIGFsbCB0aGUgQ2FyZCBTZXJpZXNcclxuLy8gQ29udHJhY3RzIGZvciB3aGljaCB0aGUgY3VycmVudCB3YWxsZXRcclxuLy8gYWNjb3VudCBvd25zIFRyYWRpbmcgQ2FyZHNcclxuY2xhc3MgTXlDYXJkU2VyaWVzSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbXlTZXJpZXM6IFtdLFxyXG4gICAgbXlTZXJpZXNDb3VudDogMCxcclxuICAgIGFjY291bnQ6IDAsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICBpc1NldDogZmFsc2VcclxuICB9O1xyXG5cclxuICAvLyBSZXRyaWV2ZSBhbGwgdGhlIENhcmQgU2VyaWVzIENvbnRyYWN0c1xyXG4gIC8vIGZvciB3aGljaCB0aGUgY3VycmVudCBhY2NvdW50IG93bnMgY2FyZHNcclxuICAvLyBmcm9tIHRoZSBjb250cmFjdCBhbmQgc3RvcmVkIG9uIHRoZSBibG9ja2NoYWluXHJcbiAgYXN5bmMgbG9hZERhdGEoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjYXJkU2VyaWVzQWRkcmVzc2VzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FyZFNlcmllcygpLmNhbGwoKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcblxyXG4gICAgICB2YXIgbXlTZXJpZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRTZXJpZXNBZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY2FyZFNlcmllcyA9IENhcmRTZXJpZXMoY2FyZFNlcmllc0FkZHJlc3Nlc1tpXSk7XHJcbiAgICAgICAgbGV0IGNhcmRzID0gYXdhaXQgY2FyZFNlcmllcy5tZXRob2RzLmdldENhcmRzQnlPd25lcihhY2NvdW50KS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhcmRTZXJpZXMubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuICAgICAgICBsZXQgY2FyZFNlcmllc1N1bW1hcnkgPSB7XHJcbiAgICAgICAgICBzZXJpZXNJRDogc3VtbWFyeVswXSxcclxuICAgICAgICAgIHNlcmllc05hbWU6IHN1bW1hcnlbMV0sXHJcbiAgICAgICAgICBzZXJpZXNEZXNjcmlwdGlvbjogc3VtbWFyeVsyXSxcclxuICAgICAgICAgIG51bUNhcmRzOiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgbnVtVHJhZGVyUmVxdWVzdHM6IHN1bW1hcnlbNF0sXHJcbiAgICAgICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzVdLFxyXG4gICAgICAgICAgY2FyZHM6IGNhcmRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIG15U2VyaWVzLnNldChjYXJkU2VyaWVzU3VtbWFyeSwgY2FyZFNlcmllc0FkZHJlc3Nlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBteVNlcmllczogbXlTZXJpZXMsXHJcbiAgICAgICAgbXlTZXJpZXNDb3VudDogY2FyZFNlcmllc0FkZHJlc3Nlcy5sZW5ndGgsXHJcbiAgICAgICAgYWNjb3VudDogYWNjb3VudCwgaXNTZXQ6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHRoaXMubG9hZERhdGEoKTtcclxuICB9XHJcblxyXG4gIG9uU2VyaWVzRGV0YWlscyA9IChldmVudCwgYWRkcmVzcykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFJvdXRlci5wdXNoUm91dGUoYC90cmFkZXIvJHthZGRyZXNzfWApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJkU2VyaWVzKCkge1xyXG4gICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICB0aGlzLnN0YXRlLm15U2VyaWVzLmZvckVhY2goKGFkZHJlc3MsIHZhbHVlKSA9PiB7XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIGhlYWRlcjogKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3ZhbHVlLnNlcmllc05hbWV9PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0Pnt2YWx1ZS5zZXJpZXNEZXNjcmlwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHRoaXMub25TZXJpZXNEZXRhaWxzKGUsIGFkZHJlc3MpfT5cclxuICAgICAgICAgICAgICBWaWV3IENhcmQgU2VyaWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICApLFxyXG4gICAgICAgIG1ldGE6IFwiVGhlIG51bWJlciBvZiBjYXJkcyB5b3Ugb3duIGluIHRoaXMgc2VyaWVzIGlzIFwiICsgdmFsdWUuY2FyZHMubGVuZ3RoLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbXlTZXJpZXMgLCBhY2NvdW50fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPk15IENhcmQgU2VyaWVzIC0ge2FjY291bnQgPT0gMCA/ICdQbGVhc2UgbWFrZSBzdXJlIHRvIGxvZ2luIHRvIHlvdXIgTWV0YU1hc2sgcGx1Zy1pbic6YWNjb3VudH0mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgPExvYWRlciBzaXplPSdtaW5pJyBpbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30vPlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5teVNlcmllc0NvdW50ID4gMCA/XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZFNlcmllcygpOlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzU2V0ID8gXCJObyBDYXJkIFNlcmllcyBGb3VuZFwiOlxyXG4gICAgICAgICAgICAgIFwiTG9hZGluZyBkYXRhIHBsZWFzZSB3YWl0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID9cclxuICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDYXJkU2VyaWVzSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FyZHRyYWRlci90cmFkZXI/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQTJEQTtBQUFBO0FBQ0E7Ozs7O0FBcERBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOzs7OztBQUlBOzs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFDQTtBQVFBO0FBQ0E7OztBQWhCQTs7Ozs7QUFvQkE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBRkE7Ozs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQWxCQTtBQW9CQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFJQTtBQUpBO0FBSUE7QUFVQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9