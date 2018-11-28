'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CardSeries = require('./build/CardSeries.json');

var _CardSeries2 = _interopRequireDefault(_CardSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_CardSeries2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYXJkc2VyaWVzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYXJkU2VyaWVzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0wsS0FBSyxBQUFMLE1BQVcscUJBQVcsQUFBdEIsQUFESyxZQUVMLEFBRkssQUFBUCxBQUlEO0FBTEQiLCJmaWxlIjoiY2FyZHNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kcmF5bS91ZGVteS1ldGgvY2FyZHRyYWRlciJ9