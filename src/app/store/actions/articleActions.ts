import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/article';

export const recentArticles = createAction(
  '[Article api get recent]',
  props<{ amount: number }>()
);

export const searchArticles = createAction(
  '[Article Search]',
  props<{ searchType:string,search:string }>()
);


export const articlesRecived = createAction(
  '[Article Received]',
  props<{ articles: Article[] }>()
);
