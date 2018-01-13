var express = require('express');
var app = express();
var restRouter = require("./routes/rest"); // 去当前目录week11下的routes/rest
var redirectRouter = require("./routes/redirect")
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use("/api/v1", restRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000, function () {
    console.log('TinyURL listening on port 3000!');
});
