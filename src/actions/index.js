export const contactFormUpdate = ({ prop, value }) => ({
  type: 'CONTACT_FORM_UPDATE',
  payload: {
    prop,
    value
  }
});

export const contactFetch = () => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts`)
    .then(response => response.json())
    .then(json => {
      console.log(json);

      dispatch({
        type: 'CONTACT_FETCH',
        contacts: json
      });
    });
};

export const contactAdd = contact => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: 'CONTACT_ADD',
        contact
      });
      dispatch(contactFetch());
    });
};

export const contactEdit = contact => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts/${contact.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(() => {
      dispatch({
        type: 'CONTACT_EDIT',
        contact
      });
      dispatch(contactFetch());
    });
};

export const contactDelete = id => dispatch => {
  fetch(`${process.env.REACT_APP_URL}/contacts/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      dispatch({
        type: 'CONTACT_DELETE',
        id
      });
      dispatch(contactFetch());
    });
};
