require('dotenv').config()

let mongoose = require('mongoose');
const ShortenLink = require('../models/ShortenLink').ShortenLink;
const Link = require('../models/Link').Link;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });

const btoa = require('btoa');
const url = require('url');

const base_url_short = url.resolve(process.env.BASE_URL, "sh");

var hasher = (str) => {

    var hash = btoa(str);
    hash = hash.substr(0, 6);

    return hash;
}

var urlCtr = (hash) => {

    return newUrl = url.resolve(process.env.BASE_URL, hash);

}

exports.selectAll =  (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : short list");

        db.then(() => {
            console.log("Connected to the database!");

            ShortenLink.find({}).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Shorten"});
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


exports.selectShort = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : select short " + req.params.id);

        const id = req.params.id;

        db.then(() => {

            console.log("Connected to the database!");

            ShortenLink.findById(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Shorten with id " + id });
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

exports.addShort = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : add short");

        db.then(() => {

            console.log("Connected to the database!");

            const short = new ShortenLink(req.body);

            short.url = req.params.linkId;
            short.shortenUrl = url.resolve(base_url_short, short.hash);

            
            Link.findOneAndUpdate({"_id" : req.params.linkId}, { "shortenUrl" : short.shortenUrl}, { useFindAndModify: false}, (err, doc) => {
                if (err){ 
                    console.log(err) 
                } 
            });

            short.save().then((data) => {
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

exports.deleteShort = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : delete short");

        db.then(() => {

            console.log("Connected to the database!");

            const id = req.params.id;

            ShortenLink.findByIdAndDelete(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found ShortenLink with id " + id });
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


exports.updateShort = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : updateshort");

                if(!req.body)
                  res.status(404).send({ message: "Body Can not be empty !"});
    
        const id = req.params.id;

        db.then(() => {

            console.log("Connected to the database!");

            ShortenLink.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
                if (!data)
                    res.status(404).send({ message: "Not found Shorten with id " + id });
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
