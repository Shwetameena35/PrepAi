let questions = [
    {
        num: 1,
        question: "Who is the father of C++ language?",
        answer:" D. Bjarne Stroustrup",
        options: [
            " A. Steve Jobs",
            " B. James Gosling",
            " C. Dennis Ritchie",
            " D. Bjarne Stroustrup"
        ]
    },
    {
        num: 2,
        question: "Which of the following is not a fundamental data type in C++?",
        answer: " D . string",
        options: [
            " A . float",
            " B . boolean",
            " C . char",
            " D . string"
        ]
    },
    {
        num: 3,
        question: "What is the keyword used to define a constant in C++",
        answer: " C . const",

        options: [
            " A . constant",
            " B . final",
            " C . const",
            " D . constexpr"
        ]
    },
    {
        num: 4,
        question: "What does the 'cin' object in C++ represent?",
        answer: " B . Standard input stream",

        options: [
            " A . Standard output stream ",
            " B . Standard input stream",
            " C . Error stream",
            " D . File stream"
        ]
    },
    {
        num: 5,
        question: "Which operator is used to dynamically allocate memory in C++?",
        answer:  " A . new",
        options: [
            " A . new",
            " B . alloc",
            " C . malloc",
            " D . allocate"
        ]
    },
      {
        num: 6,
          question: "What is the function of 'endl' in C++?",
          answer: " D . Inserts a newline character and flushes the buffer",
        options: [
            " A . Ends the program",
            " B . Ends a loop",
            " C .  Ends a statement",
            " D . Inserts a newline character and flushes the buffer"
        ]
    },

    {
        num: 7,
        question: "Which keyword is used to indicate the beginning of a class definition in C++?",
        answer: " D . object",
        options: [
            " A . class",
            " B . begin",
            " C . struct",
            " D . object"
        ]
    },

    {
        num: 8,
        question: "What is the result of adding a floating-point number and an integer in C++?",
        answer:  " B . The result is always a floating-point number",
        options: [
            " A . Error",
            " B . The result is always a floating-point number",
            " C . The result is always an integer",
            " D . Depends on the values involved"
        ]
    },
    {
        num: 9,
        question: "Which type of inheritance is not supported in C++?",
        answer:" D . Hybrid inheritance",
        options: [
            " A . Single inheritance",
            " B . Multiple inheritance",
            " C . Hierarchical inheritance",
            " D . Hybrid inheritance"
        ]
    },
    {
        num: 10,
        question: "What is the purpose of the 'virtual' keyword in C++?",
        answer: " C . To allow function overriding in derived classes",
        options: [
            " A . To define a constant value",
            " B . To specify a pure virtual function",
            " C . To allow function overriding in derived classes",
            " D . To declare a class as abstract"
        ]
    },
    {
        num: 11,
        question: "Which type of loop is more appropriate when the number of iterations is known?",
        answer: " A . for loop ",
        options: [
            " A . for loop ",
            " B . while loop",
            " C . do-while loop",
            " D . All are equally appropriate"
        ]
    },
    {
        num: 12,
        question: "What is the purpose of the 'break' statement in C++?",
        answer: " A . To exit a loop or switch statement",
        options: [
            " A . To exit a loop or switch statement",
            " B . To skip the current iteration of a loop",
            " C . To end the program execution",
            " D . To terminate the current function"
        ]
    },
    {
        num: 13,
        question: "Which of the following is the correct syntax to declare a pointer in C++?",
        answer:" C . int *ptr;",
        options: [
            " A . int ptr;",
            " B . ptr int;",
            " C . int *ptr;",
            " D . pointer int;"
        ]
    },

    {
        num: 14,
        question: " What does the 'this' pointer represent in C++?",
        answer: " A . Pointer to the current object",
        options: [
            " A . Pointer to the current object",
            " B . Pointer to the previous object",
            " C . Pointer to the next object",
            " D . Pointer to the base class object"
        ]
    },
    {
        num: 15,
        question: "What is the default access specifier for members of a class in C++?",
        answer: " C . private",
        options: [
            " A . public ",
            " B . protected",
            " C . private",
            " D . internal"
        ]
    },

      {
        num: 16,
        question: "What is the purpose of the 'friend' keyword in C++?",
        answer:   " D . To declare a function as a friend to a class",
        options: [
            " A . To declare a function as a member of a class",
            " B . To declare a function as accessible to other classes",
            " C . To declare a function as inline",
            " D . To declare a function as a friend to a class"
        ]
    },

    {
        num: 17,
        question: "Which of the following is not a valid way to pass arguments to a function in C++?",
        answer:   " D . Pass by array",
        options: [
            " A . Pass by value",
            " B . Pass by reference",
            " C . Pass by pointer",
            " D . Pass by array"
        ]
    },

    {
        num: 18,
        question: "What is the purpose of the 'static' keyword in C++?",
        answer: " C . To specify a member as shared among all instances of the class",
        options: [
            " A . To declare a constant value",
            " B . To declare a variable as local",
            " C . To specify a member as shared among all instances of the class",
            " D . To declare a function as a friend"
        ]
    },

    {
        num: 19,
        question: "What does the 'sizeof' operator return in C++?",
        answer: " B . The size of a data type in bytes",
        options: [
            " A . The size of a variable in bytes",
            " B . The size of a data type in bytes",
            " C . The address of a variable",
            " D . The number of elements in an array"
        ]
    },

    {
        num: 20,
        question: "What is the purpose of the 'try', 'catch', and 'throw' keywords in C++?",
        answer: " A . To handle exceptions",
        options: [
            " A . To handle exceptions",
            " B . To handle errors",
            " C . To handle input-output operations",
            " D . To handle memory allocation"
        ]
    },

    {
        num: 21,
        question: "Which of the following is not a valid way to initialize an array in C++?",
        answer: " C . int arr[5] = {1};",
        options: [
            " A . int arr[5] = {1, 2, 3, 4, 5};",
            " B .  int arr[] = {1, 2, 3, 4, 5};",
            " C . int arr[5] = {1};",
            " D .  int arr[5] = {0};"
        ]
    },

    {
        num: 22,
        question: " What is the purpose of the 'continue' statement in C++?",
        answer: " B . To skip the current iteration of a loop",
        options: [
            " A . To exit the loop",
            " B . To skip the current iteration of a loop",
            " C . To terminate the program execution",
            " D . To transfer control to another part of the program"
        ]
    },

    {
        num: 23,
        question: "Which of the following is not a valid access specifier in C++?",
        answer: " D . internal",
        options: [
            " A . public",
            " B . private",
            " C . protected",
            " D . internal"
        ]
    },

    {
        num: 24,
        question: "What is the process of wrapping data and functions into a single unit known as?",
        answer: " B . Encapsulation",
        options: [
            " A . Polymorphism",
            " B . Encapsulation",
            " C . Inheritance",
            " D . Abstraction"
        ]
    },

    {
        num: 25,
        question: "Which operator is used to access the members of a class through a pointer?",
        answer: " C . ->",
        options: [
            " A .  ::",
            " B .  .",
            " C . ->",
            " D .  *"
        ]
    },

    {
        num: 26,
        question: "Which function is automatically called when an object is destroyed?",
        answer:  " C . destructor()",
        options: [
            " A . construct()",
            " B . create()",
            " C . destructor()",
            " D . destroy()"
        ]
    },

    {
        num: 27,
        question: "Which keyword is used to prevent a class from being inherited?",
        answer: " A . final",
        options: [
            " A . final",
            " B . abstract",
            " C . private",
            " D . static"
        ]
    },

    {
        num: 28,
        question: "Which keyword is used to refer to the current object in C++?",
        answer: " A . this",
        options: [
            " A . this",
            " B . self",
            " C . current",
            " D . me"
        ]
    },

    {
        num: 29,
        question: "Which keyword is used to indicate the end of a class declaration in C++?",
        answer: " D . };",
        options: [
            " A .  end",
            " B . finalize",
            " C . stop",
            " D . };"
        ]
    },

    {
        num: 30,
        question: "Which access specifier allows members to be accessed only within the same class or by friends?",
        answer: " C .  private",
        options: [
            " A . public",
            " B . protected",
            " C .  private",
            " D . internal"
        ]
    },
      
]