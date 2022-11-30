import styled from 'styled-components';
export const Box = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleError = styled.h2`
  color: ${p => p.theme.colors.error};
  margin: 0;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const TextError = styled.p`
  color: ${p => p.theme.colors.error};
  margin: 0;
`;
