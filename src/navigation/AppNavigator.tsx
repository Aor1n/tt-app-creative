import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';

import {LogInScreen} from 'src/screens/login';
import {MoviesScreen} from 'src/screens/movies';
import {MovieScreen} from 'src/screens/movie';
import {MovieCommentsScreen} from 'src/screens/movie-comments';
import {ROUTES} from 'src/navigation/consts';
import {RootStackParamList} from 'src/navigation/list';
import {useAuthContext} from 'src/context/auth/useAuthContext';

const screenOptions: StackHeaderOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'left',
  headerTintColor: '#242326',
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const authContext = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {authContext?.state.accessToken !== null ? (
          <>
            <Stack.Screen
              name={ROUTES.MOVIES}
              component={MoviesScreen}
              options={{
                title: 'Movies',
              }}
            />
            <Stack.Screen
              name={ROUTES.MOVIE}
              component={MovieScreen}
              options={{
                title: 'Movie',
              }}
            />
            <Stack.Screen
              name={ROUTES.MOVIE_COMMENTS}
              component={MovieCommentsScreen}
              options={{
                title: 'Movie Comments',
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name={ROUTES.LOG_IN}
            component={LogInScreen}
            options={{
              title: 'Log In',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
