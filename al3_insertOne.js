require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var myObj = {
        name: "Julios",
        address: "Brooklin"
    }
    dbo.collection("client").insertOne(myObj, (err, res) => {
        if (err) throw err;
        console.log("Inserido com sucesso!");
        db.close();
    })
});