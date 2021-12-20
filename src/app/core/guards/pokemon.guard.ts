import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PokemonsService } from 'src/app/modules/pokemons/services/pokemons.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonGuard implements CanActivate {
  constructor(
    private router: Router,
    private pokemonService: PokemonsService
  ) {}

  canActivate(): boolean {
    if (this.pokemonService.canNav) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
