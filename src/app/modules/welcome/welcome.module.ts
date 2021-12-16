import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { WelcomeComponentsModule } from './components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ComponentsModule,
    WelcomeComponentsModule,
  ],
})
export class WelcomeModule {}
