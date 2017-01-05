
var deleteData = function(req,res){

    var config = require('../../config.js');
   // console.log(req.query.id);
    var AnrSangatList = require('../DBConnection/createConnection');
    res.send("WELCOME ON DELETE DATA PAGE");
};

exports.render = deleteData;
