// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/* LE QUATTRO DOMANDE
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? scritto (voto dello scritto), orale (voto dell'orale)
  Deve restituire qualcosa? Sì, la media ponderata dove lo scritto vale doppio
  Di che tipo? Number

  STEPS
  1 - Moltiplicare il voto dello scritto per 2
  2 - Sommare il risultato al voto dell'orale
  3 - Dividere la somma per 3 (con le parentesi tonde) e restituire la media
*/

// # La funzione
function calcolaMediaPonderata(scritto, orale) {
  return (scritto * 2 + orale) / 3;
}


function stampaMedia(scritto, orale) {
  const media = calcolaMediaPonderata(scritto, orale);
  console.log(`Media: ${media.toFixed(1)}`);
}

// Prove
stampaMedia(6, 9);   // Media: 7.0
stampaMedia(9, 6);   // Media: 8.0
stampaMedia(8, 6);   // Media: 7.3
stampaMedia(5, 8);   // Media: 6.0
stampaMedia(10, 10); // Media: 10.0