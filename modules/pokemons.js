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
  attaque = (pokemonCible)=>{
    let degats = 0;
    let result = "";
    const attaqueCritique = Math.random() < 0.1 ? true: false;
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

class Combat {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  ordreAttaque = [];
  nbRounds = 0;
  setOrdre = () => {
    const valeurRandom = Math.random();
    if (valeurRandom >= 0.5) {
      this.ordreAttaque.push(this.pokemon1);
      this.ordreAttaque.push(this.pokemon2);
    } else {
      this.ordreAttaque.push(this.pokemon2);
      this.ordreAttaque.push(this.pokemon1);
    }
  };
  afficherPv= (pokemon)=> {
    this.logs.push(`${pokemon.nom} a ${pokemon.pv} points de vie`);
  }
  afficherTirageAuSort = ()=>{
    this.logs.push("Le tirage au sort a défini que " + this.ordreAttaque[0].nom + " attaquait en premier");

  }

  run = () => {
    this.setOrdre();
    this.afficherTirageAuSort();
    this.logs.push("-------------------------------------------------------------------------------------");
    this.afficherPv(this.ordreAttaque[0]);
    this.afficherPv(this.ordreAttaque[1]);
    this.logs.push("-------------------------------------------------------------------------------------");

    while(this.ordreAttaque[0].pv >= 0 && this.ordreAttaque[1].pv >= 0 ){
      this.nbRounds ++;
      this.logs.push(`Round ${this.nbRounds}`);
    
      this.afficherPv(this.ordreAttaque[0]);
      this.afficherPv(this.ordreAttaque[1]);
      this.logs.push("                  ------------------------------------                              ");
      this.attaqueRound();
      this.logs.push("-------------------------------------------------------------------------------------");
    }

  };
  displayResults = ()=>{
    this.logs.map(element => console.log(element))
  }

  attaqueRound = () => {
    const pokemon1 = this.ordreAttaque[0];
    const pokemon2 = this.ordreAttaque[1];

    this.logs.push(pokemon1.attaque(pokemon2)) ;
    if(pokemon2.pv <= 0){
      this.logs.push("-------------------------------------------------------------------------------------");
      this.logs.push(`${pokemon1.nom} a gagné, il lui restait ${pokemon1.pv} points de vie ` );
    }
    else
    {
      this.logs.push(pokemon2.attaque(pokemon1));
      if(pokemon1.pv <= 0){
        this.logs.push("-------------------------------------------------------------------------------------");
        this.logs.push(`${pokemon2.nom} a gagné, il lui restait ${pokemon2.pv} points de vie ` );
      }
    }
  
  }
  logs = [];

}

class Attaque {
  constructor(libelle, degats) {
    this.libelle = libelle;
    this.degats = degats;
  }
};

const statik = new Attaque("statik", 10);
const paratonnerre = new Attaque("paratonnerre", 25);
const anticipation = new Attaque("anticipation", 15);
const adaptabilite = new Attaque("adaptabilité", 9);

export const Evoli = new Pokemon("Evoli", 133, 6.5, "normal", 350);
Evoli.attaque1 = anticipation;
Evoli.attaque2 = adaptabilite;
export const Pikachu = new Pokemon("Pikachu", 25, 6, "électrique", 82);
Pikachu.attaque1 = statik;
Pikachu.attaque2 = paratonnerre;

export const combatPikachuEvoli = new Combat(Pikachu,Evoli);

