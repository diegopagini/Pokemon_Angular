import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pok-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  @Output() navEmitter = new EventEmitter<boolean>();

  handleLinkClick(): void {
    this.navEmitter.emit();
  }
}
