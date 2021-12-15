import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
}
