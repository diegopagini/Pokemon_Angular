import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { NavigateGuard } from './core/guards/navigate.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canDeactivate: [LoginGuard],
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
    canActivate: [NavigateGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [NavigateGuard],
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
