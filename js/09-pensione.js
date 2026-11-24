// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

/* LE QUATTRO DOMANDE
  Come si chiama? trovaEtaPensione
  Di quali dati ha bisogno? tipoLavoro ("ordinario" o "usurante")
  Deve restituire qualcosa? Sì, l'età prevista per la pensione
  Di che tipo? Number

  STEPS
  1 - Controllare se tipoLavoro è "usurante"
  2 - Se sì, restituire 62
  3 - Altrimenti restituire 67

  /* LE QUATTRO DOMANDE
  Come si chiama? calcolaAnniAllaPensione
  Di quali dati ha bisogno? annoNascita, annoCorrente, tipoLavoro
  Deve restituire qualcosa? Sì, gli anni mancanti alla pensione (o 0 se l'età è già stata raggiunta/superata)
  Di che tipo? Number

  STEPS
  1 - Calcolare l'età attuale (annoCorrente - annoNascita) e ottenere l'età di pensione tramite trovaEtaPensione(tipoLavoro)
  2 - Calcolare la differenza etaPensione - etaAttuale
  3 - Se la differenza è minore di 0 restituire 0, altrimenti restituire la differenza
*/


// # Le funzioni

function trovaEtaPensione(tipoLavoro) {
  if (tipoLavoro === 'usurante') {
    return 62;
  }
  return 67;
}

function calcolaAnniAllaPensione(annoNascita, annoCorrente, tipoLavoro) {
  const etaAttuale = annoCorrente - annoNascita;
  const etaPensione = trovaEtaPensione(tipoLavoro);
  const anniMancanti = etaPensione - etaAttuale;

  if (anniMancanti < 0) {
    return 0;
  }

  return anniMancanti;
}

// Prove
console.log(trovaEtaPensione('ordinario')); // 67
console.log(trovaEtaPensione('usurante'));  // 62

console.log(calcolaAnniAllaPensione(2000, 2026, 'ordinario')); // 41
console.log(calcolaAnniAllaPensione(2000, 2026, 'usurante'));  // 36
console.log(calcolaAnniAllaPensione(2000, 2027, 'ordinario')); // 40
console.log(calcolaAnniAllaPensione(1960, 2026, 'ordinario')); // 1
console.log(calcolaAnniAllaPensione(1964, 2026, 'usurante'));  // 0
console.log(calcolaAnniAllaPensione(1950, 2026, 'ordinario')); // 0

