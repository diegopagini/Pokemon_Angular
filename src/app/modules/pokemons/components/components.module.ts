import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsModule } from './details/details.module';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { SearchModule } from './search/search.module';
import { FormPokemonModule } from './form/form.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonDetailsModule,
    ListModule,
    CardModule,
    SearchModule,
    FormPokemonModule,
  ],
  exports: [
    PokemonDetailsModule,
    ListModule,
    CardModule,
    SearchModule,
    FormPokemonModule,
  ],
})
export class ComponentsModule {}
