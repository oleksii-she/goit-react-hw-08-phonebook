import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[3]}px;

  border: 1px solid rgb(221, 221, 221);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  max-height: 50vh;
  width: 100%;
  overflow-y: auto;
`;

export const Item = styled.li`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #030303;
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Button = styled.button`
  border-radius: ${p => p.theme.space[1]}px;
  border: none;
  padding: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-size: small;
  cursor: pointer;
  background: none;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const Span = styled.span`
  /* border: 1px solid rgb(221, 221, 221); */
`;
export const ContactsTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  text-align: center;
`;

// contacts PAge
export const Box = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 719px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @media (max-width: 720px) {
    padding-top: ${p => p.theme.space[5]}px;
  }
`;

export const PhoneBookBox = styled.div`
  @media (max-width: 720) {
    display: none;
  }
  @media (min-width: 720px) {
    margin-right: 15px;
  }

  @media (min-width: 1199px) {
    margin: 0;
  }
`;

export const OpenModal = styled.button`
  border-radius: ${p => p.theme.space[1]}px;
  border: none;
  padding: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-size: small;
  cursor: pointer;
  background: ${p => p.theme.colors.registr};
  color: ${p => p.theme.colors.muted};

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media (max-width: 720px) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
