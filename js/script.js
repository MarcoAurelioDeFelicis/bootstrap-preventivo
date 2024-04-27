console.log ('prova')

// dichiarazione variabbili prezzi lavoro per ora, dichiarazione ore di lavoro fisse, 
const backend = 20.50
const frontend = 15.30
const projAna = 33.60

const tipodiLavoro = document.getElementById('kindJob')
const orariofisso = 13


// creazione array di codici promozionali
const pcode = document.getElementById('code')
const codiciPromozionali = ['WEB2024']


// dichiarazione valore scontro codice promozionale 
const valoresconto = 0.25

// button
const button = document.getElementById('form-adding-preventivo')

// validazione form
const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation()
        } else {
            calcoloPrezzo();
        }

        form.classList.add('was-validated')
      }, false)
    })



// trasportare il calcolo prezzo in una funzione
// calcolare prezzo 
function calcoloPrezzo() {

    const userlavoro = tipodiLavoro.value
    console.log (userlavoro)
    // SE
    // lavoro è backend
    let totale= 0
    if (userlavoro === 'backend') {
        totale = backend * orariofisso
        
        // ALTRIMENTI SE 
        // lavoro è frontend
    } else if (userlavoro === 'frontend') {
        totale = frontend * orariofisso

        // ALTRIMENTI SE 
        // lavoro è projectanalysis
    } else if (userlavoro === 'projAna') {
        totale = projAna * orariofisso

    } else if (userlavoro === '') {
        alert("NON VALIDO")
    }

    const totalesenzasconti = totale
    console.log (totalesenzasconti)


    // calcolare prezzo finale con sconto
    const sconto = pcode.value
    const codiceSconto = codiciPromozionali.includes(sconto)
    console.log ("pcode" + codiceSconto)

    let prezzo= 0
    // SE 
    // codicde inserito è presente nell'array sconti 
    if (codiceSconto) {
        // prezzofinale = risultato - 25%
        console.log ("CODICE VALIDO")
        prezzo = totalesenzasconti - totalesenzasconti * valoresconto
        console.log ('prerzzo con sconto : ' + parseFloat(prezzo))

        // ALTRIMENTI SE
        //sconto è 0
    }else if (sconto == "") {
        // prezzofinale = risultato
        prezzo = totalesenzasconti
        console.log ('prezzo senza sconto : ' + parseFloat(prezzo))
        // ALTRIMENTI
    }else {
        //ALERT + prezzofinale = risultato
        alert("CODICE NON VALIDO!")
        prezzo = totalesenzasconti
    }

    // rendere il prezzo finale a numero intero
    prezzo = prezzo.toFixed(2)
    const string = prezzo.toString()
    const splitted = string.split('.')
    const decimale = splitted [1]
    const intero = splitted [0]
    const stampaPrezzo = '<b>' + '&euro;' + intero + '</b>' + '<span style = "color:gray">' + ',' + decimale + '</span>'
    //STAMPA IN HTML
    document.getElementById('formatted-price').innerHTML = stampaPrezzo

    
}


