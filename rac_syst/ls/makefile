CC = gcc
OBJS = ls_exo.o
CFLAGS = -c -g -Wall -ansi -pedantic 
LDFLAGS = 
PGM = ls_exo

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o: 
	$(CC) $(CFLAGS) $<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	rm -f *~

