import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [DetailsComponent],
})
export class PokemonDetailsModule {}
