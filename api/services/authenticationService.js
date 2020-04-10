import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import UserRepository from '../repositories/userRepository';
import ErrorBase from './base/errorBase';

import authConfig from '../configuration/auth.json';

const userRepository = new UserRepository();

function generationToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: authConfig.tempoLogado,
  });
}

async function authenticate(req) {
  const { body } = req;
  if (!body.login) throw new ErrorBase(400, 'AuthenticationLoginRequired');
  if (!body.password) throw new ErrorBase(400, 'AuthenticationPasswordRequired');

  const vUser = await userRepository.getByLogin(body.login);

  if (!vUser) throw new ErrorBase(400, 'AuthenticationPasswordInvalid');

  const vRetorno = await bcrypt.compare(body.password, vUser.password);

  if (!vRetorno) throw new ErrorBase(400, 'AuthenticationPasswordInvalid');

  return {
    info: {
      token: generationToken({
        sub: 1,
        login: vUser.login,
        role: vUser.role,
      }),
    },
  };
}

async function validarToken(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    try {
      const decoded = await jwt.verify(token, authConfig.secret);
      global.login = decoded.login;
      next();
    } catch (error) {
      res.status(401).send({ message: 'Token informado é inválido' });
    }
  } else {
    res.status(401).send({ message: 'Você precisa informar um token para acessar esse recurso.' });
  }
}


const functions = {
  authenticate: (req) => { return authenticate(req); },
  validarToken: (req, res, next) => { return validarToken(req, res, next); },
};


export default functions;
