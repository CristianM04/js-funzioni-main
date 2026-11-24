// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/* LE QUATTRO DOMANDE
  Come si chiama? formattaDurata
  Di quali dati ha bisogno? minutiTotali (durata complessiva in minuti)
  Deve restituire qualcosa? Sì, la durata formattata in ore e/o minuti con grammatica corretta
  Di che tipo? String

  STEPS
  1 - Calcolare le ore intere con Math.floor(minutiTotali / 60) e i minuti residui con minutiTotali % 60
  2 - Se ore è 0, restituire direttamente i minuti formattati
  3 - Preparare la dicitura singolare/plurale delle ore e restituire solo le ore se minuti è 0, altrimenti ore + " e " + minuti
*/

function formattaDurata(minutiTotali) {
  const ore = Math.floor(minutiTotali / 60);
  const minuti = minutiTotali % 60;

  if (ore === 0) {
    return `${minuti} minuti`;
  }

  const testoOre = ore === 1 ? '1 ora' : `${ore} ore`;

  if (minuti === 0) {
    return testoOre;
  }

  return `${testoOre} e ${minuti} minuti`;
}

// Prove
console.log(formattaDurata(148)); // 2 ore e 28 minuti
console.log(formattaDurata(95));  // 1 ora e 35 minuti
console.log(formattaDurata(120)); // 2 ore
console.log(formattaDurata(60));  // 1 ora
console.log(formattaDurata(45));  // 45 minuti
console.log(formattaDurata(0));   // 0 minuti


