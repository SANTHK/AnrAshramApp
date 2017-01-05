

var getData = function(req,res){

    var config = require('../../config.js');
    var AnrSangatList = require('../DBConnection/createConnection');
    AnrSangatList.find(function(err, allSangatList) {
        if (err) return console.log(err);
           res.send(allSangatList);
      });
};

exports.render = getData;
