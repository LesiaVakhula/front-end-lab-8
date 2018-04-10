process.stdout.write('What are you waiting for? \n');

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routs = require("./routes"),
    port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routs(app);

app.listen(port);