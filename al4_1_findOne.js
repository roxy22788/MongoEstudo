require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    dbo.collection("client").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    })
});