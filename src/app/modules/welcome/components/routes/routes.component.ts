import { Component } from '@angular/core';

@Component({
  selector: 'pok-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent {
  routes: any[] = [
    {
      name: 'list',
      path: '/list',
      background_color: '#C8C353',
      img: 'https://cdn.wallpapersafari.com/46/95/9UWjzM.jpg',
    },
    {
      name: 'form',
      path: '/form',
      background_color: '#FE1111',
      img: 'https://www.labnetinternational.com/sites/www.labnetinternational.com/files/blogsies/header-images/iStock-949946968.jpg',
    },
    {
      name: 'team',
      path: '/team',
      background_color: '#3BC751',
      img: 'https://pm1.narvii.com/6191/20f487a6f3c81adbaf5eb7a647f2758ada746837_hq.jpg',
    },
  ];
}
