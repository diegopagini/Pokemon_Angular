import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [CommonModule, ListModule, CardModule, SpinnerModule],
  exports: [ListModule, CardModule, SpinnerModule],
})
export class ComponentsModule {}
