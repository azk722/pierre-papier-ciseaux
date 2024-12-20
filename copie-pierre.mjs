import chalk from 'chalk'
import readline from "readline"
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function resultatPartie(signeChoisi, userEntry) {

  let result

  if(signeChoisi == userEntry) {
    result = 0
  }

  if(signeChoisi == "pierre")
    if (userEntry == "feuille"){
      result = 1
    }
    else if (userEntry == "ciseaux") {
  result = -1
  }

  if (signeChoisi == "feuille") {
    if (userEntry == "ciseaux") {
      result = 1
    }
    else if (userEntry == "pierre") {
    result = -1
  }
}

  if (signeChoisi == "ciseaux") {
    if (userEntry == "feuille") {
      result =-1
    }
    else if (userEntry == "pierre"){
    result = 1
  }


}

return result
}
 
const main = async () =>{
let userEntry  
let nombreDeParties = 1 
let points = 0
 do {
  const possibleValues = ["pierre","feuille","ciseaux"]
  const randomValue = Math.round(Math.random()*2)
  const signeChoisi = possibleValues[randomValue] 
  
  let nombreDeReponses = 0

  console.log(chalk.red("Nouvelle partie"))
  console.log(chalk.red('Partie n°', nombreDeParties))

  do {
    if (nombreDeReponses >0) {
      console.log (chalk.green('réessayez avec un mot correct (pierre, ciseaux ou feuille)'))
    }
    userEntry = await new Promise(resolve => {
      console.log(chalk.blueBright("Quel est ton signe?"))
      rl.question("", resolve)
    })   
    nombreDeReponses++
  } 
  while (userEntry != "pierre" && userEntry != "feuille" && userEntry != "ciseaux" && userEntry != "stop")

    

        if (userEntry == "stop") {
            console.log(chalk.cyan('Score:', points,'point(s)'))
            rl.close()
        }
        else {
            
            if (signeChoisi == "pierre") {
                console.log(chalk.green('bot a choisi pierre'))
            }
            else if (signeChoisi == "ciseaux") {
                console.log(chalk.green('bot a choisi ciseaux'))
            }
            else if (signeChoisi == "feuille") {
                console.log(chalk.green('bot a choisi feuille'))
            }

            const resultat = resultatPartie(signeChoisi, userEntry)

            points += resultat


            if (resultat == 1) {
                console.log(chalk.red('tu as gagné'))
            }
            else if (resultat == 0) {
                console.log(chalk.red('égalité'))
                }
            else if (resultat == -1) {
              console.log(chalk.red("tu as perdu"))
            }
            nombreDeParties++
            console.log(chalk.cyan(points, 'point(s)'))
    
        }
        
     


    
  
 }
 while (userEntry != "stop") 
 

}
  
main().then()