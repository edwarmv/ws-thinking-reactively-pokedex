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
  pokemons$ = this._pokeapiService.getPokemons().pipe(
    combineLatestWith(this.term$),
    map(([pokemons, term]) =>
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term ? term.toLowerCase() : ''),
      ),
    ),
  );
}
