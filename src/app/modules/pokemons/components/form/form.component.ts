import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pok-pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormPokemonComponent implements OnInit {
  @ViewChild('img') img: ElementRef;
  image: string;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * 10) + 1000],
      name: ['', [Validators.required]],
      height: [null, [Validators.required, Validators.min(1)]],
      weight: [null, [Validators.required, Validators.min(1)]],
      image: ['', [Validators.required]],
      upload: ['', [Validators.required]],
    });
  }

  handleClick(): void {
    this.img.nativeElement.click();
  }

  uploadImg(event: string): void {
    if (event) {
      console.log(event);
      this.form.get('image')?.setValue(event);
    }
  }

  submit(): void {
    console.log(this.form.value);
  }
}
