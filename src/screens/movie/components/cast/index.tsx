import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Movie} from 'src/services/types';
import {Movies} from 'src/services/api/Movies';
import {Button} from 'src/components/common/button';
import {colors} from 'src/styles/colors';
import {ROUTES} from 'src/navigation/consts';

interface MovieCastProps {
  movieId: Movie['id'];
}

export const MovieCast: React.FC<MovieCastProps> = ({movieId}) => {
  const [movieCast, setMovieCast] = useState<string[]>([]);

  const navigation = useNavigation();

  const navigateToCommentsAndPassId = () =>
    navigation.navigate(ROUTES.MOVIE_COMMENTS, {
      movieId,
    });

  const getMovieCast = useCallback(async () => {
    const response = await Movies.fetchMovieCast({movieId});
    setMovieCast(response);
  }, [movieId]);

  useEffect(() => {
    getMovieCast();
  }, [getMovieCast]);
  return (
    <View>
      <Text style={styles.label}>Cast:</Text>
      <Text>{movieCast.join(', ')}</Text>
      <Button text={'Show comments'} onPress={navigateToCommentsAndPassId} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.label,
    fontWeight: '600',
  },
});
