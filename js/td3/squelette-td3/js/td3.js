'use strict';

/***********************************************/
//1. Gestion du click:
//
function logClick (event){
	console.log("click");
}


window.addEventListener("load", () => {
	let ex1 = document.querySelector("#ex1");
	ex1.addEventListener("click", logClick);
});

	
/***********************************************/
//2. Changement d'apparence:
//Modifier l'apparience du boutton "#ex1" à chaque click
//Ecrire er assotier une fonction updateButtonClass comme
//handler de l'évènement "click sur le bouton "#ex1".

function updateButtonClass(event){
	event.target.classList.toggle("c1");
	event.target.classList.toggle("c2");
}

window.addEventListener("load", () => {
	let ex1 = document.getElementById("ex1");
	ex1.addEventListener("click", logClick);
    ex1.addEventListener("click", updateButtonClass);
});

/***********************************************/
//3. Insertion dans le dom:
// Programmer une fonction qui insère un item contenant
// le texte "click bouton :" à la fin de la liste "#ex3" presente 
// dans l'esquelette. Modifier le programme pour que le texte
// insere contienne un compteur de clicks:

function compteur(n) {
    let c = n;
    return (event) => {
       let ul = document.querySelector("ul#ex2");
       let li = document.createElement("li");
       let t = document.createTextNode(`click bouton : ${c++}`);
       li.appendChild(t);
       ul.appendChild(li);
    };
}

window.addEventListener("load", () => {
    let ex1 = document.getElementById("ex1");
    ex1.addEventListener("click", logClick);
    ex1.addEventListener("click", updateButtonClass);
    ex1.addEventListener("click", compteur(1));
});

/***********************************************/
//4. Suppressions dans le dom :
// function qui supprime tous les items de la liste "#ex3"
// associer à l'évènement !click du bouton "#ex4"
function clearList(event){
	return (event) => {
		let a = document.querySelector("ul#ex2");
		let b = document.querySelectorAll("li");
		for(let i=0; i<b.length; i++){
			a.removeChild(b[i]);
		}
		console.log("elements supprimés");
	};
}

window.addEventListener("load", () => {
    let ex1 = document.getElementById("ex1");
    ex1.addEventListener("click", logClick);
    ex1.addEventListener("click", updateButtonClass);
    ex1.addEventListener("click", compteur(1));
    ex1.addEventListener("click", clearList());

});	

/***********************************************/
//5. Modification d'un champ :
//function 

