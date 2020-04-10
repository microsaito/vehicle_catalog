import jwt from 'jsonwebtoken';
import authConfig from '../configuration/auth.json';

const expressJwt = require('express-jwt');

function authorize(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    // authenticate JWT token and attach user to request object (req.user)
    expressJwt({ secret: authConfig.secret }),

    // authorize based on user role
    (req, res, next) => {
      let token = req.headers.authorization;
      try {
        token = token.replace('Bearer ', '');
        const decoded = jwt.verify(token, authConfig.secret);
        global.login = decoded.login;

        if (roles.length && !roles.includes(req.user.role)) {
          // user's role is not authorized
          return res.status(401).json({ message: `Role '${req.user.role}' not in [${roles}]` });
        }
        next();
      } catch (error) {
        res.status(401).send({ message: 'Token informado é inválido' });
      }
    },
  ];
}

module.exports = authorize;
