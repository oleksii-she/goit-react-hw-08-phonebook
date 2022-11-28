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
  color: #4a88a1;
`;

export const Input = styled(Field)`
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  max-width: 300px;
`;
