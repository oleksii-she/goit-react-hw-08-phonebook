import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from 'redux/Authorization/selectors';

const { useSelector } = require('react-redux');
export const useAuth = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { IsLoggedIn, isRefreshing, user };
};
