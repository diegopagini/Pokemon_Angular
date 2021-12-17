import { Component } from '@angular/core';

@Component({
  selector: 'pok-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  opened: boolean;

  showSideNav(event: boolean): void {
    this.opened = event;
  }
}
