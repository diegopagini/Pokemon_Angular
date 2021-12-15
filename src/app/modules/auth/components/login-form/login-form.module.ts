import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
