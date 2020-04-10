'use strict';

//1. la fonction range(a,b)retourneun tableau contenant
// tous les entiers de a  a b (si a <=B) ou de
// b a a (si a > b).

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
console.log(range(2, 9));
//
//
//
