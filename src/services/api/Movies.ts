import {Api} from 'src/services/api/Api';
import {Movie, MovieComment, PostMovieComment} from 'src/services/types';

export class Movies {
  static async fetchMovies(): Promise<Movie[]> {
    try {
      const {data} = await Api.get('/Movies');

      return data;
    } catch (e) {
      throw new Error('Movies.fetchMovies');
    }
  }

  static async fetchMovieInfo({
    movieId,
  }: {
    movieId: Movie['id'];
  }): Promise<Movie> {
    try {
      const {data} = await Api.get(`/Movies/${movieId}/Info`);

      return data;
    } catch (e) {
      throw new Error('Movies.fetchMovieInfo');
    }
  }

  static async fetchMovieCast({
    movieId,
  }: {
    movieId: Movie['id'];
  }): Promise<string[]> {
    try {
      const {data} = await Api.get(`/Movies/${movieId}/Cast`);

      return data;
    } catch (e) {
      throw new Error('Movies.fetchMovieCast');
    }
  }

  static async fetchMovieComments({
    movieId,
  }: {
    movieId: Movie['id'];
  }): Promise<MovieComment[]> {
    try {
      const {data} = await Api.get(`/Movies/${movieId}/Comments`);

      return data.map(
        (comment: {
          id: string;
          movie_id: string;
          message: string;
          created_at: string;
        }): MovieComment => ({
          id: comment.id,
          movieId: comment.movie_id,
          message: comment.message,
          createdAt: comment.created_at,
        }),
      );
    } catch (e) {
      throw new Error('Movies.fetchMovieComments');
    }
  }

  static async postMovieComment({
    movieId,
    message,
  }: PostMovieComment): Promise<void> {
    try {
      const {data} = await Api.post(`/Movies/${movieId}/Comments/Post`, {
        message,
        movie_id: movieId,
      });

      return data;
    } catch (e) {
      throw new Error('Movies.postMovieComment');
    }
  }
}
