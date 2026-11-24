// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/* LE QUATTRO DOMANDE
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? eta (età della persona)
  Deve restituire qualcosa? Sì, l'etichetta della fascia d'età (o messaggio di errore se negativa)
  Di che tipo? String

  STEPS
  1 - Controllare se eta è minore di 0 e restituire "Età non valida"
  2 - Verificare i confini a salire (< 18, <= 35, <= 60) restituendo la relativa fascia
  3 - Se l'età supera 60, restituire "Senior"
*/

function trovaFasciaEta(eta) {
  if (eta < 0) {
    return 'Età non valida';
  }
  if (eta < 18) {
    return 'Minorenne';
  }
  if (eta <= 35) {
    return 'Giovane Adulto';
  }
  if (eta <= 60) {
    return 'Adulto';
  }
  return 'Senior';
}

// Prove
console.log(trovaFasciaEta(0));  // Minorenne
console.log(trovaFasciaEta(17)); // Minorenne
console.log(trovaFasciaEta(18)); // Giovane Adulto
console.log(trovaFasciaEta(35)); // Giovane Adulto
console.log(trovaFasciaEta(36)); // Adulto
console.log(trovaFasciaEta(60)); // Adulto
console.log(trovaFasciaEta(61)); // Senior
console.log(trovaFasciaEta(-3)); // Età non valida

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

