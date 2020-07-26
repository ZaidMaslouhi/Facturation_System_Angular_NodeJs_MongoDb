"use strict";

var _express = _interopRequireDefault(require("express"));

var _invoices = _interopRequireDefault(require("../api/controllers/invoices.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // Invoices


router.get('/invoices', _invoices["default"].findAll);
router.post('/invoices', _invoices["default"].create);
module.exports = router;
//# sourceMappingURL=routes.js.map