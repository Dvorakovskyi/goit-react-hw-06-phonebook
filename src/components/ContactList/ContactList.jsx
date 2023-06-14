import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <ul>
        {contacts.map(({ id, number, name }) => (
          <ContactItem
            contacts={contacts}
            key={id}
            name={name}
            number={number}
            onClick={() => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
