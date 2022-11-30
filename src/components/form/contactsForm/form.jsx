import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  Label,
  Button,
  PhoneBookTitle,
  Forma,
  Input,
  FormBox,
} from './form.styled';
import { getContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

export const FormData = ({ onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const nameId = nanoid();
  const tagInputId = nanoid();
  const id = nanoid();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const newContacts = {
      id,
      name,
      number,
    };
    if (items.find(contact => contact.name === name)) {
      return alert(`${name} is already exist!`);
    }
    dispatch(addContacts(newContacts));

    resetForm();
    onClose();
  };

  return (
    <FormBox>
      <PhoneBookTitle>Phonebook</PhoneBookTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Forma action="">
          <Label htmlFor={nameId}>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={tagInputId}
              required
              placeholder="Name"
            />
          </Label>
          <Label htmlFor={nameId}>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={tagInputId}
              required
              placeholder="Number"
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Forma>
      </Formik>
    </FormBox>
  );
};
