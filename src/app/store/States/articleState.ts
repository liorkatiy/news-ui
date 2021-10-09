import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Article } from 'src/app/models/article';

export interface AeticleState {
  articles: Article[];
}

export const initialState: AeticleState = {
  articles: [],
};
