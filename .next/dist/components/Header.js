'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\components\\Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.onMenuSelect = function (event, route) {
      event.preventDefault();
      _routes.Router.pushRoute(route);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', { className: 'item', href: '#', onClick: function onClick(e) {
          return _this2.onMenuSelect(e, '/');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'CardTrader'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', { className: 'item', href: '#', onClick: function onClick(e) {
          return _this2.onMenuSelect(e, '/cardseries');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Manage Card Series'), _react2.default.createElement('a', { className: 'item', href: '#', onClick: function onClick(e) {
          return _this2.onMenuSelect(e, '/trader');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Card App')));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJMb2FkZXIiLCJMaW5rIiwiUm91dGVyIiwiSGVhZGVyIiwib25NZW51U2VsZWN0IiwiZXZlbnQiLCJyb3V0ZSIsInByZXZlbnREZWZhdWx0IiwicHVzaFJvdXRlIiwibWFyZ2luVG9wIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SUFFdkIsQTs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSixlQUFlLFVBQUEsQUFBQyxPQUFELEFBQVEsT0FBVSxBQUMvQjtZQUFBLEFBQU0sQUFDTjtxQkFBQSxBQUFPLFVBQVAsQUFBaUIsQUFDbEI7QTs7Ozs7NkJBRVE7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO29CQUExQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sTUFBcEIsQUFBeUIsS0FBSSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBTCxBQUFrQixHQUF6QixBQUFPLEFBQXFCO0FBQWxFO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxNQUFwQixBQUF5QixLQUFJLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFMLEFBQWtCLEdBQXpCLEFBQU8sQUFBcUI7QUFBbEU7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSx1Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sTUFBcEIsQUFBeUIsS0FBSSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBTCxBQUFrQixHQUF6QixBQUFPLEFBQXFCO0FBQWxFO29CQUFBO3NCQUFBO0FBQUE7U0FUTixBQUNFLEFBSUUsQUFJRSxBQU1QOzs7OztBQXRCa0IsQSxBQXlCckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RyYXltL3VkZW15LWV0aC9jYXJkdHJhZGVyIn0=