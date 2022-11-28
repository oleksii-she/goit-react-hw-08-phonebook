import { useAuth } from 'components/hooks/useAuth';

import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({
  redirectTo = '/contacts',
  component: Component,
}) => {
  const { IsLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !IsLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
