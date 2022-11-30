import styled from 'styled-components';
import { LogOut } from '@styled-icons/entypo/LogOut';

export const Text = styled.p`
  color: ${p => p.theme.colors.muted};
  margin: 0;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
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

export const HoverBtn = styled(LogOut)`
  color: ${p => p.theme.colors.muted};
  size: 25px;
  &:hover {
    color: ${p => p.theme.colors.active};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
