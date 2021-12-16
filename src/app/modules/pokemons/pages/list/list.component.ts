import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'pok-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pokemons$ = this.apiService.getAllPokemons();
  }

  searchPokemons(search: string): void {
    if (search.length > 0) {
      this.pokemons$ = this.apiService
        .getAllPokemons()
        .pipe(
          map((pokemons: Pokemon[]) =>
            pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(search))
          )
        );
    } else {
      this.pokemons$ = this.apiService.getAllPokemons();
    }
  }
}
