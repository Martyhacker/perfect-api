const express = require('express');
const router = express.Router();

const WorkController = require('../controllers/work_controller');
//GET
router.get('/', WorkController.work_get_all);
router.get('/:id', WorkController.work_by_id);
//POST
router.post('/', WorkController.post_work);
//PUT
router.put('/:id', WorkController.put_work);
//DELETE
router.delete('/:id',WorkController.delete_work);

module.exports = router;