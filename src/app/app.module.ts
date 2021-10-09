import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

import { AppComponent } from './app.component';

import * as reducers from './store/reducers';
import { ArticleEffects } from './store/effects/article.effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsGridComponent } from './components/news-grid/news-grid.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatInputModule } from '@angular/material/input';
import { SearchButtonComponent } from './components/search-button/search-button/search-button.component';

@NgModule({
  declarations: [AppComponent, NewsGridComponent, SearchButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forRoot({ articles: reducers.articleReducer }),
    EffectsModule.forRoot([ArticleEffects]),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
