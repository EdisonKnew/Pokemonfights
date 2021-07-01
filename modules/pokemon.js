export class Pokemon {
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

   const action = (attaque)=> {
      const degats = attaqueCritique ? attaque *2: attaque.degats ;
      pokemonCible.pv -= attaqueCritique ? degats = attaque.degats *2: attaque.degats ;
      result = `${this.nom} a attaqué avec ${attaque.libelle} ${attaqueCritique ? "ATTAQUE CRITIQUE" :""}. Il a fait ${degats} dégats`;
    };

    let result = "";
    const attaqueCritique = Math.random() < this.tauxCritique? true: false;
    this.pv < this.pv /5 ? action(this.attaque1) : action(this.attaque2);
    return result
  };
}





