import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  searchTerm: string = '';
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null;

  constructor(private pokemonService: PokemonService) { 

    this.selectedPokemon = null;
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

  save(): void {
    // if (this.selectedPokemon.id) {
    //   this.pokemonService.updatePokemon(this.selectedPokemon).subscribe(() => this.selectedPokemon = null);
    // } else {
    //   this.pokemonService.addPokemon(this.selectedPokemon).subscribe(() => this.selectedPokemon = null);
    // }
  }

  cancel(): void {
    this.selectedPokemon = null;
  }

}
