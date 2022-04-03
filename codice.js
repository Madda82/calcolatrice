/*function somma(numero1, numero2)
 {
   let risultato = numero1+numero2;   
        return risultato;
  }

let la_mia_somma = somma(5+2);
console.log (la_mia_somma);
*/
function mostra(valore) {
  const risultatoDOM = document.querySelector('#risultato');
  risultatoDOM.value = valore;
}


function PariDispari(numero)
{
    if (numero %2 == 1)
    {
        return risul="dispari";
    }
    else
    {
        return risul="pari";
    }
}

let risultato=PariDispari(2);
console.log ("il numero è" + " " + risultato );