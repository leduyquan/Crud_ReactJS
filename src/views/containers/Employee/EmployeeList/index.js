
import React, { Component } from 'react';
import EmployeeList from '../../../components/Employee/EmployeeList';
import EmployeeEditContainer from '../EmployeeEdit';
import { modalActions } from '../../../../common/Modal/actions';
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
    console.log('goi actione list')
  }

  componentWillUnmount() {
    const { resetStateEmployeeList } = this.props;
    resetStateEmployeeList();
  }

  render() {
    const { employeeList, isLoading, onEdit } = this.props;
    return (
      <EmployeeList
        employeeList={employeeList}
        isLoading={isLoading}
        onEdit={onEdit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  employeeList: state.employeeListReducer.employeeData,
  isLoading: state.employeeListReducer.loadingTable
});

const mapDispatchToProps = dispatch => ({
  onEdit: employeeId => dispatch(modalActions.showModal({
    size: 'lg',
    headerClass: 'hide-header',
    component: EmployeeEditContainer,
    className: 'edit-modal-form',
    props: {
      employeeId
    }
  })),
  fetchEmployeeList: () => dispatch(fetchEmployeeListStart()),
  resetStateEmployeeList: () => dispatch(resetStateEmployeeList())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);