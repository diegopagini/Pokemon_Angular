import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private subject = new BehaviorSubject<Pokemon[]>([]);
  pokemons$: Observable<Pokemon[]> = this.subject.asObservable();

  constructor(private apiService: ApiService) {
    this.apiService
      .getAllPokemons()
      .subscribe((pokemons: Pokemon[]) => this.subject.next(pokemons));
  }

  updatePokemonList(pokemon: Pokemon): void {
    const previousValue = this.subject.value;
    const updatedValue = [...previousValue, pokemon];
    this.subject.next(updatedValue);
  }
}
