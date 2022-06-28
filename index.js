require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    dbo.collection("client").find({}).limit(2).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})