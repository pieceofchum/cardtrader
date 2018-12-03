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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\pages\\cardtrader\\cardseries\\index.js?entry';


var CardSeriesIndex = function (_Component) {
  (0, _inherits3.default)(CardSeriesIndex, _Component);

  function CardSeriesIndex() {
    (0, _classCallCheck3.default)(this, CardSeriesIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CardSeriesIndex.__proto__ || (0, _getPrototypeOf2.default)(CardSeriesIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardSeriesIndex, [{
    key: 'renderCardSeries',
    value: function renderCardSeries() {
      var items = this.props.cardseries.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/cardseries/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, 'View Card Series')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Manage Card Series'), _react2.default.createElement(_routes.Link, { route: '/cardseries/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Card Series',
        icon: 'add circle',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }))), this.props.cardseries.length > 0 ? this.renderCardSeries() : "No Card Series Found"));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var cardseries;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCardSeries().call();

              case 2:
                cardseries = _context.sent;
                return _context.abrupt('return', { cardseries: cardseries });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CardSeriesIndex;
}(_react.Component);

exports.default = CardSeriesIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYXJkdHJhZGVyXFxjYXJkc2VyaWVzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhcmRTZXJpZXNJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYXJkc2VyaWVzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJsZW5ndGgiLCJyZW5kZXJDYXJkU2VyaWVzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FyZFNlcmllcyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozt1Q0FNZSxBQUNqQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixJQUFJLG1CQUFXLEFBQ2pEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx3QkFBTixBQUE0Qjt3QkFBNUI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEYsQUFBTyxBQU9FLEFBRVY7QUFUUSxBQUNMO0FBRkosQUFBYyxBQVlkLE9BWmM7OzJDQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGO29CQUFBO3NCQUpOLEFBRUUsQUFDRSxBQUNFLEFBT0g7QUFQRztBQUNFLGlCQU1MLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsU0FBdEIsQUFBK0IsSUFBSSxLQUFuQyxBQUFtQyxBQUFLLHFCQWIvQyxBQUNFLEFBQ0UsQUFXOEQsQUFJbkU7Ozs7Ozs7Ozs7Ozt1QkF0QzBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix3QixBQUFoQixBQUF3Qzs7bUJBQTNEO0E7aURBQ0MsRUFBRSxZQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIbUIsQSxBQTJDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZHJheW0vdWRlbXktZXRoL2NhcmR0cmFkZXIifQ==