require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var res = dbo.collection("client").find({});
    res.toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close()
    })
});