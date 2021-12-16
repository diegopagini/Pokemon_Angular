import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${this.pokemon.name} added to team`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: `${this.pokemon.name} removed from team`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  seeDetails(): void {
    this.router.navigate(['pokemons/details', this.pokemon.id]);
  }
}
