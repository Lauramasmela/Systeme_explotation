#ifndef VILLE_H
#define VILLE_H


/* Déclaration de constantes */

#define VILLE_TAILLE_MAX 50
#define CODE_TAILLE_MAX 6


/* Déclaration d'une structure de type Etudiant_Etudiant */

typedef struct Cellule {
    char code[CODE_TAILLE_MAX];
    struct Cellule *suc;
    char ville[VILLE_TAILLE_MAX];
} TypeCellule ;

typedef struct Cellule *Liste;

/* Fonction de lecture de fichier et de stockage dans la structure définie */
Liste ville_lire_fichier(Liste tete, char* fichier);

/* Afficher tous les noms de ville partageant un même code postal */
void ville_liste_rechercher(Liste tete);

/* Trie la liste selon les codes pour faciliter la recherche */
void ville_liste_trier(Liste tete);

/* Echange deux cellules */
void ville_liste_swap(Liste a, Liste b);

/* Initialise la liste */
Liste ville_liste_initialiser();

/* Vérifie si liste vide */
int ville_liste_vide(Liste tete);

/* Inserer en queue pour garder l'ordre de la liste, comme une pile */
Liste ville_liste_queueinserer(Liste tete, char*, char* c);

/* Ajout d'un élément en tête de liste */
Liste ville_liste_teteinserer(Liste tete, char* v, char* c);

/* Suppression d'un élément en tête de liste */
Liste ville_liste_tetesupprimer(Liste tete);

/* Libere la memoire quand le programme est fini */
Liste ville_liste_liberer(Liste tete);

#endif
