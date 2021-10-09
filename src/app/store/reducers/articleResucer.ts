import { Action, createReducer, on, State } from '@ngrx/store';
import * as ArticleActions from '../actions/articleActions';
import { AeticleState,initialState } from '../States/articleState';

export const articleReducer = createReducer(
  initialState,
  on(ArticleActions.articlesRecived, (state, action) => ({
    ...state,
    articles: action.articles,
  }))
);

export function reducer(state: AeticleState | undefined, action: Action) {
  return articleReducer(state, action);
}
