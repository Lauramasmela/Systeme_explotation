'use strict';
//1.création d'une fonction multiplicateur
//qui reçoit un parametre entier n et retourne
//une fonction qui multiplie son parametre x par n.



function creerMultplicateur(n){
  return (x)=>(x*n);
}

let multip= creerMultplicateur(2);
multip(5);
console.log(multip(5));

//2. fonction creerSequence() qui resoit comme param
// valeur d'increment step et retourne une fonction
// qui delivere à chaque appel les valeurs successives
// de la séquence demarrane à init et incrementes
// de step.
function creerSequence(init, step){

    return () => (init += step++);
}

let s= creerSequence(2, 1);


console.log(s());
console.log("on ajoute" + s());
