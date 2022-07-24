import React from 'react';

import {useLoginForm} from 'src/screens/login/useLoginForm';
import {MainLayout} from 'src/layouts/main';
import {PasswordField} from 'src/components/form/password-field';
import {UsernameField} from 'src/components/form/username-field';
import {Button} from 'src/components/common/button';
import {ROUTES} from 'src/navigation/consts';
import {RootStackComponent} from 'src/navigation/list';

export const LogInScreen: React.FC<RootStackComponent<ROUTES.LOG_IN>> = () => {
  const {handleSubmit, form} = useLoginForm();

  return (
    <MainLayout>
      <UsernameField form={form} />
      <PasswordField form={form} />
      <Button text={'Sign In'} onPress={handleSubmit} />
    </MainLayout>
  );
};
