'use strict';
function min(a, b){
  return (a < b)? a : b;
}

function max(a, b){
  if(a > b){
    return a;
  }else{
    return b;
  }
}

console.log("Minimum entre 2 et 8 : " + min(2, 8));
console.log("Minimum entre 8 et 2 : " + min(8, 2));
console.log("Maximum entre 2 et 8 : " + max(2, 8));
console.log("Maximum entre 8 et 2 : " + min(8, 2));
