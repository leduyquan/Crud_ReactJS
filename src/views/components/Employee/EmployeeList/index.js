import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.scss';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sortedEvent = [
      {
        eventName: 'fs',
        startDatetime: 'fd',
        endDatetime: 'fdsjh',
        description: 'fsakjfsda',
        inactiveDate: 'ewrewre'
      },
      {
        eventName: 'werw',
        startDatetime: 'fsa',
        endDatetime: 'oiuoui',
        description: 'gfhfs',
        inactiveDate: 'eqweqw'
      },
    ]
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
                  <th className="event-th">Start Date</th>
                  <th className="event-th">End Date</th>
                  <th className="event-th">Description</th>
                  <th className="event-th">Inactive Date</th>
                  <th className="event-th">Edit</th>
                </tr>
              </thead>
              <tbody>
                {sortedEvent.map((item, index) => (
                  <tr key={index}>
                    <td className="event-td">{item.eventName}</td>
                    <td className="event-td">{item.startDatetime}</td>
                    <td className="event-td">{item.endDatetime}</td>
                    <td className="event-td">{item.description}</td>
                    <td className="event-td">{item.inactiveDate}</td>
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