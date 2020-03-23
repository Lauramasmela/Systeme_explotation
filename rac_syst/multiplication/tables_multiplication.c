#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>



void traitementDesTables(int m1, int m2)
{
  m1= rand();
  m2= rand();
  printf("Quelle est la valeur de %d fois %d? ", m1, m2);
}

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
