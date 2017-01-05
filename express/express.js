

module.exports=function () {

    var express = require("express");
    var bodyParser=require("body-parser");
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    require("../router/curdOperationRoute.js")(app);
    return app;

}