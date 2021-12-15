import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, Result, ServiceResponse } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    // TODO: utilizar interceptor
    return this.http
      .get<ServiceResponse>(`${environment.baseUrl}/pokemon?limit=1000`)
      .pipe(map(this.transformData));
  }

  private transformData(resp: ServiceResponse): Pokemon[] {
    const pokemonList: Pokemon[] = resp.results.map((poke: Result) => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return {
        id,
        pic,
        name: poke.name,
      };
    });

    return pokemonList;
  }
}
