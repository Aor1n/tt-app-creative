import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {Movies} from 'src/services/api/Movies';
import {Movie} from 'src/services/types';
import {MainLayout} from 'src/layouts/main';
import {MoviePlate} from 'src/components/movies/movie-plate';
import {ROUTES} from 'src/navigation/consts';
import {RootStackComponent} from 'src/navigation/list';

export const MoviesScreen: React.FC<RootStackComponent<ROUTES.MOVIES>> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = useCallback(async () => {
    const response = await Movies.fetchMovies();
    setMovies(response);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePlate {...movie} key={movie.id} />
        ))}
      </ScrollView>
    </MainLayout>
  );
};
