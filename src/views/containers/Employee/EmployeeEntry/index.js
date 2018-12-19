import React, { Component } from 'react';

import EmployeeEntry from '../../../components/Employee/EmployeeEntry';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class EmployeeEntryContainer extends Component {

  constructor(props) {
    super(props);
    this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
  }

  onSaveClickHandler(values) {
   
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
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeEntry);

