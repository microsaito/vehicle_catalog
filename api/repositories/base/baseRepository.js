import ErrorBase from '../../services/base/errorBase';
import models from '../../models/index';

export default class baseRepository {
  constructor(model) {
    this.model = models[model];
  }

  async create(pData) {
    const vData = await this.model.create(pData);
    return { info: vData };
  }

  async getById(pId) {
    return { info: await this.model.findOne({ where: { id: pId } }) };
  }

  async updateById(pId, pData) {
    const vUpdate = await this.model.update(pData, { where: { id: pId } });
    if (vUpdate[0] <= 0) throw new ErrorBase(400, 'GenericNoRecordUpdated');
    return this.model.findOne({ where: { id: pId } });
  }

  async deleteById(pId) {
    const vDeleted = await this.model.destroy({ where: { id: pId } });
    if (vDeleted <= 0) throw new ErrorBase(400, 'GenericNoRecordDeleted');
    return { ok: true };
  }

  async getAll(pParams) {
    return { info: await this.model.findAll(pParams) };
  }

  async getOne(pParams) {
    return this.model.findOne(pParams);
  }
}
