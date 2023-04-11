import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return a list of pokemons', () => {
  //   const mockPokemons: Pokemon[] = [
  //     { id: 1, name: 'Ivysaur', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 60, defense: 35 },
  //     { id: 2, name: 'Charizard', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 84, defense: 78 },
  //   ];

  //   service.getPokemons().subscribe((pokemons) => {
  //     expect(pokemons.length).toBe(2);
  //     expect(pokemons).toEqual(mockPokemons);
  //   });

  //   const req = httpMock.expectOne(`${service.apiUrl}?idAuthor=1`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockPokemons);
  // });

  // it('should add a new pokemon', () => {
  //   const newPokemon: Pokemon = { id: 1, name: 'Bulbasaur', img: 'bulbasaur.jpg', attack: 49, defense: 49 };

  //   service.addPokemon(newPokemon).subscribe((pokemon) => {
  //     expect(pokemon.id).not.toBeNull();
  //     expect(pokemon.name).toBe('Bulbasaur');
  //   });

  //   const req = httpMock.expectOne(service.apiUrl);
  //   expect(req.request.method).toBe('POST');
  //   req.flush({ ...newPokemon, id: 3 });
  // });

  // it('should update an existing pokemon', () => {
  //   const updatedPokemon: Pokemon = { id: 2, name: 'Charizard-X', img: 'https://img.pokemondb.net/sprites/home/normal/2x/charmander.jpg', attack: 100, defense: 100 };

  //   service.updatePokemon(updatedPokemon).subscribe(() => {
  //     expect(service.pokemons[1].name).toBe('Charizard-X');
  //   });

  //   const req = httpMock.expectOne(`${service.apiUrl}/2`);
  //   expect(req.request.method).toBe('PUT');
  //   req.flush({});
  // });

  // it('should delete an existing pokemon', () => {
  //   const pokemonToDelete: Pokemon = service.pokemons[0];

  //   service.deletePokemon(pokemonToDelete).subscribe(() => {
  //     expect(service.pokemons.length).toBe(1);
  //     expect(service.pokemons).not.toContain(pokemonToDelete);
  //   });

  //   const req = httpMock.expectOne(`${service.apiUrl}/1`);
  //   expect(req.request.method).toBe('DELETE');
  //   req.flush({});
  // });
});
