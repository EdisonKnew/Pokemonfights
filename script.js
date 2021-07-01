import { combats } from './modules/combats.js';


combats.combatMewtwoEvoli.run();
const resultats = combats.combatMewtwoEvoli.logs;

customElements.define('show-pokemon-fight', class extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        var containerListePokemon = document.createElement("div");

        resultats.map(ligne => {
            var p = document.createElement("p");
            p.innerHTML = ligne;
            // ajoute le nœud texte au nouveau div créé
            containerListePokemon.appendChild(p);

        })
        shadow.appendChild(containerListePokemon);
    }
});