import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { Label, Forma, Section, Span, Input } from './registration.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().min(6).max(30).required(),
  password: yup.string().min(6).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
};

export const Registration = () => {
  const dispath = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;

    const newUser = {
      name,
      email,
      password,
    };
    // console.log(newUser);
    dispath(register(newUser));
    resetForm();
  };

  return (
    <Section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma autoComplete="off">
          <Label htmlFor="login">
            <Span>Login</Span> <Input type="text" name="name" />
            <ErrorMessage name="name" />
          </Label>
          <Label htmlFor="email">
            <Span>Email</Span> <Input type="text" name="email" />
            <ErrorMessage name="email" />
          </Label>
          <Label htmlFor="password">
            <Span>Password</Span> <Input type="password" name="password" />
            <ErrorMessage name="password" />
          </Label>
          <Label htmlFor="password">
            <Span>Password</Span>{' '}
            <Input type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
          </Label>

          <button type="submit">Submit</button>
        </Forma>
      </Formik>
    </Section>
  );
};
