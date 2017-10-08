#include <cs50.h>
#include <stdio.h>

int main(void)
{
int height;
int currentRow;
int spaces;
int hashes;

do{
    printf("Height: ");
    height = get_int();
}

while (height < 0 || height >23);


for ( currentRow = 0; currentRow<height; currentRow++) {
    spaces = height - (currentRow + 1);
    hashes = (currentRow + 1);
    for (int i = 0; i<spaces;i++) {
        printf(" ");
    }
    for (int i = 0; i<hashes;i++) {
        printf("#");
    }
    printf("  ");
    for (int i = 0; i<hashes;i++) {
        printf("#");
    }
    printf("\n");
}

}
