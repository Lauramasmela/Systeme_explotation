#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>

int main(){
  
  DIR* repertoire_dossier;
  struct dirent* dossier_lecture= NULL;
  repertoire_dossier =opendir("./");

  if(repertoire_dossier == NULL){
    exit(1);
  }

  dossier_lecture = readdir(repertoire_dossier);

}
