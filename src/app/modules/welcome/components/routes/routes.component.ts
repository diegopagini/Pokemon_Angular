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
      path: '/pokemons/list',
      background_color: '#C8C353',
      img: 'https://www.xtrafondos.com/wallpapers/pokebolas-6892.jpg',
    },
    {
      name: 'form',
      path: '/pokemons/form',
      background_color: '#d32828',
      img: 'https://www.labnetinternational.com/sites/www.labnetinternational.com/files/blogsies/header-images/iStock-949946968.jpg',
    },
    {
      name: 'team',
      path: '/pokemons/team',
      background_color: '#3BC751',
      img: 'https://pm1.narvii.com/6191/20f487a6f3c81adbaf5eb7a647f2758ada746837_hq.jpg',
    },
  ];
}
