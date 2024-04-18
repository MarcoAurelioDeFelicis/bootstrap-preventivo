console.log ('prova')

// dichiarazione variabbili prezzi lavoro per ora, dichiarazione ore di lavoro fisse, 
const backend = 20.50
const frontend = 15.30
const projAna = 33.60

const oredilavoro =13


// creazione array di codici promozionali
const codiciPromozionali = ['WEB2024']

// dichiarazione valore scontro codice promozionale 
const sconto = 0.25

// grab del bottone da html
const button = document.getElementById('form-addingPreventivo')

// validazione form

// calcolare prezzo 
// SE 
// lavoro è backend
// ALLORA 
// risultato = backend * orario fisso 

// ALTRIMENTI SE 
// lavoro è frontend
// ALLORA 
// risultato = frontend * orario fisso

// ALTRIMENTI SE 
// lavoro è projectanalysis
// ALLORA 
// risultato = proj + orario fisso 

// calcolare prezzo finale con sconto
// SE 
// codicde inserito è presente nell'array sconti 
// ALLORA 
// prezzofinale = risultato - 25%

// ALTRIMENTI
// prezzofinale === risultato

// trasportare il calcolo prezzo in una funzione

// rendere il prezzo finale a numero intero

