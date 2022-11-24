import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Label, Forma } from '../registration.styled';

const schema = yup.object().shape({
  login: yup.string().required(),
  email: yup.string().min(6).max(30).required(),
  password: yup.string().min(6).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  login: '',
  password: '',
  confirmPassword: '',
  email: '',
};

export const Registration = () => {
  const handleSubmit = (values, { resetForm }) => {
    const { login, password, confirmPassword, email } = values;

    const newUser = {
      login,
      email,
      password,
    };
    resetForm();
    console.log(newUser);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <Label htmlFor="login">
          <span>Login</span> <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </Label>
        <Label htmlFor="email">
          <span>Email</span> <Field type="text" name="email" />
          <ErrorMessage name="email" />
          <ErrorMessage name="email" />
        </Label>
        <Label htmlFor="password">
          <span>Password</span> <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </Label>
        <Label htmlFor="password">
          <span>Password</span> <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" />
        </Label>

        <button type="submit">Submit</button>
      </Forma>
    </Formik>
  );
};
