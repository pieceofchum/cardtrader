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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\draym\\udemy-eth\\cardtrader\\components\\CardRow.js';


var CardRow = function (_Component) {
  (0, _inherits3.default)(CardRow, _Component);

  function CardRow() {
    (0, _classCallCheck3.default)(this, CardRow);

    return (0, _possibleConstructorReturn3.default)(this, (CardRow.__proto__ || (0, _getPrototypeOf2.default)(CardRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          cardID = _props.cardID,
          cardOwner = _props.cardOwner;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, cardID), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, cardOwner));
    }
  }]);

  return CardRow;
}(_react.Component);

exports.default = CardRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcmRSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkNhcmRSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsImNhcmRJRCIsImNhcmRPd25lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOzs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7NkJBQ007VUFBQSxBQUNBLE1BREEsQUFDYSx1QkFEYixBQUNBO1VBREEsQUFDSyxPQURMLEFBQ2EsdUJBRGIsQUFDSzttQkFDcUIsS0FGMUIsQUFFK0I7VUFGL0IsQUFFQSxZQUZBLEFBRUE7VUFGQSxBQUVJLGdCQUZKLEFBRUk7VUFGSixBQUVZLG1CQUZaLEFBRVksQUFFcEI7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FERixBQUNFLEFBQ0EseUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FISixBQUNFLEFBRUUsQUFHTDs7Ozs7QUFYbUIsQSxBQWN0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDYXJkUm93LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2RyYXltL3VkZW15LWV0aC9jYXJkdHJhZGVyIn0=