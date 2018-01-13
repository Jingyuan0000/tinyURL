var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService"); //。。去上一个目录week11下的services/urlService

router.post("/urls", jsonParser, function(req, res) {
    var longUrl = req.body.longUrl;
    if(longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }
    var shortUrl = urlService.getShortUrl(longUrl);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
    });
});

module.exports = router;