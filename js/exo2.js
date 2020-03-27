'use strict';
//création d'une fonction multiplicateur
//qui reçoit un parametre entier n et retourne
//une fonction qui multiplie son parametre x par n.



function creerMultplicateur(n){
  return (x)=>(x*n);
}

let multip= creerMultplicateur(2);
multip(5);
