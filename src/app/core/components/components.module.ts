import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [FooterComponent, NavbarComponent],
})
export class ComponentsModule {}
