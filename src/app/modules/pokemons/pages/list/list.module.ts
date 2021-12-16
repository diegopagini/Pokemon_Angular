import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    ComponentsModule,
    SharedComponentsModule,
  ],
})
export class ListModule {}
