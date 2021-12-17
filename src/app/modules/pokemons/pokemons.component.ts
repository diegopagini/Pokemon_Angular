import { Component } from '@angular/core';

@Component({
  selector: 'pok-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  opened: boolean;

  showSideNav(event: boolean): void {
    this.opened = event;
  }
}
