import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'pok-pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormPokemonComponent implements OnInit {
  @ViewChild('img') img: ElementRef;
  @ViewChild('createForm') createForm: NgForm;
  image: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * 10) + 1000],
      name: ['', [Validators.required]],
      height: [null, [Validators.required, Validators.min(1)]],
      weight: [null, [Validators.required, Validators.min(1)]],
      pic: ['', [Validators.required]],
      inTeam: [false],
      upload: [''],
    });
  }

  handleClick(): void {
    this.img.nativeElement.click();
  }

  uploadImg(path: string): void {
    if (path) {
      let newPath = path
        .replace(/\\/g, '')
        .replace('fakepath', '/assets/img/')
        .replace('C:', '');

      this.form.get('pic')?.setValue(newPath);
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.sharedService.createCustomPokemon(this.form.value);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${this.form.get('name')?.value} created`,
        showConfirmButton: false,
        timer: 2000,
      });
      // This is used to reset form because an issue of angular material.
      this.createForm.resetForm();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
