require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MongoEstudo");
    var myQuery = { address: /^o/ };
    dbo.collection("client").deleteMany(myQuery, (err, res) => {
        if (err) throw err;
        console.log(res);
        console.log(res.result.n + "documentos deletados!");
        db.close();
    })
})