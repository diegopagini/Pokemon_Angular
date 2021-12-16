import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { RouteModule } from '../route/route.module';

@NgModule({
  declarations: [RoutesComponent],
  imports: [CommonModule, MaterialModule, RouterModule, RouteModule],
  exports: [RoutesComponent],
})
export class RoutesModule {}
