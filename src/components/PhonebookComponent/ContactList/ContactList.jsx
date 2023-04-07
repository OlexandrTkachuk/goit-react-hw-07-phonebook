// system
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';

// components
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </List>
  );
};
