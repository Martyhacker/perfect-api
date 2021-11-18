const express = require('express');
const router = express.Router();

const LanguageController = require('../controllers/language_controller');
//GET
router.get('/', LanguageController.langs_get_all);
router.get('/:id', LanguageController.lang_by_id);
//POST
router.post('/', LanguageController.post_lang);
//PUT
router.put('/:id', LanguageController.put_lang);
//DELETE
router.delete('/:id',LanguageController.delete_lang);

module.exports = router;