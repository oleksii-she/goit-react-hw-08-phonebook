import PropTypes from 'prop-types';
import { Item, Button, Span, DeleteIcon } from './contacts.styled';

export const ContactsItem = ({ name, number, onClick }) => {
  return (
    <Item>
      {name}:<span>{number}</span>
      <Button onClick={onClick}>
        <DeleteIcon color="red" size="18px" />
      </Button>
    </Item>
  );
};
ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
