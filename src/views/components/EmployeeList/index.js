import React, { Component } from 'react';
import './styles.scss';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col col-xs-12 col-sm-8">
        <div className="sa-goal-page-rightpane">
          <div className="page-title">
            <span className="title-script sa-goal-page-title">Goals</span>

          </div>

          <div className="row sa-goal-table">
            <table className="table-hover table-striped" id="searchable">
              <thead>
                <tr role="row">
                  <th className="sa-goal-th">Leads</th>
                  <th className="sa-goal-th">Contacts</th>
                  <th className="sa-goal-th">Intros</th>
                  <th className="sa-goal-th">Sales</th>
                  <th className="edit-goal-th">Edit</th>
                </tr>
              </thead >
              <tbody>
                <td className="sa-goal-td">a</td>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    )
  }
};

export default EmployeeList;