import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Anime } from './pages/anime/anime';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'anime', component: Anime }

];
