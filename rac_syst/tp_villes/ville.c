/*Inclusion d'une librairie standard */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>


/*INCLUSION DE LA BIBLIO PERSO ETUDIANT.h*/
#include "ville.h"

/*CONSTANTES DEJA DANS LA BIBLIO*/

/*FONCTIONS DE LISTE*/

/* Fonction de lecture de fichier et de stockage dans la structure définie */
Liste ville_lire_fichier(Liste tete, char* fichier)
{
    FILE * fv = fopen(fichier, "r");
    char nom[VILLE_TAILLE_MAX];
    char postal[CODE_TAILLE_MAX];

    if (fv==NULL)
    {
        printf("Fichier introuvable");
        return 0;
    }
    while (fscanf(fv,"%s %s", nom, postal)==1){
        tete = ville_liste_queueinserer(tete, nom, postal);
    }

    fclose(fv);
    return tete;
}

/* PROBLEME : COMMENT CHERCHER QUE SUR LES DEUX PREMIERS CHIFFRES DES CODES POSTAUX ???? */

/* Afficher tous les noms de ville partageant un même code postal */
/* affiche: code postal + chaque ville par ligne */
void ville_liste_rechercher(Liste tete, char* c)
{
    Liste lCourant;

    if(tete==NULL)
		printf("Pas de villes !");

    /* variables de fonction */
    lCourant = tete;

    printf("%s\n", c);
    /* Recherche */
    while(lCourant!=NULL){
        if(strstr(lCourant->code, c)!=NULL){
            printf("%s\n", lCourant->ville);
        }
        lCourant = lCourant->suc;
    }
}

/* Initialise la liste */
Liste ville_liste_initialiser()
{
  return(NULL);
}

/* Vérifie si liste vide */
int ville_liste_vide(Liste tete)
{
  return (tete == NULL);
}

/* Inserer en queue pour garder l'ordre de la liste, comme une pile */
Liste ville_liste_queueinserer(Liste tete, char v[], char c[])
{
    Liste lCourante=NULL;
    /*allocation mémoire de la case queue*/
    Liste q = (Liste) malloc(sizeof(TypeCellule));

    /*si liste vide, on insere en queue = inserer en tete !*/
    if(!tete)
        return ville_liste_teteinserer(tete, v, c);

    if (q == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }

    /*dans tous les cas, case créée avec valeur et pas de suivant*/
    strcpy(q->ville, v);
    strcpy(q->code, c);
    q->suc = NULL;

    lCourante = tete;

    /*recherche du dernier élt courant*/
    while (lCourante->suc != NULL) {
        lCourante = lCourante->suc;
    }
    /*MAJ chainage: l'avant-dernier élt pointe mtnt vers le dernier*/
    lCourante->suc = q;
    return tete;
}

/* Ajout d'un élément en tête de liste */
Liste ville_liste_teteinserer(Liste tete, char v[], char c[])
{
    Liste t = (Liste) malloc(sizeof(TypeCellule));
    if (t == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }
    strcpy(t->ville, v);
    strcpy(t->code, c);
    t->suc = tete;

    return (t);
}


/* Suppression d'un élément en tête de liste */
Liste ville_liste_tetesupprimer(Liste tete)
{
    Liste t = NULL;

    if (!ville_liste_vide(tete)) {
        t = tete->suc;
        free(tete);
    }

    return (t) ;
}

/* Libere la memoire quand le programme est fini */
Liste ville_liste_liberer(Liste tete)
{
    while(!ville_liste_vide(tete)){
        tete = ville_liste_tetesupprimer(tete);
    }
    return tete;
}
