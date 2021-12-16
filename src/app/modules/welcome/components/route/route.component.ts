import { Component, Input } from '@angular/core';

@Component({
  selector: 'pok-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent {
  @Input() route: any;
}
