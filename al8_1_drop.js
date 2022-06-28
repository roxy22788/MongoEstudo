require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    dbo.collection("vagabundos").drop((err, res) => {
        if (err) throw err;
        if (res) console.log("Collection deleted");
        db.close();
    })
})