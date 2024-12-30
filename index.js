// Variables
const compteurAffichage = document.getElementById("compteur");
const btnUp = document.getElementById("augm-compteur");
const btnDown = document.getElementById("dim-compteur");
const btnReset = document.getElementById("reini-compteur");
const message = document.getElementById("message");

let compteur = 0;

// Evenements click
btnUp.addEventListener("click", augmenter);
btnDown.addEventListener("click", diminuer);
btnReset.addEventListener("click", reini);

// Fonction de mise à jour du compteur
function mettreAJourAffichage() {
  compteurAffichage.textContent = compteur;
  compteurAffichage.classList.add("bounce"); // Effet rebondi sur l'affichage des chiffres

  setTimeout(() => {
    compteurAffichage.classList.remove("bounce");
  }, 200); // Durée identique à celle définie dans le CSS
}

// Fonction augmentation compteur
function augmenter() {
  compteur++;
  mettreAJourAffichage();
}

// Fonction diminution compteur
let timeoutId;
function diminuer() {
  // Ne peut pas descendre en dessous de zéro
  if (compteur > 0) {
    compteur--;
    mettreAJourAffichage();
  } else {
    message.textContent = "Le compteur ne peut pas être négatif.";
    clearTimeout(timeoutId); // Annule le précédent timeout
    timeoutId = setTimeout(() => {
      message.textContent = "";
    }, 2000); // Efface le message après 2000ms
  }
}

// Bouton reset
function reini() {
  compteur = 0;
  mettreAJourAffichage();
}
