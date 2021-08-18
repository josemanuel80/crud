import express from 'express';
import {
  getData,
  getDataById,
  createData,
  updateDataById,
  deleteData,
} from '../controllers/app.js';

export const router = express.Router();

router.get('/crud', getData);
router.get('/crud/:id', getDataById);
router.post('/crud', createData);
router.put('/crud/:id', updateDataById);
router.delete('/crud/:id', deleteData);
