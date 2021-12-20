import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonGuard } from 'src/app/core/guards/pokemon.guard';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./pages/form/form.module').then((m) => m.FormModule),
      },
      {
        path: 'details/:id',
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
        canActivate: [PokemonGuard],
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./pages/team/team.module').then((m) => m.TeamModule),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
