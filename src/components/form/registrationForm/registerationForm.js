import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { register } from 'redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import {
  Label,
  Forma,
  Section,
  Span,
  Input,
  ErroStyle,
} from './registration.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().min(6).max(30).required(),
  password: yup.string().min(6).max(16).required(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('confirm password is a required field'),
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
    const { name, email, password, confirmPassword } = values;

    const newUser = {
      name,
      email,
      password,
    };

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
            <ErroStyle>
              <ErrorMessage name="name" />
            </ErroStyle>
          </Label>
          <Label htmlFor="email">
            <Span>Email</Span> <Input type="text" name="email" />
            <ErroStyle>
              <ErrorMessage name="email" />
            </ErroStyle>
          </Label>
          <Label htmlFor="password">
            <Span>Password</Span> <Input type="password" name="password" />
            <ErroStyle>
              <ErrorMessage name="password" />
            </ErroStyle>
          </Label>
          <Label htmlFor="password">
            <Span>Confirm password</Span>
            <Input type="password" name="confirmPassword" />
            <ErroStyle>
              <ErrorMessage name="confirmPassword" />
            </ErroStyle>
          </Label>

          <button type="submit">Submit</button>
        </Forma>
      </Formik>
    </Section>
  );
};
