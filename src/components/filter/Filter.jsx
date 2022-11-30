import { Label, Input } from './filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispath = useDispatch();

  return (
    <>
      <Label htmlFor="">
        <Input
          type="text"
          placeholder="   Find contacts by name"
          onChange={e => dispath(setFilter(e.target.value))}
        />
      </Label>
    </>
  );
};
