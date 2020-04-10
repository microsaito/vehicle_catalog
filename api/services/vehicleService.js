import VehicleRepository from '../repositories/vehicleRepository';
const vehicleRepository = new VehicleRepository();

async function create(req) {
  const { body } = req;
  return vehicleRepository.create(body);
}

async function getAll(req) {
  const pParams = req.query;
  return vehicleRepository.getAll(pParams);
}

async function updateById(pId, pData) {
  return vehicleRepository.updateById(pId, pData);
}

async function deleteById(pId) {
  return vehicleRepository.deleteById(pId);
}

async function getById(pId) {
  return vehicleRepository.getById(pId);
}

const functions = {
  create: (req) => { return create(req); },
  getById: (pId) => { return getById(pId); },
  updateById: (pId, pData) => { return updateById(pId, pData); },
  deleteById: (pId, pData) => { return deleteById(pId, pData); },
  getAll: (req) => { return getAll(req); },
};

export default functions;
