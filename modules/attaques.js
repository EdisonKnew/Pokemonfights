import { Attaque } from './attaque.js';

const statik = new Attaque("statik", 10);
const paratonnerre = new Attaque("paratonnerre", 25);
const anticipation = new Attaque("anticipation", 15);
const adaptabilite = new Attaque("adaptabilité", 9);
const eclair = new Attaque("éclair", 20);
const chocMental = new Attaque("Choc mental", 130);
const instaWin = new Attaque("Insta Win", 100000);


export const attaques = {
  statik, paratonnerre, anticipation, adaptabilite, eclair, chocMental, instaWin
}