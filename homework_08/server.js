process.stdout.write('What are you waiting for? \n');

var express = require('express'),
    app = express(),
    fs = require("fs"),
    bodyParser = require('body-parser'),
    handlers = require('./controllers/handlers'),
    port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/rockstars', handlers.get);
app.get('/rockstar/:id', handlers.getId);
app.post('/rockstar', handlers.post);
app.put('/rockstar/:id', handlers.put);
app.delete('/rockstar/:id', handlers.delete);

app.listen(port);