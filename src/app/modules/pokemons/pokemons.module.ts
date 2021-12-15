import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';

@NgModule({
  imports: [CommonModule, PokemonsRoutingModule],
  declarations: [
    PokemonsComponent
  ],
})
export class PokemonsModule {}
