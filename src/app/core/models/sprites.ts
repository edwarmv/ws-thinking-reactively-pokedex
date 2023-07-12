import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

export class Sprites {
  constructor(public frontDefault: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class SpritesAdapter implements Adapter<Sprites> {
  adapt(item: any): Sprites {
    return new Sprites(item['front_default']);
  }
}
