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
}

export default BaseService;