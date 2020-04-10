import express from 'express';
import asyncMiddleware from '../functions/asyncMiddleware';
import brandService from '../services/brandService';

const router = express.Router();
const authorize = require('../helpers/authorize');

router.post('/', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await brandService.create(req);
  res.status(200).json(vReturn);
}));

router.get('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await brandService.getById(req.query.id);
  res.status(200).json(vReturn);
}));

router.put('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await brandService.updateById(req.params.id, req.body);
  res.status(200).json(vReturn);
}));

router.delete('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await brandService.deleteById(req.params.id);
  res.status(200).json(vReturn);
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const vReturn = await brandService.getAll(req);
  res.status(200).json(vReturn);
}));

module.exports = router;
