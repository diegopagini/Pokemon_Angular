import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'pok-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon: Pokemon;
  @Input() inTeam: boolean = false;

  constructor(private router: Router, private sharedService: SharedService) {}

  addToTeam(): void {
    this.pokemon.inTeam = !this.pokemon.inTeam;
    if (this.pokemon.inTeam) {
      this.sharedService.addToTeam(this.pokemon);
    }
  }

  seeDetails(): void {
    this.router.navigate(['pokemons/details', this.pokemon.id]);
  }
}
