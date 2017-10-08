#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main(int argc, string argv[])
{
//Exit with 1 when there is not exactly one command-line argument.
    if (argc != 2)
    {
      printf("Pleace execute the program with one commnd-line argument.");
        return 1;
    }

//Key which is provided via command-line argument. Example: ./ceasar 2
int k = atoi(argv[1]);

//Get input
printf("plaintext: ");
string s = get_string();

printf("ciphertext: ");
//iterate over each char of string s and cipher it.
for (int i = 0, n = strlen(s); i<n; i++){
    int t;
    //skip non-alphabetical characters
    if(!isalpha(s[i])){
        printf("%c", s[i]);
    }
    //preserve case
    if(isalpha(s[i])) {
        if(isupper(s[i])) {
             t = ((((s[i] - 65) + k) % 26) + 65);
        } else {
            s[i] = toupper(s[i]);
                t = ((((s[i] - 65) + k) % 26) + 65);
            t = tolower(t);
        }
        printf("%c", t); // t = 87 = W ?
    }

}
printf("\n");
return 0;
}
