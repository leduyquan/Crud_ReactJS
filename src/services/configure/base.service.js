import API from './api';
import AppConstant from '../../constants/app'

class BaseService {
  constructor(){
    this.requestUrl = '';
    this.baseUrl = AppConstant.API_URL;
  }

  get() {
    return API.get(this.requestUrl);
  }

  post(body) {
    return API.post(this.requestUrl, body);
  }
}

export default BaseService;