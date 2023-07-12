import { Routes } from '@angular/router';
import { PokedexListComponent } from './pages/components/pokedex-list/pokedex-list.component';

export const routes: Routes = [
  { path: '', component: PokedexListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
