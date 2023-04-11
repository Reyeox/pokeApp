import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from './pokemon-list.component';
import { FilterByPipe } from 'src/app/pipes/filter-by.pipe';
import { FormsModule } from '@angular/forms';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonServiceStub: Partial<PokemonService>;

  beforeEach(async () => {
    pokemonServiceStub = {
      getPokemons: () => of([{ id: 1, name: 'Ivysaur', attack: 60, defense: 35, img: '' }])
    };

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, FilterByPipe],
      imports: [FormsModule],
      providers: [{ provide: PokemonService, useValue: pokemonServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the list of pokemons on init', () => {
    expect(component.pokemons).toEqual([{ id: 1, name: 'Ivysaur', attack: 60, defense: 35, img: '' }]);
  });

  it('should select a pokemon', () => {
    const pokemon: Pokemon = { id: 1, name: 'Ivysaur', attack: 60, defense: 35, img: '' };
    component.onSelect(pokemon);
    expect(component.selectedPokemon).toEqual(pokemon);
  });

  // it('should delete a pokemon', () => {
  //   const pokemon: Pokemon = { id: 1, name: 'Ivysaur', attack: 60, defense: 35, img: '' };
  //   spyOn(component.pokemonService, 'deletePokemon').and.returnValue(of(null));
  //   component.delete(pokemon);
  //   expect(component.pokemons).toEqual([]);
  // });


});