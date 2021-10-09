import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';
import { articlesRecived, recentArticles, searchArticles } from '../actions/articleActions';

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recentArticles),
      mergeMap(({ amount }) =>
        this.newsService.getLatestNews(amount).pipe(
          map((articles) => articlesRecived({ articles })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  searchArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchArticles),
      mergeMap(({ search,searchType }) =>
        this.newsService.getNewsSearch(search,searchType).pipe(
          map((articles) => articlesRecived({ articles })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
