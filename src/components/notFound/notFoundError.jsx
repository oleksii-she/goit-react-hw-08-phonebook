import { Box, TitleError, TextError } from './notFound.styled';

export const NotFoundError = () => {
  return (
    <Box>
      <TitleError>Opps Error 404 : no such page found</TitleError>
      <TextError>go to the page "Contacts"</TextError>
    </Box>
  );
};
