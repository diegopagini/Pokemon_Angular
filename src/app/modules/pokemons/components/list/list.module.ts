import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, MaterialModule, CardModule],
  exports: [ListComponent],
})
export class ListModule {}
