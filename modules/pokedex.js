import {attaques} from './attaques.js';
import {Pokemon} from './pokemon.js';

export const Evoli = new Pokemon("Evoli", 133, 6.5, "normal", 350);
Evoli.attaque1 = attaques.anticipation;
Evoli.attaque2 = attaques.adaptabilite;

export const Pikachu = new Pokemon("Pikachu", 25, 6, "électrique", 82);
Pikachu.attaque1 = attaques.statik;
Pikachu.attaque2 =attaques.paratonnerre;

export const Mewtwo = new Pokemon("Mewtwo", 25, 6, "mental", 82);
Mewtwo.attaque1 = attaques.chocMental;
Mewtwo.attaque2 =attaques.instaWin;

export const pokedex ={
    Evoli,
    Pikachu,
    Mewtwo
}
