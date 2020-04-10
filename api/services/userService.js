import UserRepository from '../repositories/userRepository';
import bcrypt from 'bcryptjs';
const userRepository = new UserRepository();

async function authenticate(req) {
  const { body } = req;

  
  return { ok: true };
  //return vehicleRepository.incluir(body);
}

async function create(req) {
  const { body } = req;
  body.password = await bcrypt.hash(body.password.toString(), 10);
  return userRepository.create(body);
}

async function getAll(req) {
  const pParams = req.query;
  return userRepository.getAll(pParams);
}

/*
async function obter(pId) {
  const repositorio = new PoligonoTipoRepositorio();
  return repositorio.obter(pId);
}





async function alterar(pId, body) {

  const vFiltro = { _id: pId };
  const repositorio = new PoligonoTipoRepositorio();

  const vPoligono = await repositorio.alterar(vFiltro, body);

  return vPoligono;
}

async function excluir(pId) {
  const repositorio = new PoligonoTipoRepositorio();
  return repositorio.excluir(pId);
}
*/
const functions = {
  create: (req) => { return create(req); },
  getAll: (req) => { return getAll(req); },
  authenticate: (req) => { return authenticate(req); }, 
  alterar: (pId, body) => { return alterar(pId, body); },
  excluir: pId => { return excluir(pId); },
};


export default functions;
