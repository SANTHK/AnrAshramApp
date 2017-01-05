

module.exports = function(app){

    var insertData = require("../controller/insertData.controller");
    var updateData = require("../controller/updateData.controller");
    var deleteData = require("../controller/deleteData.controller");
    var getData = require("../controller/getData.controller");
    app.post("/insertsangatdata",insertData.render);
    app.put("/updatesangatdata",updateData.render);
    app.delete("/deletesangatdata",deleteData.render);
    app.get("/getsangatdata",getData.render);

};