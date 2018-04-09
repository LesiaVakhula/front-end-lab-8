var artists = require("../data/storage.json"),
    bodyParser = require('body-parser');


exports.get = function (req, res) {
   res.send(artists).status(200);
};

exports.getId = function(req, res){
    let star = artists.find(function(artist) {
        return artist.id === Number(req.params.id)
        });
        if (!star){
            return res.send("The singer was not found").status(404);
        };
        res.send(star).status(200);
};

exports.post = function(req,res) {
    let star = artists.find(function(artist){
        return artist.name === req.body.name});
    if(star){
        return res.send({"massage":"This artist already exist"}).status(409);
    };

    star = {
        "id": artists.length + 1,
        "name": req.body.name,
        "band": req.body.band,
        "instrument": req.body.instrument
    };
    artists.push(star);
    res.send(star).status(201);
};

exports.put = function  (req,res) {
    let star = artists.find(function(artist){
        return artist.id === Number(req.params.id);
        });
    if(!star){
        res.send("The singer was not found").status(404);
    }
        star.name =req.body.name;
        star.band =req.body.band;
        star.instrument =req.body.instrument;

    res.send(star).status(200);
};

exports.delete = function  (req,res){
    let star = artists.find(function(artist) {
        return artist.id === Number(req.params.id);
        });
        if(star){
            artists = artists.filter(function (artist) {
                return artist.id !== Number(req.params.id);
            });

           res.send({ "message": "Musician has been successfully removed"}).status(200);
        }else{
           res.send("The singer was not found").status(404);
        }

};
