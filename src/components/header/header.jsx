import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Conteiner } from 'components/conteiner.styled';
import { HeaderStyled, NavigationMenu, BoxPageLoader } from './header.styled';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/userMenu/userMenu';
import { Navigation } from 'components/navigation/navigatoin';
import { AuthNav } from './authNav/authNav';
import { Loader } from 'components/loader/loader';
export const Header = () => {
  const { IsLoggedIn } = useAuth();

  return (
    <>
      <HeaderStyled>
        <NavigationMenu>
          <Navigation />
          <div>{IsLoggedIn ? <UserMenu to="/" /> : <AuthNav />}</div>
        </NavigationMenu>
      </HeaderStyled>

      <Conteiner>
        <Suspense
          fallback={
            <BoxPageLoader>
              <Loader />
            </BoxPageLoader>
          }
        >
          <Outlet />
        </Suspense>
      </Conteiner>
    </>
  );
};
