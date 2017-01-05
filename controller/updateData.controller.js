
var updateData= function(req,res){

    var config = require('../../config.js');
    var AnrSangatList = require('../DBConnection/createConnection');
    AnrSangatList.update({id : {$eq: req.query.id}},
        {$set: {
            firstname: req.body.firstname,
            lastName: req.body.lastName,
            phonenum: req.body.phonenum,
            mailId: req.body.mailId,
            location: req.body.location,
            mukhya: req.body.mukhya
        }}, function(err, result){
            console.log(req.query.id);
      if(err)
          res.send(err);
       else
          res.send(result);

    });


};

exports.render = updateData;
