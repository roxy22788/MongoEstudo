require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var mySort = {name: 1};
    dbo.collection("client").find({}).sort(mySort).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})