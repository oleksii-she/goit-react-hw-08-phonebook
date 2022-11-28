import { LinkStyled } from 'components/header/header.styled';
import { useAuth } from 'components/hooks/useAuth';

export const Navigation = () => {
  const { IsLoggedIn } = useAuth();

  return (
    <>
      {IsLoggedIn ? (
        <LinkStyled to="/contacts">Contacts</LinkStyled>
      ) : (
        <LinkStyled to="/">Contacts</LinkStyled>
      )}
    </>
  );
};
