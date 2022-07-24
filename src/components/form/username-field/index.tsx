import React from 'react';
import {useController, UseFormReturn} from 'react-hook-form';

import {LoginFormValues} from 'src/screens/login/useLoginForm';
import {TextField} from 'src/components/common/text-field';

interface UsernameFieldProps {
  form: UseFormReturn<LoginFormValues>;
}
export const UsernameField: React.FC<UsernameFieldProps> = ({form}) => {
  const {field} = useController({
    name: 'username',
    control: form.control,
  });

  return (
    <TextField
      label={'Username'}
      value={field.value}
      onChangeText={e => field.onChange(e)}
    />
  );
};
