import { React, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './header/header';

const Contacts = lazy(() => import('../page/contacts'));
const Register = lazy(() => import('../page/register'));
const Login = lazy(() => import('../page/login'));
const NotFound = lazy(() => import('../page/notFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Contacts />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
