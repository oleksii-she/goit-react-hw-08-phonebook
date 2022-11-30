import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Input = styled.input`
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
