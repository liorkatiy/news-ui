import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { recentArticles } from 'src/app/store/actions/articleActions';
import { selectAllArticles } from 'src/app/store/selectors/articleSelector';
import { AppState } from 'src/app/store/States';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {
  articles$: Observable<Article[]>;
  displayedColumns: string[] = ['author','title', 'source',  'publishedAt'];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(recentArticles({ amount: 20 }));
    this.articles$ = this.store.select(selectAllArticles);
  }

  ngOnInit(): void {
  }

}
