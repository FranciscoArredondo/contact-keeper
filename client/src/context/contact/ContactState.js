import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: uuid.v4(),
        name: 'Jill Johnson',
        email: 'frarredo@gmail.com',
        phone: '858-224-8965',
        type: 'professional',
      },
      {
        id: uuid.v4(),
        name: 'Jones Watson',
        email: 'jwatson@gmail.com',
        phone: '626-423-9876',
        type: 'personal',
      },
      {
        id: uuid.v4(),
        name: 'Sherlocke Holmes',
        email: 'sherlock.holmes@hotmail.com',
        phone: '5555555555',
        type: 'personal',
      },
      {
        id: uuid.v4(),
        name: 'Rad Johnson',
        email: 'r.johnson@gmail.com',
        phone: '888-999-8976',
        type: 'personal',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
