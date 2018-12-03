webpackHotUpdate(8,{

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = __webpack_require__(518);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(476);

var _routes = __webpack_require__(726);

var _Layout = __webpack_require__(1164);

var _Layout2 = _interopRequireDefault(_Layout);

var _cardseries = __webpack_require__(1181);

var _cardseries2 = _interopRequireDefault(_cardseries);

var _reactResponsiveCarousel = __webpack_require__(1191);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\traderequests\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\trader\\traderequests\\new.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cardtrader\\trader\\traderequests\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC43MzVhZWM5MDgzYTlkMWEzNzRlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FyZHRyYWRlci90cmFkZXIvdHJhZGVyZXF1ZXN0cy9uZXcuanM/MTNlYjFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBHcmlkLCBJbWFnZSwgRm9ybSwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYXJkU2VyaWVzIGZyb20gJy4uLy4uLy4uLy4uL2V0aGVyZXVtL2NhcmRzZXJpZXMnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xyXG5cclxuY2xhc3MgVHJhZGVSZXF1ZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNlbENhcmQ6IDAsXHJcbiAgICBjYXJkQ291bnQ6IDAsXHJcbiAgICBjYXJkQ2hvaWNlczogW10sXHJcbiAgICBhY2NvdW50OiAwLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgeyBhZGRyZXNzLCBjYXJkaWQgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgcmV0dXJuIHsgYWRkcmVzcywgbXlDYXJkSUQ6IGNhcmRpZCB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZERhdGEoKSB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcbiAgICBjb25zdCBjYXJkU2VyaWVzID0gQ2FyZFNlcmllcyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgY29uc3QgbXlDYXJkSURzID0gYXdhaXQgY2FyZFNlcmllcy5tZXRob2RzLmdldENhcmRzQnlPd25lcihhY2NvdW50KS5jYWxsKCk7XHJcbiAgICBjb25zdCBjYXJkQ291bnQgPSBteUNhcmRJRHMubGVuZ3RoO1xyXG4gICAgY29uc3QgYWxsQ2FyZHMgPSBhd2FpdCBjYXJkU2VyaWVzLm1ldGhvZHMuZ2V0QWxsQ2FyZHMoKS5jYWxsKCk7XHJcbiAgICBjb25zdCBjYXJkQ2hvaWNlcyAgPSBhbGxDYXJkcy5maWx0ZXIoICggY2FyZCApID0+ICFteUNhcmRJRHMuaW5jbHVkZXMoIGNhcmQgKSApO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoIHsgY2FyZENvdW50OiBjYXJkQ291bnQsIGNhcmRDaG9pY2VzOiBjYXJkQ2hvaWNlcywgYWNjb3VudDogYWNjb3VudCB9ICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VsQ2FyZElEID0gdGhpcy5zdGF0ZS5jYXJkQ2hvaWNlc1t0aGlzLnN0YXRlLnNlbENhcmRdO1xyXG4gICAgICBjb25zdCBteUNhcmRJRCA9IHRoaXMucHJvcHMubXlDYXJkSUQ7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgY2FyZFNlcmllcyA9IENhcmRTZXJpZXModGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgIGF3YWl0IGNhcmRTZXJpZXMubWV0aG9kc1xyXG4gICAgICAgIC5jcmVhdGVUcmFkZVJlcXVlc3QobXlDYXJkSUQsIHNlbENhcmRJRClcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoYC90cmFkZXJlcXVlc3QvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlckNhcmQoY2FyZElEKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXsnL3N0YXRpYy8nICsgY2FyZElEICsgJy5qcGcnfS8+XHJcbiAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlRoaXMgaXMgdGhlIGNhcmQgeW91ciB0cmFkaW5nPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2Fyb3VzZWwoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXJkQ291bnQgPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IHNob3dJbmRpY2F0b3JzPXtmYWxzZX0gc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgc2VsQ2FyZDogZXZlbnQgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17IHRoaXMuc3RhdGUuc2VsQ2FyZCB9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhcmRDaG9pY2VzLm1hcCgoY2FyZElELCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZElEfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvc3RhdGljLycgKyBjYXJkSUQgKyAnLmpwZyd9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBwYWRkZWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fSBmbG9hdD5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZCh0aGlzLnByb3BzLm15Q2FyZElEKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9IGZsb2F0PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJvdXNlbCgpfVxyXG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5UaGlzIGlzIHRoZSBjYXJkIHlvdXIgdHJhZGluZyBmb3I8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+U2VsZWN0IENhcmQgdG8gVHJhZGUgRm9yIHt0aGlzLnN0YXRlLmFjY291bnR9PC9oMz5cclxuICAgICAgICA8TGluayByb3V0ZT17YC90cmFkZXIvJHt0aGlzLnByb3BzLmFkZHJlc3N9YH0+XHJcbiAgICAgICAgICA8YT48QnV0dG9uIHByaW1hcnk+QmFjazwvQnV0dG9uPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyB0aGlzLm9uU3VibWl0IH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckNhcmRzKCkgfVxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiRXJyb3JcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+Q3JlYXRlIFRyYWRlIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWRlUmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYXJkdHJhZGVyL3RyYWRlci90cmFkZXJlcXVlc3RzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQU5BO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFBQTtBQVdBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBakJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFtQkE7QUFDQTtBQURBO0FBQ0E7QUFwQkE7QUFxQkE7QUFDQTtBQURBO0FBckJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7Ozs7QUE0QkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBTUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBOztBQU9BO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBVUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7OztBQTlHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=