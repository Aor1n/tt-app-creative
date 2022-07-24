import {useCallback, useMemo} from 'react';
import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Movie, MovieComment} from 'src/services/types';
import {Movies} from 'src/services/api/Movies';

export interface SendMovieCommentValue {
  message: MovieComment['message'];
}

interface UseSendMovieCommentProps {
  onSuccessfulSubmit(): void;
  movieId: Movie['id'];
}

export interface UseSendMovieCommentReturn {
  handleSubmit: ReturnType<UseFormHandleSubmit<SendMovieCommentValue>>;
  form: UseFormReturn<SendMovieCommentValue>;
}

const defaultValues: SendMovieCommentValue = {
  message: '',
};

const validation = yup.object({
  message: yup.string().required(),
});

export function useSendMovieComment({
  movieId,
  onSuccessfulSubmit,
}: UseSendMovieCommentProps): UseSendMovieCommentReturn {
  const form = useForm<SendMovieCommentValue>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validation),
  });

  const resetMessage = form.reset;

  const handleSubmit = useCallback(
    async ({message}: SendMovieCommentValue) => {
      try {
        await Movies.postMovieComment({movieId, message});

        onSuccessfulSubmit();

        resetMessage(defaultValues);
      } catch (e) {
        throw new Error('useSendMovieComment.handleSubmit');
      }
    },
    [movieId, onSuccessfulSubmit, resetMessage],
  );
  return useMemo(
    () => ({
      form,
      handleSubmit: form.handleSubmit(handleSubmit),
    }),
    [form, handleSubmit],
  );
}
