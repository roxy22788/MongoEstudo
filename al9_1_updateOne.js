require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var myQuery = { address: "Brooklin" };
    var newValues = { $set: { address: "New Brooklin" } }
    dbo.collection("client").updateOne(myQuery, newValues, (err, res) => {
        if (err) throw err;
        console.log(res);
        console.log("1 Documento atualizado");
        db.close();
    })
})