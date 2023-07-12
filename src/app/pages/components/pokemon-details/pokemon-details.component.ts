import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@Component({
  selector: 'ed-pokemon-details',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {
  pekemonId$: Observable<number> = this._route.paramMap.pipe(
    map((value) => Number(value.get('id'))),
  );
  pokemon$: Observable<Pokemon> = this.pekemonId$.pipe(
    switchMap((id) => this._pokeapiService.getPokemon(id)),
  );
  constructor(
    private _route: ActivatedRoute,
    private _pokeapiService: PokeapiService,
  ) {
    this._route.paramMap.subscribe(console.log);
  }
}
