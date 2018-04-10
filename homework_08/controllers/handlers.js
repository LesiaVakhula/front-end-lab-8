let artists = require("../data/storage.json");

exports.get = (req, res) => {
   res.send(artists).status(200);
};

exports.getId = (req, res) => {
    let star = artists.find((artist) => {
        return artist.id === Number(req.params.id);
        });

        if (!star){
            return res.send("The singer was not found").status(404);
        };
        res.send(star).status(200);
};

exports.post = (req,res) => {
    let body = req.body;
    if(!body.id || !body.name || !body.band || !body.instrument){
        return res.sendStatus(400);
    }
    let star = artists.find((artist) => {
        return artist.id === Number(req.body.id)});
    if(star){
        return res.status(409).send({"message":"Musician already exist."});
    };

    star = {
        "id": req.body.id,
        "name": req.body.name,
        "band": req.body.band,
        "instrument": req.body.instrument
    };
    artists.push(star);
    res.status(201).send(star);
};

exports.put = (req,res) => {
    let star = artists.find((artist) => {
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

exports.delete = (req,res) => {
    let star = artists.find((artist) => {
        return artist.id === Number(req.params.id);
        });
        if(star){
            artists = artists.filter((artist) => {
                return artist.id !== Number(req.params.id);
            });

           res.status(200).send({ "message": "Musician has been successfully removed."}).status(200);
        }else{
           res.status(404).send("The singer was not found");
        }

};
