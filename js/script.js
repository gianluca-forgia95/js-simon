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
//Funzione per cercare un elemento in un array
function isInArray(array, item) {
  var i = 0;
  var risultato = false;
  while (i < array.length && risultato == false) {
    if (array[i] == item) {
      risultato = true;
    }
    i++;
  }
  return risultato;
}
