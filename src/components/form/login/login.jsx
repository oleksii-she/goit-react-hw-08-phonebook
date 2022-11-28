import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Label, Forma } from '../registrationForm/registration.styled';
import { login } from 'redux/Authorization/operations';
import { useDispatch } from 'react-redux';
const schema = yup.object().shape({
  email: yup.string().min(6).max(30).required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    const newUser = {
      email,
      password,
    };
    console.log(newUser);
    dispatch(login(newUser));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <Label htmlFor="email">
          <span>Email</span> <Field type="text" name="email" />
          <ErrorMessage name="email" />
        </Label>
        <Label htmlFor="password">
          <span>Password</span> <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </Label>

        <button type="submit">Submit</button>
      </Forma>
    </Formik>
  );
};
