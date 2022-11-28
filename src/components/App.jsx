import { useEffect } from 'react';
import { React, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/Authorization/operations';

import { Header } from './header/header';
import { useAuth } from './hooks/useAuth';
import { RestricteRoute } from './restricteRoute';
import { PrivateRoute } from './privateRoute';
const Contacts = lazy(() => import('../page/contacts'));
const Register = lazy(() => import('../page/register'));
const Login = lazy(() => import('../page/login'));
const Home = lazy(() => import('../page/home'));

const NotFound = lazy(() => import('../page/notFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <RestricteRoute redirectTo="/contacts" component={<Home />} />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestricteRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestricteRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
};
