"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./config/routes"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_mongoose["default"].connect('mongodb://127.0.0.1:27017/invoices', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;
db.on('error', function (err) {
  console.log(err);
});
db.once('open', function () {
  console.log('Database is connected succesfully !!');
}); // Custom Middleware

app.use(function (req, res, next) {
  console.log('Custo Middleware is running !!');
  next();
}); // bodyParser Middelware

app.use(_express["default"].json());
app.use(_express["default"].urlencoded()); // Run the Server

var PORT = 3000;
app.listen(PORT, function () {
  return console.log("Server is running at port : ".concat(PORT));
}); // API Routing Middleware

app.use('/api', _routes["default"]);
//# sourceMappingURL=app.js.map