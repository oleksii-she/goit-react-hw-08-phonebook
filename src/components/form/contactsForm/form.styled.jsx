import styled from 'styled-components';
import { Form, Field } from 'formik';
export const Label = styled.label`
  margin-bottom: 14px;
`;

export const Button = styled.button`
  border-radius: ${p => p.theme.space[1]}px;
  border: none;
  padding: ${p => p.theme.space[2]}px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: ${p => p.theme.colors.muted};
  }
`;
export const FormBox = styled.div``;
export const PhoneBookTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  text-align: center;
`;
export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Input = styled(Field)`
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts['Roboto']}px;

  border: 1px solid rgba(33, 33, 33, 0.2);

  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
  outline: none;
`;
