import React, { Component } from 'react';
import Spinner from '../../../../common/Spinner';
import { Field, reduxForm } from 'redux-form';
import './styles';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { employeeList, isLoading } = this.props;

    return (
      <div className="col col-xs-12 col-sm-8">
        <div className="employee-page-rightpane">
          <div className="page-title">
            <span className="title-script employee-page-title">employees</span>
          </div>
          <div className="row employee-table">
            {(isLoading) ? <Spinner /> : (
              <table className="table-hover table-striped">
                <thead>
                  <tr role="row">
                    <th className="employee-th">Name</th>
                    <th className="employee-th">Address</th>
                    <th className="employee-th">Position</th>
                    <th className="employee-th">Salary</th>
                    <th className="employee-th">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList.map((item, index) => (
                    <tr key={index}>
                      <td className="employee-td">{item.name}</td>
                      <td className="employee-td">{item.address}</td>
                      <td className="employee-td">{item.position}</td>
                      <td className="employee-td">{item.salary}</td>
                      <td className="employee-td"><span className="fa fa-pencil icon" ></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    )
  }
};

export default EmployeeList;