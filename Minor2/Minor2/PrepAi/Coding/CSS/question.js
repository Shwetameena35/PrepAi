let questions = [
    {
        num: 1,
        question: "What does CSS stand for?",
        answer:" C. Cascading Style Sheets",
        options: [
            " A. Creative Style Sheets",
            " B. Computer Style Sheets",
            " C. Cascading Style Sheets",
            " D. Colorful Style Sheets"
        ]
    },
    {
        num: 2,
        question: "Which of the following is NOT a feature of CSS3?",
        answer: " C . Cascading",
        options: [
            " A . Media Queries",
            " B . Flexbox",
            " C . Cascading",
            " D . Animations"
        ]
    },
    {
        num: 3,
        question: "Which property in CSS3 allows you to create rounded corners?",
        answer: " A . border-radius",

        options: [
            " A . border-radius",
            " B . border-style",
            " C . border-width",
            " D . border-color"
        ]
    },
    {
        num: 4,
        question: "Which CSS3 property is used for adding shadow effects to elements?",
        answer: " B . box-shadow",

        options: [
            " A . shadow-effect",
            " B . box-shadow",
            " C . text-shadow",
            " D . shadow"
        ]
    },
    {
        num: 5,
        question: "Which CSS3 feature is used to apply styles based on the device characteristics?",
        answer: " A . Media Queries",
        options: [
            " A . Media Queries",
            " B . Flexbox",
            " C . Grid Layout",
            " D . Transitions"
        ]
    },
      {
        num: 6,
          question: "What does CSS3 Grid Layout offer?",
          answer: " B . A way to define complex layouts with rows and columns",
        options: [
            " A . Flexibility in laying out content in one dimension",
            " B . A way to define complex layouts with rows and columns",
            " C . Styling text in a grid format",
            " D . None of the above"
        ]
    },

    {
        num: 7,
        question: "Which CSS3 property is used for creating animations?",
        answer: " D . animation",
        options: [
            " A . animation-effect",
            " B . animate",
            " C . transition",
            " D . animation"
        ]
    },

    {
        num: 8,
        question: "Which CSS3 feature allows you to create flexible layouts?",
        answer: " A . Flexbox",
        options: [
            " A . Flexbox",
            " B . Grid Layout",
            " C . Media Queries",
            " D . Transitions"
        ]
    },
    {
        num: 9,
        question: "How can you include multiple font formats in a CSS3 font-face declaration?",
        answer:" A . Separate each format with commas ",
        options: [
            " A . Separate each format with commas ",
            " B . Use the font-family property",
            " C . Use the @font-face rule multiple times",
            " D . CSS3 doesn’t support multiple font formats"
        ]
    },
    {
        num: 10,
        question: "Which CSS3 property is used to change the color of text?",
        answer:" A . color ",
        options: [
            " A . color ",
            " B . text-color",
            " C . font-color",
            " D . text"
        ]
    },
    {
        num: 11,
        question: "What does the ‘rem’ unit in CSS3 stand for?",
        answer: " C . Root Em",
        options: [
            " A . Resizeable Em",
            " B . Relative Em",
            " C . Root Em",
            " D . Responsive Em"
        ]
    },
    {
        num: 12,
        question: "Which CSS3 property is used for creating a responsive web design?",
        answer:" C . Media Queries",
        options: [
            " A . Responsive",
            " B . Grid Layout",
            " C . Media Queries",
            " D . Flexbox"
        ]
    },
    {
        num: 13,
        question: "Which CSS3 property is used for styling hyperlinks?",
        answer:" D . text-decoration",
        options: [
            " A . a ",
            " B . link-style",
            " C . hyperlink",
            " D . text-decoration"
        ]
    },

    {
        num: 14,
        question: "Which CSS3 feature is used to create transitions between property values?",
        answer:" A . Transitions",
        options: [
            " A . Transitions",
            " B . Animations",
            " C . Transformations",
            " D . Flexbox"
        ]
    },
    {
        num: 15,
        question: "Which CSS3 property is used for creating a drop shadow effect for text?",
        answer:" A . text-shadow",
        options: [
            " A . text-shadow",
            " B . drop-shadow",
            " C . shadow-effect",
            " D . text-effect"
        ]
    },

      {
        num: 16,
        question: "Which CSS3 property is used to change the size of an element’s font?",
        answer:" A . font-size ",
        options: [
            " A . font-size ",
            " B . text-size",
            " C . font",
            " D . size"
        ]
    },

    {
        num: 17,
        question: "Which of the following is NOT a feature of CSS3?",
        answer: " C . Cascading",
        options: [
            " A . Media Queries",
            " B . Flexbox",
            " C . Cascading",
            " D . Animations"
        ]
    },

    {
        num: 18,
        question: "What does CSS3 Transform allow you to do?",
        answer: " B . Rotate, scale, skew, or translate an element",
        answer: " C . Cascading",
        options: [
            " A . Change the position of an element",
            " B . Rotate, scale, skew, or translate an element",
            " C . Change the color of an element",
            " D . Add a shadow effect to an element"
        ]
    },

    {
        num: 19,
        question: "Which CSS3 property is used to add a background image to an element?",
        answer: " B . background-image",
        options: [
            " A . image",
            " B . background-image",
            " C . img-background",
            " D . background"
        ]
    },

    {
        num: 20,
        question: "Which CSS3 property is used to control the space between words?",
        answer: " A . word-spacing",
        options: [
            " A . word-spacing",
            " B . letter-spacing",
            " C . space-between",
            " D . spacing"
        ]
    },

    {
        num: 21,
        question: "Which CSS3 property is used to control the appearance of an element on hover?",
        answer: " C . :hover",
        options: [
            " A . hover",
            " B . onhover",
            " C . :hover",
            " D . :onhover"
        ]
    },

    {
        num: 22,
        question: "Which CSS3 feature is used to create a flexible box layout model?",
        answer: " A . Flexbox",
        options: [
            " A . Flexbox",
            " B . Grid Layout",
            " C . Floats",
            " D . Media Queries"
        ]
    },

    {
        num: 23,
        question: "Which CSS3 property is used to specify the indentation of the first line in a paragraph?",
        answer: " A . text-indent",
        options: [
            " A . text-indent",
            " B . paragraph-indent",
            " C . first-line-indent",
            " D . indent"
        ]
    },

    {
        num: 24,
        question: "Which CSS3 property is used to control the space between letters in text?",
        answer: " A . letter-spacing",
        options: [
            " A . letter-spacing",
            " B . word-spacing",
            " C . text-spacing",
            " D . spacing"
        ]
    },

    {
        num: 25,
        question: "Which CSS3 feature allows elements to change smoothly from one style to another?",
        answer: " A . Transitions",
        options: [
            " A . Transitions",
            " B . Animations",
            " C . Flexbox",
            " D . Grid Layout"
        ]
    },

    {
        num: 26,
        question: "Which CSS3 property is used to specify the type of cursor to be displayed when pointing over an element?",
        answer: " A . cursor",
        options: [
            " A . cursor",
            " B . pointer",
            " C . mouse",
            " D . hand"
        ]
    },

    {
        num: 27,
        question: "Which CSS3 feature is used for laying out elements in a two-dimensional grid?",
        answer: " A . Grid Layout",
        options: [
            " A . Grid Layout",
            " B . Flexbox",
            " C . Floats",
            " D . Media Queries"
        ]
    },

    {
        num: 28,
        question: "Which CSS3 property is used to specify the color of the text underline?",
        answer:" B . text-decoration-color",
        options: [
            " A . underline-color",
            " B . text-decoration-color",
            " C . text-color",
            " D . underline"
        ]
    },

    {
        num: 29,
        question: "Which CSS3 property is used to control the space between lines of text?",
        answer: " C . line-height",
        options: [
            " A . line-spacing",
            " B . text-spacing",
            " C . line-height",
            " D . spacing"
        ]
    },

    {
        num: 30,
        question: "Which CSS3 feature is used to create flexible layouts with rows and columns?",
        answer: " B . Grid Layout",
        options: [
            " A . Flexbox",
            " B . Grid Layout",
            " C . Floats",
            " D . Positioning"
        ]
    },
      
]