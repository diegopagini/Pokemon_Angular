import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, ComponentsModule],
})
export class FormModule {}
