/* eslint-disable import/prefer-default-export */
import getQuery from '../../utilities/query';
import { questions } from '../../api';

const queryClient = getQuery();

export const ALL_QUESTIONS = 'questions.allQuestions';

queryClient.setQueryDefaults(ALL_QUESTIONS, {
  queryFn: () => queryClient.getQueryData(ALL_QUESTIONS) || questions.allQuestions(),
  onSuccess: (result: any) => {
    const dataExists = queryClient.getQueryData(ALL_QUESTIONS);
    if (!dataExists) {
      queryClient.setQueryData(ALL_QUESTIONS, () => result);
    }
  },
});