import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchArticles } from 'src/app/store/actions/articleActions';
import { AppState } from 'src/app/store/States';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
  search = '';
  searchtype = 'author';
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}

  clickSearch() {
    this.store.dispatch(
      searchArticles({ search: this.search, searchType: this.searchtype })
    );
  }
}
