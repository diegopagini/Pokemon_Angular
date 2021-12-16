import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new BehaviorSubject<any>([]);
  private pokemonTeam$: Observable<Pokemon[]> = this.subject.asObservable();

  private customSubject = new BehaviorSubject<any>([]);
  private customPokemons$: Observable<any[]> =
    this.customSubject.asObservable();

  get pokemonTeam(): Observable<Pokemon[]> {
    return this.pokemonTeam$;
  }

  get customPokemons(): Observable<any[]> {
    return this.customPokemons$;
  }

  addToTeam(pokemon: Pokemon): void {
    const previousValue = this.subject.value;
    const updatedValue = [...previousValue, pokemon];
    this.subject.next(updatedValue);
  }

  createCustomPokemon(pokemon: any): void {
    const previousValue = this.customSubject.value;
    const updatedValue = [...previousValue, pokemon];
    this.customSubject.next(updatedValue);
  }
}
