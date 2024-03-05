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
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const initialValues: InitialValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const VALIDATION_IS_EMPTY_MSG = 'required';
const VALIDATION_IS_NOT_EMAIL_MSG = 'not mail';
const VALIDATION_PASSWORD_MUST_MATCH = 'Password and confirmation do not match';
const VALIDATION_PASSWORD_MUST_MIN =
  'Password must contain at least 8 characters';

const validationSchema: yup.ObjectSchema<InitialValues> = yup.object({
  name: yup.string().required(VALIDATION_IS_EMPTY_MSG),
  email: yup
    .string()
    .required(VALIDATION_IS_EMPTY_MSG)
    .email(VALIDATION_IS_NOT_EMAIL_MSG),
  password: yup
    .string()
    .required(VALIDATION_IS_EMPTY_MSG)
    .min(8, VALIDATION_PASSWORD_MUST_MIN),
  password_confirmation: yup
    .string()
    .required(VALIDATION_IS_EMPTY_MSG)
    .oneOf([yup.ref('password'), ''], VALIDATION_PASSWORD_MUST_MATCH),
});

export function RegisterPage() {
  const dispatch = useAppDispatch();
  useAuthRedirect();
  const formik = useFormik<InitialValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        authSlice.thunks.registerThunk({
          registerPayload: values,
        }),
      );
    },
  });

  const registrationRequest = useAppSelector(
    (state) => state.auth.registrationRequest,
  );

  useEffect(
    () => () => {
      dispatch(authSlice.actions.registrationRequestClear());
    },
    [],
  );

  const nameFieldData = getFormikFieldData(formik, 'name');
  const emailFieldData = getFormikFieldData(formik, 'email');
  const passwordFieldData = getFormikFieldData(formik, 'password');
  const passwordConfirmFieldData = getFormikFieldData(
    formik,
    'password_confirmation',
  );

  return (
    <>
      <Spinner isShow={registrationRequest.isLoading} />
      <AuthLayout>
        <Form onSubmit={formik.handleSubmit} noValidate autoComplete={'off'}>
          <FormTitle>SIGN UP</FormTitle>
          {registrationRequest.error && (
            <FormResponseErrors
              responseErrors={registrationRequest.error}
              title={'Registration request error'}
            />
          )}
          <FormField title={'name'} error={nameFieldData.errorText}>
            <Input
              {...nameFieldData.fieldProps}
              placeholder={'name...'}
              isError={nameFieldData.isError}
              disabled={registrationRequest.isLoading}
            />
          </FormField>

          <FormField title={'email'} error={emailFieldData.errorText}>
            <Input
              {...emailFieldData.fieldProps}
              placeholder={'mail...'}
              isError={emailFieldData.isError}
              disabled={registrationRequest.isLoading}
            />
          </FormField>

          <FormField title={'Password'} error={passwordFieldData.errorText}>
            <Input
              {...passwordFieldData.fieldProps}
              placeholder={'Password...'}
              isError={passwordFieldData.isError}
              type={'password'}
              disabled={registrationRequest.isLoading}
            />
          </FormField>

          <FormField
            title={'Password confirm'}
            error={passwordConfirmFieldData.errorText}
          >
            <Input
              {...passwordConfirmFieldData.fieldProps}
              placeholder={'Password confirm...'}
              isError={passwordConfirmFieldData.isError}
              type={'password'}
              disabled={registrationRequest.isLoading}
            />
          </FormField>

          <Button type={'submit'}>Submit</Button>
          <div>
            Already have an account? <Link to={routes.LOGIN}>SIGN IN</Link>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
}
