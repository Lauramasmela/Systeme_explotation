/*Inclusion d'une librairie standard */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>


/*INCLUSION DE LA BIBLIO PERSO ETUDIANT.h*/
#include "ville.h"

/*CONSTANTES DEJA DANS LA BIBLIO*/

/*FONCTIONS DE LISTE*/

/* Fonction de lecture de fichier et de stockage dans la structure d�finie */
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

    while (fscanf(fv,"%s\t%s\n", nom, postal)==2){
        tete = ville_liste_teteinserer(tete, nom, postal);
    }


    fclose(fv);
    return tete;
}

/* Afficher tous les noms de ville partageant un m�me code postal */
/* affiche: code postal + chaque ville par ligne */
void ville_liste_rechercher(Liste tete)
{
    Liste lCourant;


    if(tete==NULL)
		printf("Pas de villes !\n");

    /* variables de fonction */
    ville_liste_trier(tete);

    lCourant=tete;

    /* Recherche et affichage des villes de m�me code */
    while(lCourant != NULL){
        while(lCourant->suc != NULL) {
            if(strcmp(lCourant->code,lCourant->suc->code)==0){
                printf("%s\n", lCourant->code);
                printf("%s\n", lCourant->ville);
                while( (strcmp(lCourant->code,lCourant->suc->code)==0)
                            && lCourant->suc->suc!=NULL){
                    printf("%s\n", lCourant->suc->ville);
                    lCourant = lCourant->suc;
                }
                if(lCourant->suc->suc==NULL){
                    if(strcmp(lCourant->code,lCourant->suc->code)==0){
                        printf("%s\n", lCourant->suc->ville);
                    }
                    else{
                        printf("%s\n", lCourant->suc->code);
                        printf("%s\n", lCourant->suc->ville);
                    }
                }
            }
            lCourant=lCourant->suc;
        }
    }

    /*
    while(lCourant->suc!=NULL){
        if(strcmp(lCourant->code,lCourant->suc->code)==0){
            printf("%s\n", lCourant->code);
            printf("%s\n", lCourant->ville);
            while(strcmp(lCourant->code,lCourant->suc->code)==0){
                printf("%s\n", lCourant->suc->ville);
                lCourant = lCourant->suc;
            }
        }
        lCourant = lCourant->suc;
    }
    */
}



/* Trie la liste selon les codes pour faciliter la recherche */
void ville_liste_trier(Liste tete)
{
    int pasfini;
    Liste ltemp1;
    Liste ltemp2 = NULL;

    if (tete == NULL) {
        printf("Liste de villes vide !");
        exit(1);
    }

    do
    {
        pasfini = 0;
        ltemp1 = tete;

        while (ltemp1->suc != ltemp2)
        {
            if (strcmp(ltemp1->code, ltemp1->suc->code)>0)
            {
                ville_liste_swap(ltemp1, ltemp1->suc);
                pasfini = 1;
            }
            ltemp1 = ltemp1->suc;
        }
        ltemp2 = ltemp1;
    }
    while (pasfini);
}


/* Echange deux cellules */
void ville_liste_swap(Liste a, Liste b)
{
    char tempville[VILLE_TAILLE_MAX];
    char tempcode[CODE_TAILLE_MAX];
    strcpy(tempville, a->ville);
    strcpy(tempcode, a->code);
    strcpy(a->ville, b->ville);
    strcpy(a->code, b->code);
    strcpy(b->ville, tempville);
    strcpy(b->code, tempcode);
}

/* Initialise la liste */
Liste ville_liste_initialiser()
{
  return(NULL);
}

/* V�rifie si liste vide */
int ville_liste_vide(Liste tete)
{
  return (tete == NULL);
}

/* Inserer en queue pour garder l'ordre de la liste, comme une pile */
Liste ville_liste_queueinserer(Liste tete, char* v, char* c)
{
    Liste lCourante=NULL;
    /*allocation m�moire de la case queue*/
    Liste q = (Liste)malloc(sizeof(TypeCellule));

    /*si liste vide, on insere en queue = inserer en tete !*/
    if(!tete)
        return ville_liste_teteinserer(tete, v, c);

    if (q == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }

    /*dans tous les cas, case cr��e avec valeur et pas de suivant*/
    strcpy(q->ville, v);
    strcpy(q->code, c);
    q->suc = NULL;

    lCourante = tete;

    /*recherche du dernier �lt courant*/
    while (lCourante->suc != NULL) {
        lCourante = lCourante->suc;
    }
    /*MAJ chainage: l'avant-dernier �lt pointe mtnt vers le dernier*/
    lCourante->suc = q;
    return tete;
}

/* Ajout d'un �l�ment en t�te de liste */
Liste ville_liste_teteinserer(Liste tete, char* v, char* c)
{
    Liste t = (Liste)malloc(sizeof(TypeCellule));
    if (t == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }
    strcpy(t->ville, v);
    strcpy(t->code, c);
    t->suc = tete;

    return (t);
}


/* Suppression d'un �l�ment en t�te de liste */
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
