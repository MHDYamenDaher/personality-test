/* eslint-disable import/prefer-default-export */
import getQuery from '../../utilities/query';
import { questions } from '../../api';

const queryClient = getQuery();

export const ALL_QUESTIONS = 'questions.allQuestions';

queryClient.setQueryDefaults(ALL_QUESTIONS, {
  queryFn: () => questions.allQuestions(),
});