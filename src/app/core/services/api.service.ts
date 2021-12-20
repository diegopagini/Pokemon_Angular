import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetails } from 'src/app/modules/pokemons/models/pokemon-details.model';
import { environment } from 'src/environments/environment';
import { Pokemon, Result, ServiceResponse } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<ServiceResponse>(`/pokemon?limit=1000`)
      .pipe(map(this.transformData));
  }

  getPokemon(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`/pokemon/${id}`);
  }

  private transformData(resp: ServiceResponse): Pokemon[] {
    const pokemonList: Pokemon[] = resp.results.map((poke: Result) => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `${environment.picUrl}/${id}.png`;

      return {
        id,
        pic,
        name: poke.name,
        inTeam: false,
        notCustom: true,
      };
    });

    return pokemonList;
  }
}
