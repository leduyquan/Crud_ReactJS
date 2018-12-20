
import EmployeeList from '../../../components/Employee/EmployeeList';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

const mapStateToProps = (state) => ({
    employeeList: state.employeeListReducer.employeeData
});

const mapDispatchToProps = dispatch => ({
  
});

export const EmployeeListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeList);