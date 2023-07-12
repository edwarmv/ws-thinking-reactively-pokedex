import { Routes } from '@angular/router';
import { PokedexListComponent } from './pages/components/pokedex-list/pokedex-list.component';
import { PokemonDetailsComponent } from './pages/components/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', component: PokedexListComponent },
  { path: ':id', component: PokemonDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
