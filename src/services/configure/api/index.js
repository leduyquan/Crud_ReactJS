import axios from 'axios';

class ApiService {
  constructor() {
    const service = axios.create();
    this.service = service;
  }

  async get(path) {
    return this.service.get(path)
    .then(response => {
      return response;
    }).catch(error => {
      console.log(error);
    });
  }
}

//To create a instance
export default new ApiService;