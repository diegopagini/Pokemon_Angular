import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'pok-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.pokemons$ = combineLatest(
      this.apiService.getAllPokemons(),
      this.sharedService.customPokemons
    ).pipe(map(([obs1, obs2]) => [...obs1, ...obs2]));
  }

  searchPokemons(search: string): void {
    if (search.length > 0) {
      this.pokemons$ = combineLatest(
        this.apiService.getAllPokemons(),
        this.sharedService.customPokemons
      ).pipe(
        map(([obs1, obs2]) => [...obs1, ...obs2]),
        map((pokemons: Pokemon[]) =>
          pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(search))
        )
      );
    } else {
      this.pokemons$ = combineLatest(
        this.apiService.getAllPokemons(),
        this.sharedService.customPokemons
      ).pipe(map(([obs1, obs2]) => [...obs1, ...obs2]));
    }
  }
}
