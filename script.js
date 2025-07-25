// computer
let gestepossible = ["pierre", "feuille", "ciseaux"]

function getComputerChoice() {
  let indexaleatoire = Math.floor(Math.random() * 3)
 const gestealeatoire = (gestepossible [indexaleatoire])
  console.log(gestealeatoire)
  return gestealeatoire
}
let gestealeatoire = getComputerChoice()

// human exo 3


gestepossible [0]
//console.log(gestepossible [0])


function getHumanChoice() {
  

    let play = prompt ("Jouez Pierre Feuille ou ciseaux");
console.log (play)

  if (play == "ciseaux" && gestealeatoire == "feuille"){
    console.log ("Tu as gagné")
   }
  else if (play == "feuille" && gestealeatoire == "pierre"){
    console.log ("Tu as gagné")
}
  else if (play == "pierre" && gestealeatoire == "ciseaux"){
    console.log ("Tu as gagné")
}
 else if (play == gestealeatoire) {
   console.log ("égalité")
}
  else if (play == "pierre" && gestealeatoire == "feuille"){
    console.log ("victoire de l'ordi")
}
  else if (play == "feuille" && gestealeatoire == "ciseaux"){
   console.log ("victoire de l'ordi")
  }
  else if (play == "ciseaux" && gestealeatoire == "pierre"){
   console.log ("victoire de l'ordi")
    }
 }
    
  console.log ()   
 getHumanChoice ()
  



