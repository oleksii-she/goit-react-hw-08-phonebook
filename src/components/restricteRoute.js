import { useAuth } from 'components/hooks/useAuth';

import { Navigate } from 'react-router-dom';
export const RestricteRoute = ({
  redirectTo = '/contacts',
  component: Component,
}) => {
  const { IsLoggedIn } = useAuth();

  return IsLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
