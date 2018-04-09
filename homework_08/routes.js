var exspress = require('express'),
    app = exspress(),
    router = exspress.Router(),
    methods = require('./controllers/handlers');


router.get('/rockstars', methods.get);
router.get('/rockstar/:id', methods.getId);
router.post('/rockstar', methods.post);
router.put('/rockstar/:id', methods.put);
router.delete('/rockstar/:id', methods.delete);

module.exports = router;