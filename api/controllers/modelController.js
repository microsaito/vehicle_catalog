import express from 'express';
import asyncMiddleware from '../functions/asyncMiddleware';

import modelService from '../services/modelService';

const authorize = require('../helpers/authorize');

const router = express.Router();

router.post('/', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await modelService.create(req);
  res.status(200).json(vReturn);
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const vReturn = await modelService.getAll(req);
  res.status(200).json(vReturn);
}));

router.get('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await modelService.getById(req.params.id);
  res.status(200).json(vReturn);
}));

router.put('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await modelService.updateById(req.params.id, req.body);
  res.status(200).json(vReturn);
}));

router.delete('/:id', authorize('Admin'), asyncMiddleware(async (req, res) => {
  const vReturn = await modelService.deleteById(req.params.id);
  res.status(200).json(vReturn);
}));

module.exports = router;
