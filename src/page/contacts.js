import { FormData } from 'components/form/contactsForm/form';
import { Filter } from 'components/filter/Filter';
import { ContactsList } from 'components/contacts/contactsList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <FormData />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
