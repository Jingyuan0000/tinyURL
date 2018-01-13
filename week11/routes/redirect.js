var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService"); //。。去上一个目录week11下的services/urlService

router.get("*", function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);
    if(longUrl) {
        res.redirect(longUrl);
    } else{
        res.send("No such URL");
    }


    });

module.exports = router;


