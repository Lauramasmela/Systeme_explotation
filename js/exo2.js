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

//3. fonction qui permet de parcourir la
//suite de fibonacci. Reçoit 2
//arguments qui sont les 2 valeurs initiales de la
//suite, et retourne une fonction qui, à chaque
//appel, délivre les valeurs successives de la suite.
// (rappel : la suite de fibonacci est la suite
//un=un-1+un-2),

function suiteFibonacci(i, i2){
  if(i>0 && i2==i+1){
    return()=>((i-1)+(i2-2));
  }
}
let suiv=suiteFibonacci(5,6);
console.log(suiv());

//4. modifier function creerMultplicateur()

function modifCreerMultiplicateur(n, x){

  if(arguments.length==2){
    console.log("deux arguments");
    return()=>(x*n);

  }else if(arguments.length==1){
    console.log("un seul argument");
    return(x)=>(x*n);

  }
}
let modifCM= modifCreerMultiplicateur(6);
console.log(modifCM(3));
