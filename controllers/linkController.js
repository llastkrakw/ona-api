
require('dotenv').config()

let mongoose = require('mongoose');
const Link = require('../models/Link').Link;
const ShortenLink = require('../models/ShortenLink').ShortenLink;
const db = mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });

const btoa = require('btoa');
const url = require('url');

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

        //res.send("NOT IMPLEMENTED : link list");

        db.then(() => {
            console.log("Connected to the database!");

            Link.find({}).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Links"});
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


exports.selectLink = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : select link " + req.params.id);

        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            Link.findById(id).then((data) => {
                if (!data)
                  res.status(404).send({ message: "Not found Link with id " + id });
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

exports.addLink = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : add link");

        db.then(() => {
            console.log("Connected to the database!");

            const link = new Link(req.body);

            link.save().then((data) => {
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

exports.deleteLink = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : delete link");

        db.then(() => {
            console.log("Connected to the database!");

            const id = req.params.id;

            Link.findByIdAndDelete(id).then((data) => {
                if (!data)
                   res.status(404).send({ message: "Not found Link with id " + id });
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


exports.updateLink = async (req, res) => {

    try {

        //res.send("NOT IMPLEMENTED : updatelink");
                if(!req.body)
                   res.status(404).send({ message: "Body Can not be empty !"});
        
        const id = req.params.id;

        db.then(() => {
            console.log("Connected to the database!");

            Link.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
                if (!data)
                    res.status(404).send({ message: "Not found Link with id " + id });
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


exports.linkShorten = async (req, res) => {

    try {


        const id = req.params.id;
        var isOn = false;

        db.then(() => {
            console.log("Connected to the database!");


            Link.findById(id).then((data) => {

                if (!data)
                   res.status(404).send({ message: "Not found Links"});

                else{
                        var linkdata = data;
                    ShortenLink.findOne({"url" : data.url}).then((data) => {
                        if (data){
                            res.status(406).send({ message: "Ce lien a deja ete raccourcis"});
                            process.exit(0);
                        }
                        else{

                            const mhash = hasher(linkdata.url);
                            const shortUrl = urlCtr(mhash);
        
                            console.log(shortUrl);
                
                            const shortlink = new ShortenLink({url : linkdata.url, hash : mhash, shortenUrl: shortUrl});
                
                            shortlink.save().then((data) => {
                                res.send(data);
                            });

                        }
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

