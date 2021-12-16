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
      img: 'https://www.baltana.com/files/wallpapers-1/Prey-Game-Lab-Wallpaper-01007.jpg',
    },
    {
      name: 'team',
      path: '/team',
      background_color: '#3BC751',
      img: 'https://pm1.narvii.com/6191/20f487a6f3c81adbaf5eb7a647f2758ada746837_hq.jpg',
    },
  ];
}
