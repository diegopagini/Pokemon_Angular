import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [CommonModule, ListModule, CardModule, SpinnerModule, SearchModule],
  exports: [ListModule, CardModule, SpinnerModule, SearchModule],
})
export class ComponentsModule {}
