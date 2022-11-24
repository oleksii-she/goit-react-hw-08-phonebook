import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
