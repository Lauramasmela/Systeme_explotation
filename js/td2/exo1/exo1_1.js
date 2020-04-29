'use strict';

//1. la fonction range(a,b)retourneun tableau contenant
// tous les entiers de a  a b (si a <=B) ou de
// b a a (si a > b).
console.log("Exercicie 1 " + "\n");
console.log("Question 1 ");


function range(a,b){
  if(a<=b){
    let tableau = [a];
    for(let i=a; i<=b; i++){
      tableau.push(i);
    }
    return tableau;
  }else{
    let tableau = [b];
    for(let i=b; i<=a; i++){
      tableau.push(i);
    }
    return tableau;
  }
}
console.log(range(3,1));
console.log(range(1,5));
console.log(range(2,9));
/****************************************/
// 2. function sum()
//qui reçoit un tableau d'entiers et
// retourne la somme des elements; ecrire
// *une version boucle for
console.log("Question 2 ");


function sum1(monTab){
  var somme = 0;
  for(let i=0; i<monTab.length; i++){
    somme = somme + monTab[i];
  }
  return somme;
}

var exemple11 = [1, 2 ,3, 4];

console.log("version avec for: ")
console.log(sum1(exemple11));

// *une version forEach()
function sum2(monTab){
  var somme = 0;
  monTab.forEach((element) => { somme += element;})
  return somme;
}
var exemple12 = [2, 3 ,4, 5];

console.log("version avec forEach: ")
console.log(sum2(exemple12));

// *une version avec reduce()

function sum3(monTab){
  let somme = (acc, element) => acc + element;
  return monTab.reduce(somme);
}

var exemple13 = [3, 4 , 5, 6];
console.log("version avec reduce: ")
console.log(sum3(exemple13));

/****************************************/
//3. fonction qui reçoit un tableau d'entiers
//et retourne la moyenne d'elements. ecrire
// une version for
console.log("Question 3 ");


function moyenneTab1(monTab){
  var somme = 0;
  var moyElements=0;
  
  
  for(let i=0; i<monTab.length; i++){
    somme += monTab[i];
    
  }
  moyElements = somme/monTab.length;
  return moyElements;
}

var exemple31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("version avec for: ")
console.log(moyenneTab1(exemple31));

// une version forEach()
function moyenneTab2(monTab){
  var somme = 0;
  let compteur=0;
  var moyElements =0;
  monTab.forEach((element) => {
    somme += element;
    compteur++; })

  moyElements=somme/compteur;
  return moyElements;
}

var exemple32 = [2, 4, 8, 10, 12];
console.log("version avec forEach: ")
console.log(moyenneTab2(exemple32));

// une version reduce()

function moyenneTab3(monTab){


  let somme = (acc, element) => acc + element;


  let sumTab=monTab.reduce(somme);

  return  sumTab/monTab.length;
}


var exemple33 = [3, 6, 9, 12, 15];

console.log("version avec reduce: ");
console.log(moyenneTab3(exemple33));
/****************************************/
//4.fonction qui reçoit un tableau de chaines de caracteres
// (t) et une chaine de caracteres (pattern), et qui
//retourne un tableau composé des chaînes de t qui
//comportent le motif pattern, mises en majuscule.
console.log("Question 4 ");


// utiliser foreach

function majusculePat(t, pattern) {
  //console.log("mP");
  let res = [];
  t.forEach(element => {
    let pos = element.search(pattern);
    //console.log(pos);
    //console.log(element);
    if (pos != -1){
      element=element.substring(0, pos) + pattern.toUpperCase() + element.substring(pos+pattern.length-1,element.length-1);
      //console.log(element);
      res.push(element);
    }
  });
  return res;
}


var motPat="asto";
var mot1=["canasto", "pasto", "coco", "sierra", "casto", "asto", "astoblabla", ""];

console.log("Version forEach");
console.log(majusculePat(mot1, motPat));

/****************************************/
//5. function chercher pattern et ajouter majuscule
console.log("Question 5 ");

function majusculePat5(t, pattern,testFctn,transFctn){
  let res = [];
  t.forEach((element) => {
    if(testFctn(element, pattern)){
      res.push(transFctn(element, pattern));
    }
  });
  return res;
}

function testFctn(element,pattern){
  return element.search(pattern)!=-1;
}

function transFctn(element,pattern){
  return element.substring(0, element.search(pattern) != -1)
  + pattern.toUpperCase()
  + element.substring(element.search(pattern) != -1+pattern.length-1,element.length-1);
}

var motPat="asto";
var mot1=["canasto", "pasto", "coco", "sierra", "casto", "asto", "astoblabla", ""];


console.log(majusculePat5(mot1, motPat, testFctn, transFctn));

/****************************************/
//6. ré-écrire la fonction 4
// utilisant filter() et map()

console.log("Question 6");

function majusculePat6(t, pattern){

  let maj=(element) => element.substring(0, element.search(pattern) != -1)
  + pattern.toUpperCase()
  + element.substring(element.search(pattern) != -1+pattern.length-1,element.length-1);

  let selec = (element) => element.search(pattern) != -1;
  return t.filter(selec).map(maj);
}

var motPat="asto";
var mot1=["canasto", "pasto", "coco", "sierra", "casto", "asto", "astoblabla", ""];
console.log("majusculePat6 ")
console.log(majusculePat6(mot1, motPat));
