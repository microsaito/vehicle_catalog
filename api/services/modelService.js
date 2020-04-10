import ModelRepository from '../repositories/modelRepository';

const modelRepository = new ModelRepository();

async function create(req) {
  const { body } = req;
  return modelRepository.create(body);
}

async function getAll(req) {
  const pParams = req.query;
  return modelRepository.getAll(pParams);
}

async function getById(pId) {
  return modelRepository.getById(pId);
}

async function updateById(pId, pData) {
  return modelRepository.updateById(pId, pData);
}

async function deleteById(pId) {
  return modelRepository.deleteById(pId);
}

const functions = {
  create: (req) => { return create(req); },
  getById: (pId) => { return getById(pId); },
  updateById: (pId, pData) => { return updateById(pId, pData); },
  deleteById: (pId, pData) => { return deleteById(pId, pData); },
  getAll: (req) => { return getAll(req); },
};


export default functions;
