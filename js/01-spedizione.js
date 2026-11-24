// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?        trovaStatoSpedizione
  Di quali dati ha bisogno? di codiceStato (1-in elaborazione, 2-spedito 3-consegnato)
  Deve restituire qualcosa? lo stato
  Di che tipo? stringa (testo)

  STEPS algoritmo
  1 dichiaro la funzione trovaStatoSpedizione che ha come parametri CodiceStato
  2 controllo il codiceStato
 se codiceStato =1 in elaborazione
  ALTRIMENTI se codicestato 2 spedito
  ALTRIMENTI se codiceStato 3 consegnato 
  3 nel programma principale stampo in console il risultato di trovaStatoSpedizione

*/

// # La funzione
function trovaStatoSpedizione(codice) {
  if (codice === 1) {
    return 'In elaborazione';
  } else if (codice === 2) {
    return 'Spedito';
  } else if (codice === 3) {
    return 'Consegnato';
  } else {
    return 'Stato sconosciuto';
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log (trovaStatoSpedizione(0))
console.log (trovaStatoSpedizione(1))
console.log (trovaStatoSpedizione(2))
console.log (trovaStatoSpedizione(3))
console.log(trovaStatoSpedizione(4));
