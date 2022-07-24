import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Movies} from 'src/services/api/Movies';
import {MovieComment} from 'src/services/types';
import {MainLayout} from 'src/layouts/main';
import {MovieCommentMessage} from 'src/screens/movie-comments/components/message';
import {SendMessage} from 'src/screens/movie-comments/components/send-message';
import {useSendMovieComment} from 'src/screens/movie-comments/useSendMovieComment';
import {RootStackComponent} from 'src/navigation/list';
import {ROUTES} from 'src/navigation/consts';

export const MovieCommentsScreen: React.FC<
  RootStackComponent<ROUTES.MOVIE_COMMENTS>
> = ({route}) => {
  const movieId = route.params?.movieId;

  const getMovieComments = useCallback(async () => {
    const response = await Movies.fetchMovieComments({movieId});
    setMovieComments(response);
  }, [movieId]);

  const {form, handleSubmit} = useSendMovieComment({
    movieId,
    onSuccessfulSubmit: getMovieComments,
  });

  const [movieComments, setMovieComments] = useState<MovieComment[]>([]);

  useEffect(() => {
    getMovieComments();
  }, [getMovieComments]);

  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {movieComments ? (
            movieComments.map(({message, id}) => (
              <MovieCommentMessage message={message} key={id} />
            ))
          ) : (
            <Text>No comments yet.</Text>
          )}
        </View>
      </ScrollView>
      <SendMessage form={form} handleSubmit={handleSubmit} />
    </MainLayout>
  );
};
