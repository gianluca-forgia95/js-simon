/*
Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt
alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software
dice quanti e quali dei numeri da indovinare sono
stati individuati
*/

//FUNZIONI utili per il programma

//Funzione per generare numero random
function randomNumber( min, max) {
 return parseInt(Math.random() * (max - min) + min + 1) ;
}

//Variabili utili
var winningNumbers = [];
var numbersPrompt = [];
//Creo il ciclo for per generare 5 numeri random e li metto nell'array vuoto
for (var i = 0; i < 5; i++) {
  winningNumbers.push(randomNumber(1,60));
}
//Stampo i numeri con l'alert
var startGame = alert('Il browser ha generato 5 numeri random vincenti tra 1 e 60, i numeri sono : ' + winningNumbers);
console.log(winningNumbers);

//Inizializzo il setTimeout
setTimeout(function () {
  //Chiedo all'utente 5 volte di inserire un numero
  for (var j = 0; j < 5; j++) {
    var gamePrompts = parseInt(prompt('Inserisci uno dei numeri che hai visto prima'));
  //Inizializzo un altro ciclo for per definire i numeri che inserisce l'utente
    for (var y = 0; y < winningNumbers.length; y++) {
      //Verifico che siano uguali ai numeri inseriti
      if ( gamePrompts == winningNumbers[y] ) {
       numbersPrompt.push(gamePrompts);
       console.log(winningNumbers[y]);
      }
    }

  }//Mostro il risultato con un alert
  alert('hai ricordato i numeri ' + numbersPrompt + ' il tuo punteggio è: ' + numbersPrompt.length );
}, 30000);
