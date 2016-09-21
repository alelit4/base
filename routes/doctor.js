var express = require('express');
var router = express.Router();
var doctorController = require('../app/controllers/doctor');


/*
 * GET
 */
router.get('/', function(req, res) {
    doctorController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    doctorController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    doctorController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    doctorController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    doctorController.remove(req, res);
});

module.exports = router;
