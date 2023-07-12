import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

export class Result {
  constructor(
    public name: string,
    public url: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ResultProvider implements Adapter<Result> {
  adapt(item: any): Result {
    return new Result(item['name'], item['url']);
  }
}
