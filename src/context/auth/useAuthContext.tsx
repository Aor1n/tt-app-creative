import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import AsyncStorageService from 'src/services/AsyncStorageService';
import {Api} from 'src/services/api/Api';
import {capitalizeFirstLetter} from 'src/utils/capitalizeFirstLetter';
import {AuthContextProps} from 'src/context/auth/types';

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthWrapper({children}: AuthWrapperProps) {
  const [state, dispatch] = useReducer(
    (prevState: any, action: {type: string; token?: string}) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          if (action.token) {
            Api.getAxios().defaults.headers.common.Authorization = `Bearer ${action.token}`;
          }

          return {
            ...prevState,
            accessToken: action.token || null,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            accessToken: action.token,
          };
      }
    },
    {
      accessToken: null,
    },
  );

  useEffect(() => {
    // Note: Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const authData = await AsyncStorageService.getAuthData();

        dispatch({type: 'RESTORE_TOKEN', token: authData?.accessToken});
      } catch (e) {
        throw new Error('Token failed');
      }
    };

    bootstrapAsync();
  }, []);

  const actions = useMemo(
    () => ({
      signIn: async (params: FormData | Record<string, any>): Promise<void> => {
        // Note: In this function, we need to send some data (username, password and grant_type) to server and get a token

        try {
          const {data} = await Api.post('/Login', {
            ...params,
            grant_type: 'password',
          });

          await AsyncStorageService.setAuthData({
            accessToken: data.access_token,
            tokenType: capitalizeFirstLetter(data.token_type),
            expiresIn: data.expires_in,
          });

          dispatch({type: 'SIGN_IN', token: data.accessToken});
        } catch (e) {
          throw new Error('authContext.signIn');
        }
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={{state, actions}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
