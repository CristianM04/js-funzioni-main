// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

/*
/* LE QUATTRO DOMANDE
  Come si chiama? verificaOraNotturna
  Di quali dati ha bisogno? ora (numero intero da 0 a 23)
  Deve restituire qualcosa? Sì, indica se l'ora rientra nella fascia notturna (0–5)
  Di che tipo? Boolean

  STEPS
  1 - Verificare se ora è maggiore o uguale a 0 e minore o uguale a 5
  2 - Restituire true se la condizione è vera
  3 - Restituire false se la condizione è falsa

/* LE QUATTRO DOMANDE
  /* LE QUATTRO DOMANDE
  Come si chiama? calcolaTotaleCorsa
  Di quali dati ha bisogno? prezzoBase, oraPartenza, oraArrivo
  Deve restituire qualcosa? Sì, il totale della corsa con eventuale supplemento notturno
  Di che tipo? Number

  STEPS
  1 - Verificare se la partenza o l'arrivo ricadono di notte usando verificaOraNotturna
  2 - Se almeno una è notturna, aggiungere 5 € di supplemento al prezzoBase e restituire il totale
  3 - Altrimenti restituire il prezzoBase
*/
// # Le funzioni

function verificaOraNotturna(ora) {
  return ora >= 0 && ora <= 5;
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  const supplementoNotturno = 5;
  const isNotturna =
    verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo);

  if (isNotturna) {
    return prezzoBase + supplementoNotturno;
  }

  return prezzoBase;
}

// Prove
console.log(verificaOraNotturna(0));  // true
console.log(verificaOraNotturna(5));  // true
console.log(verificaOraNotturna(6));  // false
console.log(verificaOraNotturna(23)); // false

console.log(calcolaTotaleCorsa(20, 22, 23)); // 20
console.log(calcolaTotaleCorsa(20, 23, 1));  // 25
console.log(calcolaTotaleCorsa(20, 23, 0));  // 25
console.log(calcolaTotaleCorsa(20, 2, 3));   // 25
console.log(calcolaTotaleCorsa(20, 5, 6));   // 25
console.log(calcolaTotaleCorsa(20, 6, 7));   // 20
