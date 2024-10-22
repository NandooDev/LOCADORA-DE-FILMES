const express = require('express');
const router = express.Router();
const rentalHistoryController = require('../controllers/rentalHistoryController');

router.post('/', rentalHistoryController.createRentalHistory);
router.put('/:id', rentalHistoryController.updateRentalHistory);
router.delete('/:id', rentalHistoryController.deleteRentalHistory);
router.get('/', rentalHistoryController.findRentalHistory);
module.exports = router;