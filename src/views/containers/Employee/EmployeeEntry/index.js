import React, { Component } from 'react';

import EmployeeEntry from '../../../components/Employee/EmployeeEntry';
import { fetchEmployeeListStart } from '../EmployeeList/actions';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class EmployeeEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
  }

  componentDidMount(){
    const { fetchEmployeeListStart} = this.props;
    fetchEmployeeListStart();
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
  fetchEmployeeListStart: () => dispatch(fetchEmployeeListStart())
});

export default connect(null, mapDispatchToProps)(employeeEntry);