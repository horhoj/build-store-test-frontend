import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { AuthLayout } from '../../../layouts/AuthLayout';
import { authSlice } from '../../store/authSlice';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import { Button } from '~/ui/Button';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { Input } from '~/ui/Input';
import { Form } from '~/ui/Form';
import { FormField } from '~/ui/FormField';
import { getFormikFieldData } from '~/utils/getFormikFieldData';
import { Spinner } from '~/ui/Spinner';
import { Link } from '~/ui/Link';
import { routes } from '~/router/routes';
import { FormResponseErrors } from '~/ui/FormResponseErrors';
import { FormTitle } from '~/ui/FormTitle';

interface InitialValues {
  email: string;
  password: string;
}

const initialValues: InitialValues = {
  email: 'xman@mail.ru',
  password: 'p@ssw0rd',
};

const VALIDATION_IS_EMPTY_MSG = 'required';
const VALIDATION_IS_NOT_EMAIL_MSG = 'not mail';
const VALIDATION_PASSWORD_MUST_MIN =
  'Password must contain at least 8 characters';

const validationSchema: yup.ObjectSchema<InitialValues> = yup.object({
  email: yup
    .string()
    .required(VALIDATION_IS_EMPTY_MSG)
    .email(VALIDATION_IS_NOT_EMAIL_MSG),
  password: yup
    .string()
    .required(VALIDATION_IS_EMPTY_MSG)
    .min(8, VALIDATION_PASSWORD_MUST_MIN),
});

export function LoginPage() {
  const dispatch = useAppDispatch();
  useAuthRedirect();
  const formik = useFormik<InitialValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        authSlice.thunks.loginThunk({
          loginPayload: values,
        }),
      );
    },
  });

  useEffect(
    () => () => {
      dispatch(authSlice.actions.loginRequestClear());
    },
    [],
  );

  const loginRequest = useAppSelector((state) => state.auth.loginRequest);

  const emailFieldData = getFormikFieldData(formik, 'email');
  const passwordFieldData = getFormikFieldData(formik, 'password');

  return (
    <>
      <Spinner isShow={loginRequest.isLoading} />
      <AuthLayout>
        <Form onSubmit={formik.handleSubmit} noValidate autoComplete={'off'}>
          <FormTitle>SIGN IN</FormTitle>
          {loginRequest.error && (
            <FormResponseErrors
              responseErrors={loginRequest.error}
              title={'Login request failed'}
            />
          )}
          <FormField title={'email'} error={emailFieldData.errorText}>
            <Input
              {...emailFieldData.fieldProps}
              placeholder={'mail...'}
              isError={emailFieldData.isError}
              disabled={loginRequest.isLoading}
            />
          </FormField>
          <FormField title={'Password'} error={passwordFieldData.errorText}>
            <Input
              {...passwordFieldData.fieldProps}
              placeholder={'password...'}
              isError={passwordFieldData.isError}
              type={'password'}
              disabled={loginRequest.isLoading}
            />
          </FormField>
          <Button type={'submit'} disabled={loginRequest.isLoading}>
            Submit
          </Button>
          <div>
            Not Sign Up? <Link to={routes.REGISTER}>SIGN UP</Link>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
}
