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
console.log(miltip(3));
console.log(miltip(10));

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
console.log(s());

//X3. fonction qui permet de parcourir la
//suite de fibonacci. Reçoit 2
//arguments qui sont les 2 valeurs initiales de la
//suite, et retourne une fonction qui, à chaque
//appel, délivre les valeurs successives de la suite.
// (rappel : la suite de fibonacci est la suite
//un=un-1+un-2),

function suiteFibonacci(i, i2){
  let suivant
  if(i==0){
    return 1;
  }else{
    let temp=i;
    let temp2=i2;
    return ()=>{
      let suivant= temp+temp2;
      temp =i2;
      temp2=suivant;
      return suivant;
    };
  }
}
let sf= suiteFibonacci(2,3)
console.log(sf());
console.log(sf());


//4. modifier function creerMultplicateur(). Avec un seul param. 

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
let modifCM1= modifCreerMultiplicateur(8);
console.log(modifCM1(2));


//5. modification sur le même principe la function power()
//si reçoit 2 params n et x, elle retourne X^n, et si elle
// reçoit 1 seul param n, elle retourne une fonction
// qui met à la puissance n. Fonction de manière recursive


function modifRecursifPower(n,x){
  if(arguments.length==2){
    if(n!=0){
      return x*modifRecursifPower(n-1,x);
    } else return 1;
  }else if(arguments.length==1){
    return(x) => (modifRecursifPower(n, x))
  }
}
let mprr=modifRecursifPower(3);
mprr(2);
mprr(3);

//6. fonction formatter() qui construit une fonction de
// formatage de message en ajoutant un nº de message
// incrémenté à chaque appel.
function formatter(val){

  if(val>1){
    return ($phrase)=>((val++)+ $phrase);
  }
}
var format=formatter(10);
format(' ay pepito!');
console.log(format('la mer est rouge'));

//7. la fonction write() écrit le message
function write($phrase){
  return console.log($phrase);
}


function writeAlert(){
  let $msg;
  return $msg => console.log($msg);
}
write("hasta la vista baby")
alert('julio');
console.log(write("hasta la vista baby"));


//8.Fonction logger() qui reçoit en param. une fonction
//formatage() et une fonction d'écriture de msgs. retourne
// une fonction log qui reçoit un msg en param. le formate
// el l'écrite avec les fonctions passées en param.

function logger(funFormat, fWrite){
  return($mess)=>(fWrite(funFormat($mess)));
}
let f=formatter(11);
log= logger(f, alert);
log(' hotdog')
console.log(log(' hotdog'));
let log= logger(f,write);
log(' ohlala');
console.log(log(' ohlala'));
