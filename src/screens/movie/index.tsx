import React, {useCallback, useEffect, useState} from 'react';

import {Movie} from 'src/services/types';
import {MoviePlate} from 'src/components/movies/movie-plate';
import {Movies} from 'src/services/api/Movies';
import {MainLayout} from 'src/layouts/main';
import {MovieCast} from 'src/screens/movie/components/cast';
import {RootStackComponent} from 'src/navigation/list';
import {ROUTES} from 'src/navigation/consts';

export const MovieScreen: React.FC<RootStackComponent<ROUTES.MOVIE>> = ({
  route,
}) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);

  const movieId = route.params?.movieId;

  const getMovieInfo = useCallback(async () => {
    const response = await Movies.fetchMovieInfo({movieId});
    setMovie(response);
  }, [movieId]);

  useEffect(() => {
    getMovieInfo();
  }, [getMovieInfo]);

  return (
    <MainLayout>
      <MoviePlate {...movie} />
      <MovieCast movieId={movieId} />
    </MainLayout>
  );
};
