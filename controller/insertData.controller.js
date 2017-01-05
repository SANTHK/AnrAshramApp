


var insertData = function(req,res){

    var config = require('../../config.js');
    var AnrSangatList = require('../DBConnection/createConnection');
       var sangatObject = new AnrSangatList({
           id : req.body.indexNumber,
           Name: req.body.Name,
           phonenum: req.body.phonenum,
           mailId: req.body.mailId,
           location: req.body.location,
           mukhya: req.body.mukhya
       });

       //print on colsole if error or object data
       sangatObject.save(function(err, sangatObject) {
           if (err) return  res.send(err);
           res.send(sangatObject);
       });

};
exports.render = insertData;
