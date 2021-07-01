import {attaques} from './attaqueListe.js';
import {Pokemon} from './pokemon.js';

export const Evoli = new Pokemon("Evoli", 133, 6.5, "normal", 350);
Evoli.attaque1 = attaques.find(attaque =>attaque.libelle ==="anticipation");
Evoli.attaque2 = attaques.find(attaque =>attaque.libelle ==="adaptabilité");

export const Pikachu = new Pokemon("Pikachu", 25, 6, "électrique", 82);
Pikachu.attaque1 = attaques.find(attaque =>attaque.libelle ==="statik");
Pikachu.attaque2 =attaques.find(attaque =>attaque.libelle ==="paratonnerre");

export const Mewtwo = new Pokemon("Mewtwo", 25, 6, "mental", 82);
Mewtwo.attaque1 = attaques.find(attaque =>attaque.libelle ==="Choc mental");
Mewtwo.attaque2 =attaques.find(attaque =>attaque.libelle ==="Insta Win");

export const pokemons =[Evoli,Pikachu,Mewtwo];

export const pokedex ={
    Evoli,
    Pikachu,
    Mewtwo
}
