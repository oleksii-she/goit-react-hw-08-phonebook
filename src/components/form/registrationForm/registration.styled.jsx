import styled from 'styled-components';

import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Section = styled.section`
  padding-top: ${p => p.theme.space[4]}px;
`;
export const Span = styled.span`
  padding-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.registr};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: ${p => p.theme.fontSizes[2]}px;
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

export const ErroStyle = styled.div`
  color: ${p => p.theme.colors.error};
`;

export const Button = styled.button`
  background-color: ${p => p.theme.colors.registr};
  color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.space[2]}px;
  padding: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.header};
    color: ${p => p.theme.colors.active};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
