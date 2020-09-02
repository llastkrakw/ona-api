
require('dotenv').config()

let mongoose = require('mongoose');
const ShortenLink = require('../models/ShortenLink').ShortenLink;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });


/* Home page. */
exports.index = function(req, res) {
    res.send("HomePage");
};

exports.sender = async (req, res) => {

    try {

        const hash = req.params.hash.trim();

        db.then(() => {
            console.log("Connected to the database!");

            ShortenLink.findOne({"hash" : hash}).populate({path : "url"}).then((data) => {
                console.log(data)
                if (!data)
                   res.status(404).send({ message: "Not found Links"});
                else res.redirect(data.url.url);
            });

            
          })
          .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
          });
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }


}