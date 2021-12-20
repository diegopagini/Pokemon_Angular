import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'pok-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private sharedService: SharedService,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    this.pokemons$ = combineLatest([
      this.pokemonsService.pokemons$,
      this.sharedService.customPokemons,
    ]).pipe(
      map(([obs1, obs2]) => [...obs1, ...obs2]),
      map(this.sharedService.sortData),
      tap(console.log)
    );
  }

  searchPokemons(search: string): void {
    if (search.length > 0) {
      this.pokemons$ = combineLatest([
        this.pokemonsService.pokemons$,
        this.sharedService.customPokemons,
      ]).pipe(
        map(([obs1, obs2]) => [...obs1, ...obs2]),
        map((pokemons: Pokemon[]) =>
          pokemons.filter((pokemon: Pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          )
        ),
        map(this.sharedService.sortData)
      );
    } else {
      this.pokemons$ = combineLatest([
        this.pokemonsService.pokemons$,
        this.sharedService.customPokemons,
      ]).pipe(
        map(([obs1, obs2]) => [...obs1, ...obs2]),
        map(this.sharedService.sortData)
      );
    }
  }

  updateList(pokemon: Pokemon): void {
    this.pokemonsService.updatePokemonList(pokemon);
  }
}
