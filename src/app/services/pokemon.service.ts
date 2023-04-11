import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public apiUrl = 'https://bp-pokemons.herokuapp.com/';
  private apiCondition = false;
  public pokemons: Pokemon[] = [
    { id: 1, name: 'Ivysaur', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 60, defense: 35 },
    { id: 2, name: 'Charizard', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 84, defense: 78 },
  ];

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    if (this.apiCondition) {
      return this.http.get<Pokemon[]>(this.apiUrl + '?idAuthor=1');
    } else {
      return of(this.pokemons);
    }
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    if (this.apiCondition) {
      return this.http.post<Pokemon>(this.apiUrl, pokemon);
    } else {
      pokemon.id = this.generateId();
      this.pokemons.push(pokemon);
      return of(pokemon);
    }
  }

  //Not in use, because the UI/UX is not logic with this.
  getPokemonById(id: number): Observable<Pokemon> {
    const apiUrl = `${this.apiUrl} + ${id}`;
    return this.http.get<Pokemon>(apiUrl);
  }
  

  updatePokemon(pokemon: Pokemon): Observable<any> {
    if (this.apiCondition) {
      return this.http.put<any>(this.apiUrl + '/' + pokemon.id, pokemon);
    } else {
      const index = this.pokemons.findIndex(p => p.id === pokemon.id);
      this.pokemons[index] = pokemon;
      return of(null);
    }
  }

  deletePokemon(pokemon: Pokemon): Observable<any> {
    if (this.apiCondition) {
      return this.http.delete<any>(this.apiUrl + '/' + pokemon.id);
    } else {
      const index = this.pokemons.findIndex(p => p.id === pokemon.id);
      this.pokemons.splice(index, 1);
      return of(null);
    }
  }

  private generateId(): number {
    return Math.max(...this.pokemons.map(p => p.id)) + 1;
  }

}
