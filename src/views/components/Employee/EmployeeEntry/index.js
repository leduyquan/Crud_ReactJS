import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.scss';

class EmployeeEntry extends Component {
  constructor(props) {
    super(props);
    this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
  }

  renderField({ input, type, options, validateReferredBy, placeholder, meta: { touched, error } }) {
    return (
      <div className='input-form'>
        <input
          {...input}
          {...options}
          {...validateReferredBy}
          title={input.value}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }

  onSaveClickHandler(values) {

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
    const { onSaveClickHandler } = this.props;
    return (
      <div className="col col-xs-12 col-sm-4">
        <form className="event-page-leftpane" onSubmit={onSaveClickHandler}>
          <div className="event-new">
            <div className="event-new-title">CREATE NEW EVENT</div>
            <div className="row new-name">
              <div className="col col-sm-12">
                <Field
                  name='eventName'
                  type='text'
                  component={this.renderField}
                  placeholder='Event Name'
                />
              </div>
            </div>
            <div className="row start-end-date-time">
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name="startDatetime"
                  component={this.renderField}
                  placeholder='Start Date'
                />
              </div>
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name="endDatetime"
                  component={this.renderField}
                  placeholder='End Date'
                />
              </div>
            </div>
            <div className="row start-end-time">
              <div className="col col-xs-12 col-sm-6">
                <div className="textDate">Start Time</div>
                <Field
                  name="startTime"
                  component={this.renderField}
                />
              </div>
              <div className="col col-xs-12 col-sm-6">
                <div className="textDate">End Time</div>
                <Field
                  name="endTime"
                  component={this.renderField}
                />
              </div>
            </div>
            <div className="row sponsorship">
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name='sponsor'
                  type='text'
                  component={this.renderField}
                  placeholder='Sponsor'
                />
              </div>
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name='sponsorshipCost'
                  type='text'
                  validate={this.isDecimal}
                  component={this.renderField}
                  placeholder='Sponsorship Cost'
                />
              </div>
            </div>
            <div className="row cost-date">
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name='additionalCost'
                  type='text'
                  validate={this.isDecimal}
                  component={this.renderField}
                  placeholder='Additional Cost'
                />
              </div>
              <div className="col col-xs-12 col-sm-6">
                <Field
                  name="inactiveDate"
                  component={this.renderField}
                  placeholder='Inactive Date'
                />
              </div>
            </div>
            <div className="row description">
              <div className="col col-sm-12">
                <Field
                  name='description'
                  component={this.renderField}
                />
              </div>
            </div>
            <div className="row button-save">
              <div className="col col-xs-12">
                <button className="btn btn-save">Save Event</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

export default EmployeeEntry;