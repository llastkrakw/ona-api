require('dotenv').config()

let mongoose = require('mongoose');
const User = require('../models/User').UserModel;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });
const bcrypt = require('bcrypt');

exports.login =  async (req, res) => {

    try {
           
        
        db.then(() => {

            console.log("Connected to the database!");

            var name = req.body.username;
            var password = req.body.password;

            User.findOne({"username" : name})
            .populate("links")
            .populate({
                path: 'collections',
                populate: { path: 'links' }
              })
            .then((data) => {
                if (!data)
                   res.status(401).send({ message: "Not found Users"});
                else{
                 
                      bcrypt.compare(password, data.password).then(function(result){


                        if(result)
                          res.send(data);
                        else
                          res.status(401).send({ message: "Not found Users"});


                      });
              

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