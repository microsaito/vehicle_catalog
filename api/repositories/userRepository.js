import Base from './base/baseRepository';

export default class userRepository {
  constructor() {
    this.baseRepository = new Base('User');
  }

  async create(body) {
    return this.baseRepository.create(body);
  }

  async getAll(pParams) {
    return this.baseRepository.getAll(pParams);
  }

  async getByLogin(pLogin) {
    return this.baseRepository.getOne({ where: { login: pLogin } });
  }

}
