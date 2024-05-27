let questions = [
    {
        num: 1,
        question: "Who is the father of C language?",
        answer:" C. Dennis Ritchie",
        options: [
            " A. Steve Jobs",
            " B. James Gosling",
            " C. Dennis Ritchie",
            " D. Rasmus Lerdorf"
        ]
    },
    {
        num: 2,
        question: "Which of the following does not represent a valid storage class in C?",
        answer: " A . Union",
        options: [
            " A . Union",
            " B . Static",
            " C . Extern",
            " D . Automatic"
        ]
    },
    {
        num: 3,
        question: "When fopen() is not able to open a file, then it returns",
        answer: " C . Compiler Dependent",

        options: [
            " A . EOF",
            " B . NULL",
            " C . Compiler Dependent",
            " D . Runtime Error"
        ]
    },
    {
        num: 4,
        question: "What will be x in the following c code? #include void main() {  int x; }",
        answer: " C . Integer Variable",

        options: [
            " A . Static Variable ",
            " B . Glabal Variable",
            " C . Integer Variable",
            " D . Registered Variable"
        ]
    },
    {
        num: 5,
        question: "According to ANSI specifications which is the correct way of declaring main when it receives command-line arguments?",
        answer: " C . Int main(int argc,char *argv[])",
        options: [
            " A . Int main {argc,argv)int argc; char *argv;",
            " B . Int main(){int argc ; char *argv);",
            " C . Int main(int argc,char *argv[])",
            " D . None"
        ]
    },
      {
        num: 6,
          question: "The operators . , !! , < , = if arranged in ascending order of precedence reads",
          answer: " A . =,!!,<,.",
        options: [
            " A . =,!!,<,.",
            " B . =,<,!!,.",
            " C . <,!!,=,.",
            " D . .,!!,<,="
        ]
    },

    {
        num: 7,
        question: "A pointer is a C which has not been initialized is know as:",
        answer: " B . Wild POinter",
        options: [
            " A . Far Pointer",
            " B . Wild POinter",
            " C . Void Pointer",
            " D . Null Pointer"
        ]
    },

    {
        num: 8,
        question: "Which of the following is not a standard C Library?",
        answer: " B . Retarg.h",
        options: [
            " A . Setjmp.h",
            " B . Retarg.h",
            " C . Signal.h",
            " D . Error.h"
        ]
    },
    {
        num: 9,
        question: "What does HTML stands for?",
        answer: " B . Hyper Test Markup Language",
        options: [
            " A . Hyper Tesr la ",
            " B . Hyper Test Markup Language",
            " C . Hyper Test",
            " D . Hyper"
        ]
    },
    {
        num: 10,
        question: "What is the primary function of the main() function in a C program?",
        answer:" D . Entry point of the program",
        options: [
            " A . Display output ",
            " B . Receive input",
            " C . Initialize variables",
            " D . Entry point of the program"
        ]
    },
    {
        num: 11,
        question: "Which of the following is not a valid variable name in C?",
        answer:" B . 1stVariable",
        options: [
            " A . my_variable ",
            " B . 1stVariable",
            " C . variable_2",
            " D . myVariable"
        ]
    },
    {
        num: 12,
        question: "What is the size of an integer in C programming language on a 32-bit system?",
        answer:" B . 4 bytes",
        options: [
            " A . 2 bytes",
            " B . 4 bytes",
            " C . 8 bytes",
            " D . Depends on the compiler"
        ]
    },
    // {
    //     num: 13,
    //     question: "Which header file is used to perform input and output operations in C?",
    //     answer: " A . <stdio.h> ",
    //     options: [
    //         " A . <stdio.h> ",
    //         " B . <stdlib.h>",
    //         " C . <math.h>",
    //         " D . <ctype.h>"
    //     ]
    // },

    {
        num: 14,
        question: "What is the correct way to declare a constant in C?  ",
        answer: " A . const int PI = 3.14159;",
        options: [
            " A . const int PI = 3.14159;",
            " B . constant PI = 3.14159;",
            " C . #define PI 3.14159",
            " D . int const PI = 3.14159;"
        ]
    },
    {
        num: 15,
        question: "In C, what does the '++' operator do when placed before a variable?",
        answer: " C . Increments the variable",
        options: [
            " A . Decrements the variable",
            " B . Multiplies the variable by 2",
            " C . Increments the variable",
            " D . Shifts the variable by one bit to the left"
        ]
    },

      {
        num: 16,
        question: "Which of the following is not a valid data type in C?",
        answer:" B . real",
        options: [
            " A . float",
            " B . real",
            " C . double",
            " D . long double"
        ]
    },

    {
        num: 17,
        question: "Which function is used to dynamically allocate memory in C?",
        answer:" D . All of the above",
        options: [
            " A . malloc()",
            " B . calloc()",
            " C . realloc()",
            " D . All of the above"
        ]
    },

    {
        num: 18,
        question: "What does the sizeof operator return in C?",
        answer: " C . Size in bytes of a variable or type",
        options: [
            " A . Value of the variable",
            " B . Number of elements in an array",
            " C . Size in bytes of a variable or type",
            " D . Address of the variable"
        ]
    },

    {
        num: 19,
        question: "What is the correct syntax for the ternary conditional operator in C?",
        answer: " A . condition ? expression1 : expression2",
        options: [
            " A . condition ? expression1 : expression2",
            " B . condition, expression1, expression2",
            " C . condition - expression1 - expression2",
            " D . expression1 ? condition : expression2"
        ]
    },

    {
        num: 20,
        question: "How do you access the nth element of an array in C?",
        answer:" A . array[n]",
        options: [
            " A . array[n]",
            " B . array(n)",
            " C . array.n",
            " D . array[n-1]"
        ]
    },

    {
        num: 21,
        question: "What does the sizeof operator return when used with an array?",
        answer:" C . Size of the array in bytes",
        options: [
            " A . Size of each element in the array",
            " B . Total number of elements in the array",
            " C . Size of the array in bytes",
            " D . Address of the first element in the array"
        ]
    },

    {
        num: 22,
        question: "What is the correct way to declare a function in C that takes no arguments and returns an integer?",
        answer:" A . int function(void);",
        options: [
            " A . int function(void);",
            " B . function(int);",
            " C . void function();",
            " D . int function();"
        ]
    },

    {
        num: 23,
        question: "What is the correct way to include a header file named 'myheader.h' in a C program?",
        answer:" B . #include 'myheader.h'",
        options: [
            " A . #include <myheader.h>",
            " B . #include 'myheader.h'",
            " C . include <myheader.h>",
            " D . 'myheader.h'"
        ]
    },

    {
        num: 24,
        question: "Which of the following is used to define a macro in C?",
        answer:" C . #define",
        options: [
            " A . define",
            " B . macro",
            " C . #define",
            " D . $define"
        ]
    },

    {
        num: 25,
        question: "In C, what does the '->' operator do?",
        answer:" C . Accesses a member of a structure through a pointer",
        options: [
            " A . Accesses the address of a variable",
            " B . Dereferences a pointer",
            " C . Accesses a member of a structure through a pointer",
            " D . Performs logical AND operation"
        ]
    },

    {
        num: 26,
        question: "Which of the following is not a valid way to initialize a character array?",
        answer:" B) char str[6] = {'H', 'e', 'l', 'l', 'o'};",
        options: [
            " A . char str[] = 'Hello';",
            " B . char str[6] = {'H', 'e', 'l', 'l', 'o'};",
            " C . char str[] = {'H', 'e', 'l', 'l', 'o', '\0'};",
            " D . char str[6] = 'Hello';"
        ]
    },

    {
        num: 27,
        question: "Which of the following is not a valid bitwise operator in C?",
        answer:" B . ||",
        options: [
            " A .  &",
            " B . ||",
            " C .  ^",
            " D .  <<"
        ]
    },

    {
        num: 28,
        question: "Which of the following is not a valid loop in C?",
        answer:" C . until loop",
        options: [
            " A . for loop",
            " B . while loop",
            " C . until loop",
            " D . do-while loop"
        ]
    },

    {
        num: 29,
        question: "What is the correct syntax to declare a structure in C?",
        answer: " C . struct x { int x; };",
        options: [
            " A . struct { int x; };",
            " B . structure { int x; };",
            " C . struct x { int x; };",
            " D . typedef struct { int x; } myStruct;"
        ]
    },

    {
        num: 30,
        question: "What is the correct way to compare two strings in C?",
        answer:" A .  strcmp(string1, string2)",
        options: [
            " A .  strcmp(string1, string2)",
            " B . string1 == string2",
            " C . compare(string1, string2)",
            " D . strcompare(string1, string2)"
        ]
    },


      
]