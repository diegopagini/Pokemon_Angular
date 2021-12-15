import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule],
})
export class FormModule {}
