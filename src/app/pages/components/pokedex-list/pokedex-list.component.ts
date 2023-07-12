import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { PokemonCardComponent } from 'src/app/shared/components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { SortBtnComponent } from 'src/app/shared/components/sort-btn/sort-btn.component';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'ed-pokedex-list',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    IconComponent,
    SortBtnComponent,
    PokemonCardComponent,
  ],
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexListComponent {
  pokemons$ = this._pokeapiService.getPokemons();
  constructor(private _pokeapiService: PokeapiService) {}
}
