import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // signinUser is ActionCreator:
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...email} className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input {...password} type="password" className="form-control"/>
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
