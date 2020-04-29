  'use strict';
  //1. écrire function qui reçoit un tableau et retourne un
  //objet contenant 3 propriétés: le nb d'éléments, la somme
  //des éléments et la moyenne des éléments.
  console.log("Question 1");

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



  /******************* A rendre *********************/
    // Question 2

    let etudiant = {
      numero : 1,
      nom : 'Castano' ,
      prenom : 'Christophe', 
      dateNaiss : new Date('March 19, 1987 10:00:00'),
      mail : 'mailtest000@gmail.com',
      notes : [],

    //Question 3 (calculer age et afficher)
    calculerAge : function() {
      let difference;
      let age;
      
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

  /****************************************/
  //2. Creer sous forme de litteral un objet representant un etudiant.
  //proprietes: numero, nom, prenom, dateNaiss, mail, notes.
  // la valeur de la propriete dateNaiss est construite avec le constructeur dates.
  // la valeur de la proprietet notes est un tableau vide.

  console.log("Question 2");

  console.log(etudiant);
  console.log(etudiant.mail);
  console.log(etudiant.prenom);
  console.log(etudiant.nom);

  /****************************************/
  //3. Ajouter methode qui calcule l'age de l'etudiant
  // Ajouter methode qui affiche: le nom, prenom et date N.
  // Le nom est en majuscule
  // la date est sous forme dd/mm/YYYY
  console.log("Question 3");

  console.log("Age : ");
  console.log(etudiant.calculerAge());

  console.log("Affichage : ");
  etudiant.afficher();

  /****************************************/
  //4. Ajouter une methode  qui ajoute une note dans un mat à l'etud. 
  // un nouveau objet avec 2 params, m (matiere) et n (note).
  // ajouter cet objet dans le tableau de notes de l'etudiant.

  console.log(" Question 4 ");

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
  console.log("Question 5 ");
  console.log(etudiant.calculerMoyenne());

  /****************************************/
  //6. Créer un constructeur d'etudiants: il doit produire des 
  //objets ayant la même structure.
  // Le methodes doivent être définies dans le prototype.
  console.log("Question 6 ");

  function Etudiant(num, nF, pren, dateN, adMail){
    this. numero = num;
    this.nom = nF;
    this.prenom = pren;
    this.dateNaiss = new Date(dateN);
    this.mail = adMail;
    this.notes = [];
  }

  // affichage de l'objet
  console.log("Affichage de l'objet ");
  let e1 = new Etudiant(3, 'martinez', 'julio','19 Mars 2000', 'ask@gmail.com');
  console.log(e1);

  // methode qui calcule l'age
  console.log("Age : ");

  Etudiant.prototype.calculerAge = function(){
   let difference;
   let age;
   
   difference = Date.now() - this.dateNaiss.getTime();
   age = new Date(difference);
   return Math.abs(age.getUTCFullYear()-1970);
 };

 console.log(e1.calculerAge());


  //methode qui affiche
  console.log("Affichage : ");

  Etudiant.prototype.afficher = function(){

   console.log('nom : ' + this.nom.toUpperCase() + '\n' + 'prenom : '  
    + this.prenom.slice(0, 1).toUpperCase() + this.prenom.slice(1, this.prenom.length) 
    + '\n' + 'Date de Naissance : ' + this.dateNaiss.getDate() + '/' + (this.dateNaiss.getMonth()+1)
    + '/' + this.dateNaiss.getFullYear() );
 };

 e1.afficher();

  //methode qui ajoute les notes
  console.log("Ajout de notes : ");

  Etudiant.prototype.ajouteNote = function(note){
    this.notes.push(note);
  };

  let e2 = new Etudiant(4, 'jaz', 'jesus','9 Mars 2004', 'ja@gmail.com');
  let e3 = new Etudiant(5, 'roscas', 'rosita','9 mars 2003', 'pastoi@gmail.com');
  let e4 = new Etudiant(7, 'junior', 'jean','9 septembre 2000', '123@gmail.com');


  let n9 = new Note('maths', 12);
  let n10 = new Note('dessin', 11);
  let n11 = new Note('histoire', 16.5);


  e2.ajouteNote(n9);
  e2.ajouteNote(n10);
  e2.ajouteNote(n11);

  console.log(e2.notes);


  //methode qui calcule la moyenne
  console.log("Calcule de moyenne : ");

  Etudiant.prototype.calculerMoyenne = function(){
    let somme = 0;
    let moyenneElements=0;
    
    for(let i=0; i<this.notes.length; i++){
      somme += this.notes[i].valeur;
    }
    moyenneElements = somme/this.notes.length;
    return moyenneElements;

  }

  console.log(e2.calculerMoyenne());

  /****************************************/
  //7. fonction qui reçoit un tab d'etudiants et un No de mois
  // retourne un tableau contenant la liste des etudiants dont l'anniv
  // a lieu durant le mois indique.
  // etapes: 1. parcourir la liste d'etudiants, 
  //  2. comparer les datesN.mois, 3. ajouter cet etud
  // dans une nouvelle liste, 
  // 4. sortir la liste en forme de tab
  console.log("Question 7");


  function listeEtu(etuTab, noMois){
    let res = [];
    let mois;
    etuTab.forEach(element => {
      mois = element.dateNaiss.getMonth()+1;
      if(mois === noMois){
        res.push(element.nom);
      }

    });
    return res; 
  }

  let t1 = [e2, e3, e4];

  console.log(listeEtu(t1, 3));

  /****************************************/
  //8. Créer une fonction qui retourne la liste des etudiants ayant 
  // plus d'un age donne.
  console.log("Question 8");

  function comparerAge(etuTab, ageAComparer){
    let res = [];
    let ageCour;

    etuTab.forEach(element => {
      let ageCour = element.calculerAge();
      if(ageCour > ageAComparer){
        res.push(element.nom);
      }
    });
    return res;
  }

  console.log(comparerAge(t1, 18));

  /****************************************/
  //9. Constructeur d'objets correspondant à un groupe d'etudiants
  // Un groupe d'etu contient les proprietes : 
  // nomgrp, formation, liste, annee.
  console.log("Question 9");

  function GroupEtudiants(nom, f, l, a){
    this.nomgpe = nom;
    this.formation = f;
    this.liste = l;
    this.annee = a;
  }

  /****************************************/
  //10. methodes pour: ajouter un etudiant au groupe, compter les etudiants
  // d'un groupe, calculer la moyenne generale de chaque etudiant du
  // groupe.
  console.log("Question 10"); 

  GroupEtudiants.prototype.ajouterEtudiant = function (etud) {
    this.liste.push(etud);
    
  }

  GroupEtudiants.prototype.compterEtudiants = function (){
    return this.liste.length;
  }

  GroupEtudiants.prototype.moyenneEtudiant = function (){

    let moyTab = [];
    let moyenne;
    this.liste.forEach(element => {

      moyenne = element.calculerMoyenne();
      moyTab.push(moyenne);
      
    });

    return moyTab;
  }

  // creation d'un groupe
  let gE1 = new GroupEtudiants('los perritos', 'annee special', t1, '2020');
  console.log(gE1);


  //création d'un nouveau étudiant
  let e7 = new Etudiant(3, 'sachot', 'pedrito','19 Mars 2000', 'lalalala@gmail.com');
  console.log(e7);

  //ajoute de notes aux étudiants crees precedement
  e7.ajouteNote(n10);
  e3.ajouteNote(n10);
  e4.ajouteNote(n10);


  //ajoute d'etudiant e7 au groupe

  gE1.ajouterEtudiant(e7);
  console.log(gE1);

  //test compter etudiants
  console.log("Compter etudiants du groupe : ");
  console.log(gE1.compterEtudiants());


  //test calcule moyenne de chaque etudiant.
  console.log("Moyenne de chaque etudiant : ");
  console.log(gE1.moyenneEtudiant());



