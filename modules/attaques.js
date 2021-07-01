export class Attaque {
    constructor(libelle, degats) {
      this.libelle = libelle;
      this.degats = degats;
    }
  };
  
  const statik = new Attaque("statik", 10);
  const paratonnerre = new Attaque("paratonnerre", 25);
  const anticipation = new Attaque("anticipation", 15);
  const adaptabilite = new Attaque("adaptabilité", 9);

export const attaques = [statik,paratonnerre,anticipation,adaptabilite];