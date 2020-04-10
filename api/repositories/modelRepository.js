import Base from './base/baseRepository';

export default class ModelRepository {
  constructor() {
    this.baseRepository = new Base('Model');
  }

  async create(body) {
    return this.baseRepository.create(body);
  }

  async getById(pParams) {
    return this.baseRepository.getById(pParams);
  }

  async updateById(pId, pData) {
    return this.baseRepository.updateById(pId, pData);
  }

  async deleteById(pId) {
    return this.baseRepository.deleteById(pId);
  }

  async getAll(pParams) {
    return this.baseRepository.getAll(pParams);
  }
}
