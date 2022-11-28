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
`;

export const Input = styled(Field)`
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.space['Times New Roman']}px;

  border: 1px solid rgba(33, 33, 33, 0.2);

  box-sizing: border-box; ;
`;

export const ErroStyle = styled.div`
  color: ${p => p.theme.colors.error};
`;
