const express = require('express');
const router = express.Router();

const TechnologyController = require('../controllers/technology_controller');
//GET
router.get('/', TechnologyController.tech_get_all);
router.get('/:id', TechnologyController.tech_by_id);
//POST
router.post('/', TechnologyController.post_tech);
//PUT
router.put('/:id', TechnologyController.put_tech);
//DELETE
router.delete('/:id',TechnologyController.delete_tech);

module.exports = router;