import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ROUTES} from 'src/navigation/consts';
import {Movie} from 'src/services/types';

export type RootStackParamList = {
  [ROUTES.LOG_IN]: undefined;
  [ROUTES.MOVIES]: undefined;
  [ROUTES.MOVIE]: {movieId: Movie['id']};
  [ROUTES.MOVIE_COMMENTS]: {movieId: Movie['id']};
};
export type RootStackComponent<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
