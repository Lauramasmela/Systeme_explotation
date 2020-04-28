'use strict';
//1. écrire function qui reçoit un tableau et retourne un
//objet contenant 3 propriétés: le nb d'éléments, la somme
//des éléments et la moyenne des éléments.
let maClasse = {

  nbElements :0,
  somme:0,
  moyenne:0,

  sum : function(descriptionTab) {
    var total=0;
    descriptionTab.forEach((element)=> {total +=element;})
    return total;
  },

  moy : function(descriptionTab) {
    return this.sum(descriptionTab)/descriptionTab.length;
  },

  creerObjet: function(descriptionTab) {
    this.nbElements= descriptionTab.length;
    this.somme=this.sum(descriptionTab);
    this.moyenne= this.moy(descriptionTab);
  }

};

var testTab1=[1, 2, 3, 4, 5];
console.log("exo2.1");
maClasse.creerObjet(testTab1)
console.log(maClasse);
/****************************************/
//2. Creer sous forme de litteral un objet representant un etudiant.
//proprietes: numero, nom, prenom, dateNaiss, mail, notes.
// la valeur de la propriete dateNaiss est construite avec le constructeur dates.
// la valeur de la proprietet notes est un tableau vide.

/*let etudiant = {
  numero : 1,
  nom : 'Castano' ,
  prenom : 'Christophe', 
  dateNaiss : new Date('March 19, 1987 10:00:00'),
  mail : 'mailtest000@gmail.com',
  notes : [],

}

console.log(etudiant);
console.log(etudiant.mail);
console.log(etudiant.prenom);
console.log(etudiant.nom);
*/
/****************************************/
//3. Ajouter methode qui calcule l'age de l'etudiant
// Ajouter methode qui affiche: le nom, prenom et date N.
// Le nom est en majuscule
// la date est sous forme dd/mm/YYYY

let etudiant = {
  numero : 1,
  nom : 'Castano' ,
  prenom : 'Christophe', 
  dateNaiss : new Date('March 19, 1987 10:00:00'),
  mail : 'mailtest000@gmail.com',
  notes : [],

  calculerAge : function() {
    let difference;
    let age;
    console.log(this.dateNaiss)
    difference = Date.now() - this.dateNaiss.getTime();
    age = new Date(difference);
    return Math.abs(age.getUTCFullYear()-1970);
  },

  afficher : function() {

   console.log('nom : ' + this.nom.toUpperCase() + '\n' + 'prenom : '  
    + this.prenom.slice(0, 1).toUpperCase() + this.prenom.slice(1, this.prenom.length) 
    + '\n' + 'Date de Naissance : ' + this.dateNaiss.getDate() + '/' + (this.dateNaiss.getMonth()+1)
    + '/' + this.dateNaiss.getFullYear() );
 },

  //Question 4 (complement)
  ajouteNote : function(note){
    this.notes.push(note);
  },

  // Question 5
  calculerMoyenne : function(){

  let somme = 0;
  let moyenneElements=0;
  
  for(let i=0; i<this.notes.length; i++){
    somme += this.notes[i].valeur;
  }
  moyenneElements = somme/this.notes.length;
  return moyenneElements;

  }

};

console.log(etudiant.calculerAge());
etudiant.afficher();

/****************************************/
//4. Ajouter une methode  qui ajoute une note dans un mat à l'etud. 
// un nouveau objet avec 2 params, m (matiere) et n (note).
// ajouter cet objet dans le tableau de notes de l'etudiant.


function Note(m, n){
  this.matiere=m;
  this.valeur=n;
}

let n1 = new Note('maths', 10);
let n2 = new Note('dessin', 0);
let n3 = new Note('histoire', 14.5);
let n4 = new Note('francais', 11);
let n5 = new Note('EPS', 4);
let n6 = new Note('Phylosophie', 9);
etudiant.ajouteNote(n1);
etudiant.ajouteNote(n2);
etudiant.ajouteNote(n3);
etudiant.ajouteNote(n4);
etudiant.ajouteNote(n5);
etudiant.ajouteNote(n6);
console.log(etudiant.notes);

/****************************************/
//5. ajouter une methode qui calcule la moy de l'etudiant.
// Toutes les matieres coeff 1

//etudiant.calculerMoyenne();
console.log(etudiant.calculerMoyenne());



