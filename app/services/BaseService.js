import axios from 'axios';

class BaseService {
  constructor(options, headers) {
    this.defaultHeaders = {
      ...headers,
    };
    this.instance = axios.create({
      timeout: 15000,
      headers: this.defaultHeaders,
      'Content-Type': 'application/json;charset=UTF-8',
      ...options,
    });
  }

  get(...params) {
    return this.instance.get(...params);
  }

  post(...params) {
    return this.instance.post(...params);
  }

  patch(...params) {
    return this.instance.patch(...params);
  }

  put(...params) {
    return this.instance.put(...params);
  }

  delete(...params) {
    return this.instance.delete(...params);
  }
}

export default BaseService;
