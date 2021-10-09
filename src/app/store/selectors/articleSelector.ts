import { createSelector } from '@ngrx/store';
import { AppState } from '../States';
import { AeticleState as ArticlesState } from '../States/articleState';


export const selectArticles = (state: AppState) => state.articles;

export const selectAllArticles = createSelector(
  selectArticles,
  (state: ArticlesState) => state.articles
);
