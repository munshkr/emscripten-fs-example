#include <stdio.h>

#define CHUNK 1024

// This stupid program reads a file and writes it to another.

int main(int argc, char *argv[])
{
    if (argc != 3) {
        printf("Usage: %s IN OUT\n", argv[0]);
        return 1;
    }

    // Open input file for reading
    FILE *inf = fopen(argv[1], "r");
    if (!inf) {
        printf("Failed to open %s\n", argv[1]);
        return 1;
    }

    // Open output file for writing
    FILE *outf = fopen(argv[2], "w");
    if (!outf) {
        printf("Failed to open %s\n", argv[2]);
        fclose(inf);
        return 1;
    }

    char buf[CHUNK];
    size_t nread;

    // Do the actual copying
    while ((nread = fread(buf, 1, sizeof(buf), inf)) > 0) {
        fwrite(buf, 1, nread, outf);
    }

    // Check whether there was an error reading or writing to some file
    if (ferror(inf) || ferror(outf)) {
        printf("Failed to read or write files\n");
        fclose(inf);
        fclose(outf);
        return 1;
    }

    return 0;
}
