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

  async post(path, body) {
    return this.service.post(path, body)
      .then(response => {
        return response;
      }).catch(error => {
        console.log(error);
      });
  }

  // async post(path, body) {
  //   return this.service.request({
  //     method: 'POST',
  //     url: path,
  //     data: body,
  //     responseType: 'json'
  //   }).then(response => {
  //     return response;
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
}

//To create a instance
export default new ApiService;