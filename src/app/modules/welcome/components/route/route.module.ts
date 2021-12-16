import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RouteComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RouteComponent],
})
export class RouteModule {}
