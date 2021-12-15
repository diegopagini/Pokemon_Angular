import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  imports: [CommonModule, LoginFormModule],
  exports: [LoginFormModule],
})
export class ComponentsModule {}
