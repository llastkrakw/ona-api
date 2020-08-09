

require('dotenv').config()

let mongoose = require('mongoose');
const User = require('../models/User').UserModel;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });



exports.selectAll =  async (req, res) => {

    try {
           
        //res.send("NOT IMPLEMENTED : user list"); 
        
        db.then(() => {
            console.log("Connected to the database!");

            User.find({}).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Users"});
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


exports.selectUser = async (req, res) => {

    try {

        ///res.send("NOT IMPLEMENTED : select user " + req.params.id);

        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            User.findById(id).populate([{path : "links"}]).then((data) => {
                if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
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

exports.addUser = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : add user");
      
        db.then(() => {
            console.log("Connected to the database!");

            const user = new User(req.body);

            user.save().then((data) => {
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

exports.deleteUser = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : delete user");

        db.then(() => {
            console.log("Connected to the database!");

            const id = req.params.id;

            User.findByIdAndDelete(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found User with id " + id });
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


exports.updateUser = async (req, res) => {

    try {

        if(!req.body)
             res.status(404).send({ message: "Body Can not be empty !"});
        
        //res.send("NOT IMPLEMENTED : updateUser");
        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            User.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
                if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
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

