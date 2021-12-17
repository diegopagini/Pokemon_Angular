import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'pok-list-grid',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() pokemons: Pokemon[];
  @Output() listEmitter = new EventEmitter<Pokemon>();

  updatePokemon(pokemon: Pokemon): void {
    this.listEmitter.emit(pokemon);
  }
}
