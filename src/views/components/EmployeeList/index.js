import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './styles.scss';

class EmployeeList extends Component {
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
        endDatetime:'fdsjh',
        description:'fsakjfsda',
        inactiveDate: 'ewrewre'
      },
      {
        eventName: 'werw',
        startDatetime: 'fsa',
        endDatetime:'oiuoui',
        description:'gfhfs',
        inactiveDate: 'eqweqw'
      },
    ]
    const { handleSubmit } = this.props;
    return (
      <div className="row event-page-wrapper">
      <div className="col col-xs-12 col-sm-4">
        <form className="event-page-leftpane" onSubmit={handleSubmit(this.onSaveClickHandler)}>
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
      <div className="col col-xs-12 col-sm-8">
        <div className="event-page-rightpane">
          <div className="page-title">
            <span className="title-script event-page-title">Events</span>
          </div>
          <div className="row event-table">
            <table className="table-hover table-striped">
              <thead>
                <tr role="row">
                  <th className="event-th">Name</th>
                  <th className="event-th">Start Date</th>
                  <th className="event-th">End Date</th>
                  <th className="event-th">Description</th>
                  <th className="event-th">Inactive Date</th>
                  <th className="event-th">Edit</th>
                </tr>
              </thead>
              <tbody>
               {sortedEvent.map((item, index) => (
                <tr key={index}>
                  <td className="event-td">{item.eventName}</td>
                  <td className="event-td">{item.startDatetime}</td>
                  <td className="event-td">{item.endDatetime}</td>
                  <td className="event-td">{item.description}</td>
                  <td className="event-td">{item.inactiveDate}</td>
                  <td className="event-td"><span className="fa fa-pencil icon" ></span></td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    )
  }
};

const eventEntry = reduxForm({
  form: 'evententry'
})(EmployeeList);

export default eventEntry;