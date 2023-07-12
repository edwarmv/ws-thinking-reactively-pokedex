import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { PokemonCardComponent } from 'src/app/shared/components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { SortBtnComponent } from 'src/app/shared/components/sort-btn/sort-btn.component';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatestWith, map, startWith } from 'rxjs';

@Component({
  selector: 'ed-pokedex-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
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
  private _pokeapiService = inject(PokeapiService);

  searchControl = new FormControl('');
  term$ = this.searchControl.valueChanges.pipe(startWith(''));

  sortByControl = new FormControl('none', { nonNullable: true });
  sortBy$ = this.sortByControl.valueChanges.pipe(startWith('none'));

  pokemons$ = this._pokeapiService.getPokemons();

  filteredPokemons$ = this.pokemons$.pipe(
    combineLatestWith(this.term$, this.sortBy$),
    map(([pokemons, term, sortBy]) =>
      pokemons
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(term ? term.toLowerCase() : ''),
        )
        .sort((value1, value2) => {
          if (sortBy === 'name') {
            return value1.name.toUpperCase() > value2.name.toUpperCase()
              ? 1
              : value1.name.toUpperCase() < value2.name.toUpperCase()
              ? -1
              : 0;
          }
          if (sortBy === 'order') {
            return value1.order < value2.order
              ? 1
              : value1.order > value2.order
              ? -1
              : 0;
          }
          return 0;
        }),
    ),
  );
}
