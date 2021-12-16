import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'pok-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.pokemons$ = this.sharedService.pokemonTeam;
  }
}
