import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactFormUpdate, contactAdd } from '../actions';
import Link from 'react-router/Link';
import ContactForm from '../components/ContactForm';

class ContactCreate extends Component {
  handleChange(event, prop) {
    const { value } = event.target;
    this.props.onChange({ prop, value });
  }

  handleSubmit() {
    const { name, phone, email } = this.props;
    this.props.onSubmit({ name, phone, email });
  }

  render() {
    return (
      <form className="form-horizontal">
        <ContactForm {...this.props} />
        <fieldset className="form-group">
          <Link to="/" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</Link>
        </fieldset>
      </form>
    )
  }
}

const mapStateToProps = state => ({
    ...state.contactForm
});

const mapDispatchToProps = dispatch => ({
  onChange: values => dispatch(contactFormUpdate(values)),
  onSubmit: contact => dispatch(contactAdd(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreate);
