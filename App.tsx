import React from 'react';
import {AppNavigator} from 'src/navigation/AppNavigator';
import {AuthWrapper} from 'src/context/auth/useAuthContext';

const App = () => {
  return (
    <AuthWrapper>
      <AppNavigator />
    </AuthWrapper>
  );
};

export default App;
