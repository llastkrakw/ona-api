require('dotenv').config()

let mongoose = require('mongoose');
const Group = require('../models/Group').Group;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });
const url = require('url');
const BASE_URL = "https://ona-api.herokuapp.com/render/grp/"

var giveUrl = (id) => {

   var mUrl = url.resolve(BASE_URL, id).toString();

   return mUrl;

}


exports.selectAll =  (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : group list");

        db.then(() => {
            console.log("Connected to the database!");

            Group.find({}).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Groups"});
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


exports.selectGroup = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : select group " + req.params.id);

        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            Group.findById(id).then((data) => {
                if (!data)
                res.status(404).send({ message: "Not found Group with id " + id });
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

exports.addGroup = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : add group");

        db.then(() => {
            console.log("Connected to the database!");

            const group = new Group(req.body);
            group.url = giveUrl(group._id.toString());

            group.save().then((data) => {

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

exports.deleteGroup = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : delete group");

        db.then(() => {
            console.log("Connected to the database!");

            const id = req.params.id;

            Group.findByIdAndDelete(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Group with id " + id });
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


exports.updateGroup = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : updategroup");

        if(!req.body)
           res.status(404).send({ message: "Body Can not be empty !"});
   
        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            Group.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
                if (!data)
                    res.status(404).send({ message: "Not found Group with id " + id });
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
