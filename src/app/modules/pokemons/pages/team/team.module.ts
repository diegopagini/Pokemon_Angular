import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, TeamRoutingModule, ComponentsModule],
})
export class TeamModule {}
