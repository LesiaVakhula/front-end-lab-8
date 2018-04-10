let methods = require('./controllers/handlers');

function router(app) {
    app.get('/rockstars', methods.get);
    app.get('/rockstar/:id', methods.getId);
    app.post('/rockstar', methods.post);
    app.put('/rockstar/:id', methods.put);
    app.delete('/rockstar/:id', methods.delete);
}
module.exports = router;