import { useAuth } from 'components/hooks/useAuth';
import { Box, Text, BtnLogOut, HoverBtn } from './userMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/Authorization/operations';
export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log('asa');
    dispatch(logout());
  };
  const { user } = useAuth();
  return (
    <Box>
      <Text>Welcome, {user.email}</Text>
      <BtnLogOut onClick={handleLogOut}>
        <HoverBtn color="white" size="18px" />
      </BtnLogOut>
    </Box>
  );
};
