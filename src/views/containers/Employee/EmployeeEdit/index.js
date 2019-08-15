import React, { Component } from 'react';
//import EmployeeEntry from '../../../components/Employee/EmployeeEntry';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  getEmployeeDetailStart,
  updateEmployeeStart,
  resetStateEmployeeEdit
} from './actions';

class EmployeeEditContainer extends Component {
  constructor(props) {
    super(props);
    this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
  }

  componentDidMount() {
    const {getEmployeeDetail} = this.props;
    getEmployeeDetail();
  }

  componentWillUnmount() {
    const { resetStateEmployeeEdit } = this.props;
    resetStateEmployeeEdit();
  }

  onSaveClickHandler(values) {
    const { updateEmployee } = this.props;
    //check values has property, if not => null
    const get = name => values.hasOwnProperty(name) ? values[name] : null;

    const data = {
      name: get('name'),
      address: get('address'),
      position: get('position'),
      salary: get('salary')
    };

    updateEmployee(data, parseInt(get('_Id')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <h1 >helllo</h1>
      // <EmployeeEntry
      //   onSaveClickHandler={handleSubmit(this.onSaveClickHandler)}
      // />
    );
  }
}

const employeeEdit = reduxForm({
  form: 'employeeEdit'
})(EmployeeEditContainer);

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  getEmployeeDetail: employeeId => dispatch(getEmployeeDetailStart(employeeId)),
  updateEmployee: (inputData, employeeId) => dispatch(updateEmployeeStart(inputData, employeeId)),
  resetStateEmployeeEdit: () => dispatch(resetStateEmployeeEdit())
});

export default connect(null, mapDispatchToProps)(employeeEdit);