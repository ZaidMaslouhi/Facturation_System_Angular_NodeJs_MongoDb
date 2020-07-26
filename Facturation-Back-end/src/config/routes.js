import express from 'express';
import invoicesController from '../api/controllers/invoices.controller';

const router = express.Router();

// Invoices
router.get('/invoices', invoicesController.findAll);
router.post('/invoices', invoicesController.create);
router.get('/invoices/:id', invoicesController.findOne);
router.put('/invoices/:id', invoicesController.update);
router.delete('/invoices/:id', invoicesController.delete);



module.exports = router;
