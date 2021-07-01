import {attaques} from './attaques.js';

class Pokemon {
  constructor(nom, numero, poids, type, pv,attaque1,attaque2) {
    this.nom = nom;
    this.numero = numero;
    this.poids = poids;
    this.type = type;
    this.pv = pv;
    this.attaque1 = attaque1;
    this.attaque2 = attaque2;
  }
  tauxCritique = 0.1;
  attaque = (pokemonCible)=>{
    let degats = 0;
    let result = "";
    const attaqueCritique = Math.random() < this.tauxCritique? true: false;
    if(this.pv < this.pv /5){
      degats = attaqueCritique ? this.attaque1.degats *2: this.attaque1.degats ;
      pokemonCible.pv -= attaqueCritique ? degats = this.attaque1.degats *2: this.attaque1.degats ;
      result = `${this.nom} a attaqué avec ${this.attaque1.libelle} ${attaqueCritique ? "ATTAQUE CRITIQUE" :""}. Il a fait ${degats} dégats`;
    }else {
      degats = attaqueCritique ? this.attaque2.degats *2: this.attaque2.degats ;
      pokemonCible.pv -= attaqueCritique ? degats = this.attaque2.degats *2: this.attaque2.degats ;
      result = `${this.nom} a attaqué avec ${this.attaque2.libelle} ${attaqueCritique ? "ATTAQUE CRITIQUE" :""}. Il a fait ${degats} dégats`;
    }
    return result
  };
}


export const Evoli = new Pokemon("Evoli", 133, 6.5, "normal", 350);
Evoli.attaque1 = attaques.find(attaque =>attaque.libelle ==="anticipation");
Evoli.attaque2 = attaques.find(attaque =>attaque.libelle ==="adaptabilité");

export const Pikachu = new Pokemon("Pikachu", 25, 6, "électrique", 82);
Pikachu.attaque1 = attaques.find(attaque =>attaque.libelle ==="statik");
Pikachu.attaque2 =attaques.find(attaque =>attaque.libelle ==="paratonnerre");

export const pokemons =[Evoli,Pikachu];



