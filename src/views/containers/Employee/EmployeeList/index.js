
import React, { Component } from 'react';
import EmployeeList from '../../../components/Employee/EmployeeList';
import { connect } from 'react-redux';
import {
  fetchEmployeeListStart,
  resetStateEmployeeList
} from './actions';

class EmployeeListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchEmployeeList } = this.props;
    fetchEmployeeList();
  }

  componentWillUnmount() {
    const { resetStateEmployeeList } = this.props;
    resetStateEmployeeList();
  }

  render() {
    const { employeeList } = this.props;
    return (
      <EmployeeList
        employeeList={employeeList}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  employeeList: state.employeeListReducer.employeeData
});

const mapDispatchToProps = dispatch => ({
  fetchEmployeeList: () => dispatch(fetchEmployeeListStart()),
  resetStateEmployeeList: () => dispatch(resetStateEmployeeList())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);