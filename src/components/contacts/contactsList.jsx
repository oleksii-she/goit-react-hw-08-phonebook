import { ContactsItem } from './contactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsTitle, List } from './contacts.styled';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
export const ContactsList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const FindContact = () => {
    const normalizedfilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  const contactsData = FindContact();

  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <List>
        {contactsData.map(data => (
          <ContactsItem
            key={data.id}
            name={data.name}
            number={data.number}
            onClick={() => dispatch(deleteContacts(data.id))}
          />
        ))}
      </List>
    </>
  );
};
