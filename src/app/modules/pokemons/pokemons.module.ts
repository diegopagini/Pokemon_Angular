import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  declarations: [PokemonsComponent],
  imports: [CommonModule, PokemonsRoutingModule, ComponentsModule],
})
export class PokemonsModule {}
