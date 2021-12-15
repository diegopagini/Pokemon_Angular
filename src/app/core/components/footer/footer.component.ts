import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pok-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  date: Date;

  ngOnInit(): void {
    this.date = new Date();
  }
}
