import styled from 'styled-components';

export const Text = styled.p`
  color: ${p => p.theme.colors.muted};
  margin: 0;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
}
`;

export const BtnLogOut = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: auto;
`;
