// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/* LE QUATTRO DOMANDE
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? euro (importo in euro), tasso (tasso di cambio), commissione (commissione fissa in euro)
  Deve restituire qualcosa? Sì, i dollari ricevuti (oppure 0 se l'importo non copre la commissione)
  Di che tipo? Number

  STEPS
  1 - Controllare se euro è minore o uguale a commissione: in tal caso fare return 0
  2 - Sottrarre la commissione dall'importo in euro per ottenere i euro da cambiare
  3 - Moltiplicare i euro residui per il tasso di cambio e restituire il risultato
*/


function calcolaDollariRicevuti(euro, tasso, commissione) {
  if (euro <= commissione) {
    return 0;
  }

  const euroDaCambiare = euro - commissione;
  return euroDaCambiare * tasso;
}

function stampaConversione(euro, tasso, commissione) {
  const dollari = calcolaDollariRicevuti(euro, tasso, commissione);
  console.log(`${euro} € diventano ${dollari.toFixed(2)} $`);
}

// Prove
stampaConversione(100, 1.08, 5); // 100 € diventano 102.60 $
stampaConversione(250, 1.08, 5); // 250 € diventano 264.60 $
stampaConversione(100, 1.12, 0); // 100 € diventano 112.00 $
stampaConversione(3, 1.08, 5);    // 3 € diventano 0.00 $

stampaConversione(100, 5, 1.08);