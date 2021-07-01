import {pokedex} from './pokedex.js';
import {Combat} from './combat.js';

const combatMewtwoEvoli = new Combat(pokedex.Mewtwo, pokedex.Evoli);
const combatMewtwoPikachu = new Combat(pokedex.Mewtwo, pokedex.Pikachu);

export const combats = {
    combatMewtwoEvoli,
    combatMewtwoPikachu
}


