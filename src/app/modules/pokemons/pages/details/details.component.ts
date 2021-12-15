import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonDetails } from '../../models/pokemon-details.model';

@Component({
  selector: 'pok-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemon$: Observable<PokemonDetails>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon$ = this.apiService.getPokemon(
      this.route.snapshot.params['id'].toString()
    );
  }
}
