import express from 'express';
import asyncMiddleware from '../functions/asyncMiddleware';

import authenticationService from '../services/authenticationService';

const router = express.Router();

router.post('/authenticate', asyncMiddleware(async (req, res) => {
  const vRetorno = await authenticationService.authenticate(req);
  res.status(200).json(vRetorno);
}));


module.exports = router;
