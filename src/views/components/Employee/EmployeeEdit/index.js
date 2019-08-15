import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.scss';

class EmployeeEntry extends Component {
  constructor(props) {
    super(props);
  }

  renderField({ input, type, options, placeholder, meta: { touched, error } }) {
    return (
      <div className='input-form'>
        <input
          {...input}
          {...options}
          title={input.value}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }

  render() {
    const { onSaveClickHandler } = this.props;
    return (
      <div className="col col-xs-12 col-sm-4">
        <form className="employee-page-leftpane" onSubmit={onSaveClickHandler}>
          <div className="employee-new">
            <div className="employee-new-title">CREATE NEW EMPLOYEE</div>
            <div className="row new-name">
              <div className="col col-sm-12">
                <Field
                  name='name'
                  type='text'
                  component={this.renderField}
                  placeholder='Employee Name'
                />
              </div>
            </div>
            <div className="row address">
              <div className="col col-sm-12">
                <Field
                  name='address'
                  component={this.renderField}
                  placeholder='Address'
                />
              </div>
            </div>
            <div className="row position">
              <div className="col col-sm-12">
                <Field
                  name='position'
                  component={this.renderField}
                  placeholder='Position'
                />
              </div>
            </div>
            <div className="row salary">
              <div className="col col-sm-12">
                <Field
                  name='salary'
                  component={this.renderField}
                  placeholder='Salary'
                />
              </div>
            </div>
            <div className="row button-save">
              <div className="col col-xs-12">
                <button className="btn btn-save">Save employee</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

export default EmployeeEntry;