// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/* LE QUATTRO DOMANDE
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? voto (voto numerico da 1 a 10)
  Deve restituire qualcosa? Sì, il giudizio corrispondente al voto
  Di che tipo? String

  STEPS
  1 - Controllare se il voto è minore di 1 o maggiore di 10 e restituire "Voto non valido"
  2 - Controllare le soglie in ordine crescente (< 5, < 6, < 7, < 8) restituendo il giudizio corrispondente
  3 - Se nessuna soglia precedente è scattata (voto da 8 in su), restituire "Ottimo"
*/

// # La funzione
function calcolaMediaPonderata(scritto, orale) {
  return (scritto * 2 + orale) / 3;
}

function trovaGiudizio(voto) {
  if (voto < 1 || voto > 10) {
    return 'Voto non valido';
  }
  if (voto < 5) {
    return 'Gravemente insufficiente';
  }
  if (voto < 6) {
    return 'Insufficiente';
  }
  if (voto < 7) {
    return 'Sufficiente';
  }
  if (voto < 8) {
    return 'Buono';
  }
  return 'Ottimo';
}

// Prove
console.log(trovaGiudizio(3));   // Gravemente insufficiente
console.log(trovaGiudizio(5));   // Insufficiente
console.log(trovaGiudizio(5.5)); // Insufficiente
console.log(trovaGiudizio(6));   // Sufficiente
console.log(trovaGiudizio(7.5)); // Buono
console.log(trovaGiudizio(8));   // Ottimo
console.log(trovaGiudizio(10));  // Ottimo
console.log(trovaGiudizio(0));   // Voto non valido
console.log(trovaGiudizio(11));  // Voto non valido

// Composizione con la funzione dell'esercizio 03
console.log(trovaGiudizio(calcolaMediaPonderata(6, 9))); // Buono

