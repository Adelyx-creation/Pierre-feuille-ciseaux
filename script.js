let gestepossible = ["pierre", "feuille", "ciseaux"]

<<<<<<< Updated upstream
let gestePossible = Array ["Pierre", "Feuille", "Ciseaux"]
const playButton = document.elementById("playButton");

function getHumanChoice {
playButton.addEventListener("click", () => {
  let play = prompt("");
  if (play === null) {
    log.innerText = "Essayez à nouveau";
  } else if (play.toLowerCase() === "") {
    log.innerText = "Entrez Pierre, Feuille ou Ciseaux.";
  } else if (play.toLowerCase() === gestePossible) {
    return  (log.gestePossible.innerText);
  }
  console.log (getHumanChoice)}
=======
function getComputerChoice () {
    let indexaleatoire = Math.random () * 3

console.log (indexaleatoire)

   


 
}

getComputerChoice ()
>>>>>>> Stashed changes
