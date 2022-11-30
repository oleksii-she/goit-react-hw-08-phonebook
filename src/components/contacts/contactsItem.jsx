import PropTypes from 'prop-types';
import { Item, Button, Span } from './contacts.styled';
import { MdDelete } from 'react-icons/md';
export const ContactsItem = ({ name, number, onClick }) => {
  return (
    <Item>
      {name}:<Span>{number}</Span>
      <Button onClick={onClick}>
        <MdDelete />
      </Button>
    </Item>
  );
};
ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
