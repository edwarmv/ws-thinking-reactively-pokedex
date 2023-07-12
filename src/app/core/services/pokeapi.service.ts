import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, mergeMap, mergeScan, of, tap } from 'rxjs';
import { PokeAPIAdapter } from '../models/pokeapi';
import { Result } from '../models/result';
import { Pokemon, PokemonAdapter } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(
    private _http: HttpClient,
    private _pokeapiAdapter: PokeAPIAdapter,
    private _pokemonAdapter: PokemonAdapter,
  ) {}

  getPokemons(): Observable<Pokemon[]> {
    return this._http.get('https://pokeapi.co/api/v2/pokemon').pipe(
      mergeMap((value) => {
        const pokeapi = this._pokeapiAdapter.adapt(value);
        return from(pokeapi.results).pipe(
          mergeScan<Result, Pokemon[]>(
            (acc, value) =>
              this._http.get(value.url).pipe(
                map((value) => this._pokemonAdapter.adapt(value)),
                map((value) => {
                  acc.push(value);
                  return acc;
                }),
              ),
            [],
          ),
        );
      }),
    );
  }
}
