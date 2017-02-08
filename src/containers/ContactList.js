import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/Link';
import Button from '../components/Button';
import { contactDelete, contactFetch } from '../actions';

class ContactList extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to="/new">
          Create new Contact
        </Link>
        <ul>
          {
            this.props.contactList.map(({ id, name, phone, email }, index) => (
              <li key={index}>
                {name} - {phone} - {email} -
                <Link to={`/edit/${id}`} className="btn btn-primary">Edit</Link> -
                <Button
                  buttonType="btn-danger"
                  onClick={() => this.props.onClickDelete(id)}>
                    Delete
                </Button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({
  onClickDelete: index => dispatch(contactDelete(index)),
  onLoad: () => dispatch(contactFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
