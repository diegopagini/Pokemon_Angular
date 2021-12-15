import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonDetails } from 'src/app/modules/pokemons/models/pokemon-details.model';

@Component({
  selector: 'pok-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemon$: Observable<PokemonDetails>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pokemon$ = this.apiService.getPokemon(this.pokemon.id);
  }
}
