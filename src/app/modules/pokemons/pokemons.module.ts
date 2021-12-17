import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [PokemonsComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    ComponentsModule,
    MaterialModule,
    DirectivesModule,
  ],
})
export class PokemonsModule {}
