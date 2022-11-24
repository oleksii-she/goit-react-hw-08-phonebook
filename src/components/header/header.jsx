import { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Outlet } from 'react-router-dom';
import { Conteiner } from 'components/conteiner.styled';
import {
  HeaderStyled,
  NavigationMenu,
  LinkStyled,
  LinkRegisterStyled,
} from './header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavigationMenu>
          <LinkStyled to="/" end>
            Contacts
          </LinkStyled>
          <div>
            <LinkRegisterStyled to="/register">Registration</LinkRegisterStyled>
            <LinkRegisterStyled to="/login">Login</LinkRegisterStyled>
          </div>
        </NavigationMenu>
      </HeaderStyled>
      <Conteiner>
        <Suspense fallback={<BeatLoader color="#36d7b7" />}>
          <Outlet />
        </Suspense>
      </Conteiner>
    </>
  );
};
