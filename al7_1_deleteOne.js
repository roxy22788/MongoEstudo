require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var myQuery = { address: "Brooklin" }
    dbo.collection("client").deleteOne(myQuery, (err, res) => {
        if (err) throw err;
        console.log("1 excluido com sucesso!");
        console.log(res);
        db.close();
    })
})