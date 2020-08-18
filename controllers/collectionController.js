require('dotenv').config()

let mongoose = require('mongoose');
const Collection = require('../models/Collection').Collection;
const User = require('../models/User').UserModel;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });
const url = require('url');
const BASE_URL = "https://ona-api.herokuapp.com/render/col/"

var giveUrl = (id) => {

   var mUrl = url.resolve(BASE_URL, id).toString();

   return mUrl;

}

exports.selectAll =  (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : collection list");

        db.then(() => {
            console.log("Connected to the database!");

            Collection.find({}).populate([{path : "links"}]).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Collections"});
                else res.send(data);
            });
            
            
          })
          .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
          });
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.selectCollection = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : select collection " + req.params.id);

        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            Collection.findById(id).populate([{path : "links"}]).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Collection with id " + id });
                else res.send(data);
            });
            
            
          })
          .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
          });

        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addCollection = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : add collection");

        db.then(() => {
            console.log("Connected to the database!");

            const collection = new Collection(req.body);
            collection.url = giveUrl(collection._id.toString());

            collection.save().then((data) => {      
                
                const userId = data.author;
                const colId = data._id;

                User.findById(userId).then((data) => {

                    data.collections.push(colId);
                    User.findOneAndUpdate({"_id" : data._id}, data, (err, doc) => {

                        if (err){ 
                            console.log(err) 
                        } 
                        else{ 
                            console.log("Original Doc : ", doc); 
                        } 

                    });

                });
                
                res.send(data);
            });
            
          })
          .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
          });
        
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.deleteCollection = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : delete collection");

        db.then(() => {
            console.log("Connected to the database!");

            const id = req.params.id;

            Collection.findByIdAndDelete(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Collection with id " + id });
                else
                  res.send(data);
            });
            
          })
          .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
          });
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.updateCollection = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : updatecollection");

        if(!req.body)
           res.status(404).send({ message: "Body Can not be empty !"});
   
                //res.send("NOT IMPLEMENTED : updateUser");
                const id = req.params.id;

                db.then(() => {
                    
                    console.log("Connected to the database!");
        
                    Collection.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
                        if (!data)
                            res.status(404).send({ message: "Not found Collection with id " + id });
                        else
                            res.send(data);
                    });
            
                    
                  })
                  .catch(err => {
                    console.log("Cannot connect to the database!", err);
                    process.exit();
                  });
        

    } catch (error) {
        res.status(500).send(error);
    }

}

exports.addLinkToCollection = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : updatecollection");

        if(!req.body)
           res.status(404).send({ message: "Body Can not be empty !"});
   
                //res.send("NOT IMPLEMENTED : updateUser");
                const id = req.params.id;
                const linkId = req.params.id;

                db.then(() => {
                    
                    console.log("Connected to the database!");
        
                    Collection.findById(id).then((data) => {

                        if (!data){
                            res.status(404).send({ message: "Not found Collection with id " + id });
                        }

                        else{

                            data.links.push(linkId);
                            data.update().then((data) => {

                                res.send(data);
                                
                            })
                            
                        }
                    });
            
                    
                  })
                  .catch(err => {
                    console.log("Cannot connect to the database!", err);
                    process.exit();
                  });
        

    } catch (error) {
        res.status(500).send(error);
    }

}
