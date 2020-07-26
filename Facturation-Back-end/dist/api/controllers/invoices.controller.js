"use strict";

var _invoice = _interopRequireDefault(require("../models/invoice.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const invoices = [
//     {_id: '123456',item: 'Big Magic Book',qte: 1,date: new Date()},
//     {_id: '987654', item: 'Cheese Burger', qte: 5, date: new Date()}
// ];
module.exports = {
  findAll: function findAll(req, res, next) {
    // res.json(invoices);
    _invoice["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function () {
      return console.log('Error: cannot find any data !!!');
    });
  },
  create: function create(req, res) {
    var _req$body = req.body,
        item = _req$body.item,
        qty = _req$body.qty,
        date = _req$body.date,
        due = _req$body.due,
        rate = _req$body.rate,
        tax = _req$body.tax;
    console.log(req.body); // item?? res.status(400).json({err: 'item is required field !!'});
    // qty?? res.status(400).json({err: 'quantity is required field !!'});
    // date?? res.status(400).json({err: 'date is required field !!'});
    // due?? res.status(400).json({err: 'due is required field !!'});
    // invoices.push(req.body);
    // res.json(invoices);

    (0, _invoice["default"])(req.body).save().then(function (data) {
      return res.json(data);
    })["catch"](function () {
      return console.log('Error: cannot Add any data !!!');
    });
  }
};
//# sourceMappingURL=invoices.controller.js.map