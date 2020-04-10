import BrandRepository from '../repositories/brandRepository';

const brandRepository = new BrandRepository();

async function create(req) {
  const { body } = req;
  return brandRepository.create(body);
}

async function getById(pId) {
  return brandRepository.getById(pId);
}

async function updateById(pId, pData) {
  return brandRepository.updateById(pId, pData);
}

async function deleteById(pId) {
  return brandRepository.deleteById(pId);
}

async function getAll(req) {
  const pParams = req.query;
  return brandRepository.getAll(pParams);
}

const functions = {
  create: (req) => { return create(req); },
  getById: (pId) => { return getById(pId); },
  updateById: (pId, pData) => { return updateById(pId, pData); },
  deleteById: (pId, pData) => { return deleteById(pId, pData); },
  getAll: (req) => { return getAll(req); },
};


export default functions;
