import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Label, Forma } from '../registrationForm/registration.styled';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    const { login, password } = values;

    const newUser = {
      login,
      password,
    };
    console.log(newUser);
    resetForm();
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
