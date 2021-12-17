import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveSidenavDirective } from './responsive-sidenav.directive';

@NgModule({
  declarations: [ResponsiveSidenavDirective],
  imports: [CommonModule],
  exports: [ResponsiveSidenavDirective],
})
export class DirectivesModule {}
