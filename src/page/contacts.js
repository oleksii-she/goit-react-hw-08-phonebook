import { FormData } from 'components/form/contactsForm/form';
import { Filter } from 'components/filter/Filter';
import { ContactsList } from 'components/contacts/contactsList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading, getContacts } from 'redux/contacts/selectors';
import {
  Box,
  OpenModal,
  PhoneBookBox,
} from 'components/contacts/contacts.styled';
import { ModalMenu } from 'components/modal/modal';

import { useMatchMedia } from 'components/hooks/useMatcMedia';

import { useState } from 'react';
const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  const { isMobile } = useMatchMedia();
  const dispatch = useDispatch();

  const [shovModal, setShovModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const closeModal = () => {
    setShovModal(false);
  };
  return (
    <Box>
      {!isMobile && (
        <PhoneBookBox>
          <FormData />
        </PhoneBookBox>
      )}
      {isMobile && (
        <OpenModal onClick={() => setShovModal(true)}>Add contact</OpenModal>
      )}
      <div>
        {isLoading && !error && <b>Request in progress...</b>}

        <ContactsList />
        {items.length > 8 ? <Filter /> : null}
      </div>
      {shovModal && (
        <ModalMenu onClose={closeModal}>
          <FormData onClose={closeModal} />
        </ModalMenu>
      )}
    </Box>
  );
};

export default Contacts;
