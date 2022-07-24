import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Movie} from 'src/services/types';
import {MovieFeature} from 'src/components/movies/movie-plate/components/movie-feature';
import {globalStyles} from 'src/styles/globalStyles';
import {ROUTES} from 'src/navigation/consts';

export const MoviePlate = ({
  id,
  title,
  posterUrl,
  year,
  duration,
  rating,
}: Movie) => {
  const navigation = useNavigation();

  const navigateToMovieAndPassId = () =>
    navigation.navigate(ROUTES.MOVIE, {movieId: id.toString()});

  const movieFeatures = [
    {featureTitle: 'Title', featureValue: title},
    {featureTitle: 'Year', featureValue: year},
    {featureTitle: 'Duration', featureValue: duration},
    {featureTitle: 'Rating', featureValue: rating},
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={navigateToMovieAndPassId}>
        <Image source={{uri: posterUrl}} style={styles.image} />
        <View style={styles.movieFeaturesContainer}>
          {movieFeatures.map(movieFeature => (
            <MovieFeature
              {...movieFeature}
              key={movieFeature.featureTitle + movieFeature.featureValue}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 8,
    marginHorizontal: -globalStyles.defaultMargin,
    paddingHorizontal: 30,
  },
  image: {
    width: 44,
    height: 70,
  },
  movieFeaturesContainer: {
    flex: 1,
    marginLeft: 18,
  },
});
