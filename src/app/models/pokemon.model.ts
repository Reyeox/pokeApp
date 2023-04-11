export class Pokemon {
    id: number;
    name: string;
    img: string;
    attack: number;
    defense: number;
  
    constructor(id: number, name: string, img: string, attack: number, defense: number) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.attack = attack;
      this.defense = defense;
    }
  }
  