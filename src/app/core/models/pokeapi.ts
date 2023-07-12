import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { Result, ResultProvider } from './result';

export class PokeAPI {
  constructor(
    public count: number,
    public next: string | null,
    public previous: string | null,
    public results: Result[],
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class PokeAPIAdapter implements Adapter<PokeAPI> {
  constructor(private _resultProvider: ResultProvider) {}

  adapt(item: any): PokeAPI {
    const results: Result[] = item['results'].map((value: any) =>
      this._resultProvider.adapt(value),
    );
    return new PokeAPI(item['count'], item['next'], item['previous'], results);
  }
}
