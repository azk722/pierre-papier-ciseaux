const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const main = async () =>{
    
let numberToGuess = Math.round( Math.random()*10)
let userEntry = await new Promise(resolve => {
    rl.question("Quel est le nombre ", resolve)
  })
  let nombreDessaie = 0
while (userEntry != numberToGuess){
  console.log('rééssayer')
  nombreDessaie++;
  userEntry = await new Promise(resolve => {
    rl.question("Quel est le nombre ", resolve)
  })
}
if (userEntry == numberToGuess)
  console.log ('juste')
console.log ('Nombre de fautes =',nombreDessaie)
rl.close()
}
main().then()
