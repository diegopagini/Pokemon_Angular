import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'pok-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon: Pokemon;
  inTeam: boolean = false;

  constructor(private router: Router) {}

  addToTeam(): void {
    this.inTeam = !this.inTeam;
  }

  seeDetails(): void {
    this.router.navigate(['pokemons/details', this.pokemon.name]);
  }
}
