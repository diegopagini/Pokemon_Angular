import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [CommonModule, SpinnerModule],
  exports: [SpinnerModule],
})
export class SharedComponentsModule {}
