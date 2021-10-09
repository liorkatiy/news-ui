import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private API_PATH = 'https://localhost:5001';

  constructor(private http: HttpClient) {}

  getLatestNews(amount: number): Observable<Article[]> {
    return this.http.get<Article[]>(
      `${this.API_PATH}/articles?amount=${amount}`
    );
  }

  getNewsSearch(search: string, searchType: string): Observable<Article[]> {
    return this.http.get<Article[]>(
      `${this.API_PATH}/articles/${searchType}?${searchType}=${search}&amount=10`
    );
  }
}
