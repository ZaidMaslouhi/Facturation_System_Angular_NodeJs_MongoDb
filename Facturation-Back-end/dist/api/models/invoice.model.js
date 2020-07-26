"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
}, {
  timestamps: true
});
module.exports = _mongoose["default"].model('Invoice', InvoiceSchema);
//# sourceMappingURL=invoice.model.js.map