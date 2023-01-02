import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  Label,
  Forma,
  Section,
  Span,
  Input,
  ErroStyle,
  Button,
} from '../registrationForm/registration.styled';
import { login } from 'redux/Authorization/operations';
import { useDispatch } from 'react-redux';
const schema = yup.object().shape({
  email: yup.string().min(6).max(30).required().email(),
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

    dispatch(login(newUser));

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

          <Button type="submit">Submit</Button>
        </Forma>
      </Formik>
    </Section>
  );
};
