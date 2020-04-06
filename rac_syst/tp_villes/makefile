CC = gcc
OBJS = main.o ville.o
CFLAGS = -ansi -Wall -pedantic -c -g -D_POSIX_C_SOURCE
LDFLAGS = 
PGM = ville

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o: 
	$(CC) $(CFLAGS) $<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	rm -f *~

