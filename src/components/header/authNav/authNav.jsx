import { LinkRegisterStyled } from '../header.styled';

export const AuthNav = () => {
  return (
    <>
      <LinkRegisterStyled to="/register">Registration</LinkRegisterStyled>
      <LinkRegisterStyled to="/login">Login</LinkRegisterStyled>
    </>
  );
};
