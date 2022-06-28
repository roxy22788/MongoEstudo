require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    dbo.createCollection("client", (err, res) => {
        if (err) throw err;
        console.log("collection created!");
        db.close()
    })
})