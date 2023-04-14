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
  auxPoke: Pokemon | null;
  newPoke: Boolean = false;

  newPokemon: Pokemon;

  constructor(public pokemonService: PokemonService) { 

    this.selectedPokemon = null;
    this.newPokemon = {id: 0, name: "", attack: 0, defense: 0, img: ''};
    this.auxPoke = null;
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
    this.auxPoke = Object.assign({},pokemon);
    this.newPoke = false;
  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

  save(): void {
    if (this.selectedPokemon) {
        if (this.selectedPokemon.id) {
          this.pokemonService.updatePokemon(this.selectedPokemon).subscribe(() => this.selectedPokemon = null);
        } else {
          this.pokemonService.addPokemon(this.selectedPokemon).subscribe(() => {this.selectedPokemon = {id: 0, name: "", attack: 0, defense: 0, img: ''};});
        }
    }
}

saveNewPoke(): void{
  this.pokemonService.addPokemon(this.newPokemon).subscribe(() => {
    this.newPokemon = {id: 0, name: "", attack: 0, defense: 0, img: ''}; 
    this.newPoke = false;
    this.getPokemons();
  });

}


  cancel(): void {
    this.pokemons.forEach(el=>{
      if(this.auxPoke){
        if(el.id===this.auxPoke.id){
          el.img = this.auxPoke.img;
          el.attack = this.auxPoke.attack;
          el.name = this.auxPoke.name;
          el.defense = this.auxPoke.defense;
        }
      }
    });
    this.selectedPokemon = null;
    this.newPoke = false;
  }



}
