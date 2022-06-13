import PropTypes from 'prop-types';
import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
        <button className={s.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
