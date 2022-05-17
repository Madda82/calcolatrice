let operando1;
let operando2;
let operatore;
let risultato;
const NUMERO_MASSIMO_CIFRE = 10;
const risultatoDOM = document.querySelector('#risultato');

function reset() { // resetta le variabili
    operando1 = null;
    operando2 = null;
    operatore = null;
    risultato = null;
    mostra(""); // pulisce lo schermo della calcolatrice
}


function input(bottone) {

    if (bottone === 'C') {
        reset();
    } else if (bottone === '=') {
        risultato= esegui_operazione(operando1, operando2, operatore);
        mostra(risultato);
    } 
    else if (['*', '-', '+', '/', '%'].includes(bottone)) {
        console.log(operatore);

        // caso1: 
        if (operatore == null){
            operatore=bottone;
            mostra(risultatoDOM.value+operatore);
        }else
          {
            // sono nel caso operando > operatore > operando > operatore >  es. 1 + 2 +
            if ((operando1 =! null) && (operando2 !=null)){
                risultato= esegui_operazione(operando1, operando2, operatore);
                mostra(risultato);
                operando1= risultato;
                operatore= bottone;
            }

          }
       
    } 
    else { // primo e secondo operando
        if (operatore == null){
            operando1 = acquisci_operando(operando1, bottone);
        } 
        else{
            operando2 = acquisci_operando(operando2, bottone);
        }
        mostra(risultatoDOM.value+bottone);
    }

    
}  

             


/**
 * 
 * @param {string} op 
 * @param {number} val 
 * @returns {string}
 */
function acquisci_operando(op, val) {
    if (op === null) {
        op = '';
    }

    if (typeof op === 'string' && op.length > NUMERO_MASSIMO_CIFRE) {
        return op;
    }

    const nuovo = op.toString() + val.toString();
    return nuovo;
}

function somma(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 + op2;
    return ris;
}

function sottrazione(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 - op2;
    return ris;
}

function moltiplicazione(op1, op2) { // assunzione: i parametri in input sono numeri
    const ris = op1 * op2;
    return ris;
}

/*
function divisione(op1, op2) { // assunzione: i parametri in input sono numeri
    risultato = op1 / op2;
    return risultato;
}
*/

function mostra(valore) {
    risultatoDOM.value = valore;
}

function acquisci_operatore(oper) {
    return oper;
  }


function esegui_operazione (oper1, oper2, oper){
    oper1= parseFloat(oper1);
    oper2= parseFloat(oper2);

 let ris = 0;
 switch (oper) {
    case '+':
      ris= somma(oper1,oper2);
     break;
    case '-':
        ris= sottrazione(oper1,oper2);
     break;
    case '*':
        ris= moltiplicazione(oper1,oper2);
      break;
    default: 
      ris=0;
    }
   return ris;
}
// -----

reset();