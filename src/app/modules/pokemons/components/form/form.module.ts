import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPokemonComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [FormPokemonComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [FormPokemonComponent],
})
export class FormPokemonModule {}
