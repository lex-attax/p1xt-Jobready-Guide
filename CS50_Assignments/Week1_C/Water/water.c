#include <cs50.h>
#include <stdio.h>

int main(void)
{
    printf("Length of shower in Minutes: ");
    int x = get_int();
    printf("Minutes: %i\n", x);

    int y = x * 12;
    printf("Bottles: %i\n", y);
}
