import React from 'react';
import {useController, UseFormReturn} from 'react-hook-form';

import {LoginFormValues} from 'src/screens/login/useLoginForm';
import {TextField} from 'src/components/common/text-field';

interface PasswordFieldProps {
  form: UseFormReturn<LoginFormValues>;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({form}) => {
  const {field} = useController({
    name: 'password',
    control: form.control,
  });

  return (
    <TextField
      label={'Password'}
      value={field.value}
      onChangeText={e => field.onChange(e)}
      secureTextEntry
    />
  );
};
