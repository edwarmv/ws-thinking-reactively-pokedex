import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { Sprites, SpritesAdapter } from './sprites';

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public order: number,
    public sprites: Sprites,
    public weight: number,
    public height: number,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class PokemonAdapter implements Adapter<Pokemon> {
  constructor(private _spritesAdapter: SpritesAdapter) {}

  adapt(item: any): Pokemon {
    return new Pokemon(
      item['id'],
      item['name'],
      item['order'],
      this._spritesAdapter.adapt(item['sprites']),
      item['weight'],
      item['height'],
    );
  }
}
