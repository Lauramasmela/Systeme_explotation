#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
//opérandes au hasard ->rand()
//  ->initialiser avec srand(time(NULL))
//pour sortir du programme CTRL-C
// CTRL-C provoquera l'affichage du score obtenu
//le programme s'arrête si + de 5 secondes à repondre
//privilegier variables globales
//compilation avec option -ansi
/************************/
//définir fonction sortie() -> elle affichera le score obtenu
//  ->mettra fin au programme.
// fonction: signal() autant que la fonction sigaction().
// scanf()
// fonctions: setjmp():





int main(){

  int ponctuation = 0;

  struct sigaction action;
  action.sa_handler = sortie;
  action.sa_flags = 0;
  sigemptyset(&action.sa_mask);
  sigaction(SIGINT, &action, NULL);
  sigaction(SIGQUIT, &action, NULL);
  sigaction(SIGTERM, &action, NULL);

  srand(time(NULL)) // pour initialiser rand()

  while(1){
    struct sigaction action;
    action.sa_handler = handler;

    pause(5);
    return 0;

  }

}
