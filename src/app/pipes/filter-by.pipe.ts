import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(pokemons: Pokemon[], searchText: string): Pokemon[] {
    if (!pokemons) {
      return [];
    }
    if (!searchText) {
      return pokemons;
    }
    searchText = searchText.toLowerCase();
    return pokemons.filter(pokemon => {
      return (pokemon.name.toLowerCase().includes(searchText)||
      pokemon.attack.toString().startsWith(searchText) ||
      pokemon.defense.toString().startsWith(searchText));
    });
  }
}
