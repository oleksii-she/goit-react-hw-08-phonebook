import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderStyled = styled.header`
  background-color: #0b1945;
  /* position: fixed; */
  /* top: 0;
  right: 0; */
  left: 0;
  z-index: 999;
  padding: 30px;
`;
export const NavigationMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Section = styled.section`
  padding-top: 100px;
`;

export const LinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.active};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.active};
    transition: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export const LinkRegisterStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin-left: ${p => p.theme.space[4]}px;

  &.active {
    color: ${p => p.theme.colors.active};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.active};
    transition: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
