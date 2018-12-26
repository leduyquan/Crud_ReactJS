import React, { Component } from 'react';
import EmployeeEntry from '../../../components/Employee/EmployeeEntry';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  createEmployeeStart,
  resetStateEmployeeEntry
} from './actions';

class EmployeeEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
  }

  componentWillUnmount() {
    const { resetStateEmployeeEntry } = this.props;
    resetStateEmployeeEntry();
  }

  onSaveClickHandler(values) {
    const { createEmployee } = this.props;
    //check values has property, if not => null
    const get = name => values.hasOwnProperty(name) ? values[name] : null;

    const data = {
      name: get('name'),
      address: get('address'),
      position: get('position'),
      salary: get('salary')
    };

    createEmployee(data);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <EmployeeEntry
        onSaveClickHandler={handleSubmit(this.onSaveClickHandler)}
      />
    );
  }
}

const employeeEntry = reduxForm({
  form: 'employeeEntry'
})(EmployeeEntryContainer);

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  createEmployee: (inputData) => dispatch(createEmployeeStart(inputData)),
  resetStateEmployeeEntry: () => dispatch(resetStateEmployeeEntry())
});

export default connect(null, mapDispatchToProps)(employeeEntry);