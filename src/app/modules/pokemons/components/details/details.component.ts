import { Component, Input } from '@angular/core';
import { PokemonDetails } from '../../models/pokemon-details.model';

@Component({
  selector: 'pok-pokemon-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() pokemon: PokemonDetails;
}
