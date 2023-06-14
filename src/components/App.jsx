import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, setFilter } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { StyledWrapper } from './App.styled';

const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;

    dispatch(setFilter(value));
  };

  const getContact = () => {
    const findContact = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  const foundContact = getContact();

  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      {contacts.length > 0 ? (
        <ContactList contacts={foundContact}/>
      ) : (
        <Notification />
      )}
    </StyledWrapper>
  );
};

export default App;
