import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
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

  removeFromTeam(pokemonToRemove: Pokemon): void {
    this.pokemonTeam$.pipe(take(1)).subscribe((pokemons: Pokemon[]) => {
      const newList = pokemons.filter(
        (pokemon: Pokemon) => pokemon.id !== pokemonToRemove.id
      );
      this.subject.next(newList);
    });
  }

  createCustomPokemon(pokemon: any): void {
    const previousValue = this.customSubject.value;
    const updatedValue = [...previousValue, pokemon];
    this.customSubject.next(updatedValue);
  }
}
