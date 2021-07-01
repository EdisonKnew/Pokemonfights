import {pokemons} from './pokemons.js';

export class Combat {
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


  const combatPikachuEvoli = 
  new Combat(pokemons.find(pokemon=>pokemon.nom === "Pikachu"),pokemons.find(pokemon=>pokemon.nom === "Evoli"));

  export const combats = [combatPikachuEvoli];