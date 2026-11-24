// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/* LE QUATTRO DOMANDE
  Come si chiama? contaGiorniDelMese
  Di quali dati ha bisogno? mese (numero del mese da 1 a 12)
  Deve restituire qualcosa? Sì, il numero di giorni del mese (oppure 0 se il mese non è valido)
  Di che tipo? Number

  STEPS
  1 - Definire l'array con i giorni dei 12 mesi (indice 0 = gennaio, 28 giorni per febbraio)
  2 - Controllare se mese è minore di 1 o maggiore di 12 e restituire 0
  3 - Restituire l'elemento all'indice mese - 1
*/

// # La funzione
function contaGiorniDelMese(mese) {
  const giorniPerMese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (mese < 1 || mese > 12) {
    return 0;
  }

  return giorniPerMese[mese - 1];
}

// Prove
console.log(contaGiorniDelMese(1));  // 31
console.log(contaGiorniDelMese(2));  // 28
console.log(contaGiorniDelMese(4));  // 30
console.log(contaGiorniDelMese(8));  // 31
console.log(contaGiorniDelMese(11)); // 30
console.log(contaGiorniDelMese(12)); // 31
console.log(contaGiorniDelMese(0));  // 0
console.log(contaGiorniDelMese(13)); // 0



