import { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Outlet } from 'react-router-dom';
import { Conteiner } from 'components/conteiner.styled';
import { HeaderStyled, NavigationMenu } from './header.styled';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/userMenu/userMenu';
import { Navigation } from 'components/navigation/navigatoin';
import { AuthNav } from './authNav/authNav';
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
        <Suspense fallback={<BeatLoader color="#36d7b7" width="22px" />}>
          <Outlet />
        </Suspense>
      </Conteiner>
    </>
  );
};
