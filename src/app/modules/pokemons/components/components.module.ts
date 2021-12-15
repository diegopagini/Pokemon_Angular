import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsModule } from './details/details.module';

@NgModule({
  imports: [CommonModule, PokemonDetailsModule],
  exports: [PokemonDetailsModule],
})
export class ComponentsModule {}
