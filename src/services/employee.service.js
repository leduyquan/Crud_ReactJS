import BaseService from './configure/base.service';

class EmployeeService extends BaseService {
  constructor() {
    super();
  }

  getEmployeeList() {
    this.requestUrl = `${this.baseUrl}employees`;
    return this.get();
  }

  createEmployee(body) {
    this.requestUrl = `${this.baseUrl}employees`;
    return this.post(body);
  }
}

//To create a instance, dont need use new in child-class
export default new EmployeeService;