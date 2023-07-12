import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { Sprites, SpritesAdapter } from './sprites';

export class Pokemon {
  constructor(
    public name: string,
    public order: number,
    public sprites: Sprites,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class PokemonAdapter implements Adapter<Pokemon> {
  constructor(private _spritesAdapter: SpritesAdapter) {}

  adapt(item: any): Pokemon {
    return new Pokemon(
      item['name'],
      item['order'],
      this._spritesAdapter.adapt(item['sprites']),
    );
  }
}
