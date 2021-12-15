import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DetailsComponent],
})
export class PokemonDetailsModule {}
