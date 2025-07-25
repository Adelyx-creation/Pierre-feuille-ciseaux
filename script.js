// computer
let gestepossible = ["pierre", "feuille", "ciseaux"]

function getComputerChoice() {
  let indexaleatoire = Math.floor(Math.random() * 3)
 const gestealeatoire = (gestepossible [indexaleatoire])
  console.log(gestealeatoire)
  return gestealeatoire
}
//let gestealeatoire = getComputerChoice()

// human exo 3


gestepossible [0]
//console.log(gestepossible [0])


function getHumanChoice() {
  

    let play = prompt ("Jouez Pierre Feuille ou ciseaux");
console.log (play.toLowerCase())
return play.toLowerCase()

  }
    
//console.log ()   
 //getHumanChoice ()
  
// exo 4

let humanScore = 0
let computerScore = 0

// exo 5


function playRound(humanChoice, computerChoice) {
 
if (humanChoice == "ciseaux" && computerChoice == "feuille"){
    console.log ("Tu as gagné")
   }
  else if (humanChoice == "feuille" && computerChoice == "pierre"){
    console.log ("Tu as gagné")
}
  else if (humanChoice == "pierre" && computerChoice == "ciseaux"){
    console.log ("Tu as gagné")
}
 else if (humanChoice == computerChoice) {
   console.log ("égalité")
}
  else if (humanChoice == "pierre" && computerChoice == "feuille"){
    console.log ("victoire de l'ordi")
}
  else if (humanChoice == "feuille" && computerChoice == "ciseaux"){
   console.log ("victoire de l'ordi")
  }
  else if (humanChoice == "ciseaux" && computerChoice == "pierre"){
   console.log ("victoire de l'ordi")
    }
 }


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

 humanChoice


playRound(humanChoice, computerChoice);
``