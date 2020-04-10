import express from 'express';
import asyncMiddleware from '../functions/asyncMiddleware';

import userService from '../services/userService';

const router = express.Router();

router.post('/', asyncMiddleware(async (req, res) => {
  const vReturn = await userService.create(req);
  res.status(200).json(vReturn);
}));

router.get('/', asyncMiddleware(async (req, res) => {
  const vReturn = await userService.getAll(req);
  res.status(200).json(vReturn);
}));

module.exports = router;
