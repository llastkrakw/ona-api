
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://djouendjeu_emma:TIMBILSTE12@cluster0.js0ku.mongodb.net/onadb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

client.connect((err,db) => {

  if(err) throw err;
  const db_fetch = db.db('onadb');
  // perform actions on the collection object
  
  const collection = db_fetch.collection('test');

  const user = collection.findOne({}, (err, result) => {

    if(err) throw err

    console.log(result._id);

  });

  console.log('connected');

  db.close();
});

