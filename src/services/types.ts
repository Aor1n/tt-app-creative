export interface Movie {
  id: number | string;
  title: string;
  posterUrl: string;
  year: number;
  duration: string;
  rating: string;
}

export interface MovieComment {
  id: string;
  movieId: string;
  message: string;
  createdAt: string;
}

export interface PostMovieComment
  extends Omit<MovieComment, 'id' | 'movieId' | 'createdAt'> {
  movieId: number | string;
}
