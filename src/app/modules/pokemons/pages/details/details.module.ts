import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedComponentsModule,
    ComponentsModule,
  ],
})
export class DetailsModule {}
