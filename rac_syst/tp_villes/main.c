#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/*INCLUSION DE LA BIBLIO PERSO ville.h*/
#include "ville.h"

int main ()
{
    Liste l;
    char f[18];
    char postal[CODE_TAILLE_MAX];

    /* initialisation */
    l = ville_liste_initialiser();

    /* insertion du fichier */
    strcpy(f, "fichier_ville.txt");
    l = ville_lire_fichier(l, f);

    /* recherche et affichage */
    strcpy(postal, "54");
    ville_liste_rechercher(l, postal);

    /* liberation */
    l = ville_liste_liberer(l);

  return 0;
}
