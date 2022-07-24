import {useCallback, useMemo} from 'react';
import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useAuthContext} from 'src/context/auth/useAuthContext';

export interface LoginFormValues {
  username: string;
  password: string;
}

interface UseLoginFormReturn {
  handleSubmit: ReturnType<UseFormHandleSubmit<LoginFormValues>>;
  form: UseFormReturn<LoginFormValues>;
}

const defaultValues: LoginFormValues = {
  username: 'dale@appcreative.com',
  password: 'Udt9TzzPwnednVV4',
};

const validation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export function useLoginForm(): UseLoginFormReturn {
  const authContext = useAuthContext();

  const form = useForm<LoginFormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validation),
  });

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      try {
        await authContext?.actions.signIn(values);
      } catch (e) {
        throw new Error('useLoginForm.handleSubmit');
      }
    },
    [authContext?.actions],
  );
  return useMemo(
    () => ({
      form,
      handleSubmit: form.handleSubmit(handleSubmit),
    }),
    [form, handleSubmit],
  );
}
