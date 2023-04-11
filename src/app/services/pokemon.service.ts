import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Pokemon[] = [
    { id: 1, name: 'Ivysaur', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 60, defense: 35 },
    { id: 2, name: 'Charizard', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 84, defense: 78 },
    { id: 3, name: 'Blastoise', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 83, defense: 100 },
    { id: 4, name: 'Pikachu', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 55, defense: 40 },
    { id: 5, name: 'Snorlax', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 110, defense: 65 },
  ];

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of(this.pokemons);
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    pokemon.id = this.generateId();
    this.pokemons.push(pokemon);
    return of(pokemon);
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    const index = this.pokemons.findIndex(p => p.id === pokemon.id);
    this.pokemons[index] = pokemon;
    return of(null);
  }

  deletePokemon(pokemon: Pokemon): Observable<any> {
    const index = this.pokemons.findIndex(p => p.id === pokemon.id);
    this.pokemons.splice(index, 1);
    return of(null);
  }

  private generateId(): number {
    return Math.max(...this.pokemons.map(p => p.id)) + 1;
  }

}
