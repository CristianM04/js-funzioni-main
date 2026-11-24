// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

/* LE QUATTRO DOMANDE
  Come si chiama? trovaNumeroGiorno
  Di quali dati ha bisogno? nomeGiorno (nome del giorno della settimana)
  Deve restituire qualcosa? Sì, il numero del giorno da 1 a 7 (oppure 0 se non trovato)
  Di che tipo? Number

  STEPS
  1 - Creare l'array con i nomi dei giorni da "Lunedì" a "Domenica"
  2 - Scorrere l'array con un ciclo for e confrontare ogni elemento con nomeGiorno
  3 - Se c'è corrispondenza restituire i + 1; dopo il ciclo, se non trovato, restituire 0
*/

// # La funzione

function trovaNumeroGiorno(nomeGiorno) {
  const giorni = [
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ];

  for (let i = 0; i < giorni.length; i++) {
    if (giorni[i] === nomeGiorno) {
      return i + 1;
    }
  }

  return 0;
}

// Prove
console.log(trovaNumeroGiorno('Lunedì'));    // 1
console.log(trovaNumeroGiorno('Mercoledì')); // 3
console.log(trovaNumeroGiorno('Domenica'));  // 7
console.log(trovaNumeroGiorno('lunedì'));    // 0
console.log(trovaNumeroGiorno('Lunedi'));    // 0
console.log(trovaNumeroGiorno('Pippo'));     // 0