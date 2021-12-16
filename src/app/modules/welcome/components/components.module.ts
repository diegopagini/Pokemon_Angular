import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  imports: [CommonModule, RoutesModule],
  exports: [RoutesModule],
})
export class WelcomeComponentsModule {}
