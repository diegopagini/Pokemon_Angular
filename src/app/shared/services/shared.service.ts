import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new BehaviorSubject<any>([]);
  private pokemonTeam$: Observable<Pokemon[]> = this.subject.asObservable();

  get pokemonTeam(): Observable<Pokemon[]> {
    return this.pokemonTeam$;
  }

  addToTeam(pokemon: Pokemon) {
    const previousValue = this.subject.value;
    const updatedValue = [...previousValue, pokemon];
    this.subject.next(updatedValue);
  }
}
