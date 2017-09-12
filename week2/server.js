var express = require('express');
var app = express();
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");
var indexRouter = require("./routes/index");

var mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds039860.mlab.com:39860/tinyurlpaysonjan21');

app.get('/', indexRouter);

app.use("/api/v1", restRouter);

app.use(express.static('public'));

app.use("/:shortUrl", redirectRouter);

app.listen(3000, function () {
    console.log('TinyUrl app listening on port 3000!')
});