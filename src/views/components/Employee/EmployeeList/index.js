import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.scss';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { employeeList } = this.props;
    
    return (
      <div className="col col-xs-12 col-sm-8">
        <div className="event-page-rightpane">
          <div className="page-title">
            <span className="title-script event-page-title">Events</span>
          </div>
          <div className="row event-table">
            <table className="table-hover table-striped">
              <thead>
                <tr role="row">
                  <th className="event-th">Name</th>
                  <th className="event-th">Address</th>
                  <th className="event-th">Position</th>
                  <th className="event-th">Salary</th>
                  <th className="event-th">Edit</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((item, index) => (
                  <tr key={index}>
                    <td className="event-td">{item.name}</td>
                    <td className="event-td">{item.address}</td>
                    <td className="event-td">{item.position}</td>
                    <td className="event-td">{item.salary}</td>
                    <td className="event-td"><span className="fa fa-pencil icon" ></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
};

export default EmployeeList;