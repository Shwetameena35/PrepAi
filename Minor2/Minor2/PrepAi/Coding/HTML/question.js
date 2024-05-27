let questions = [
    {
        num: 1,
        question: "What does HTML stand for?",
        answer:" A. Hyper Text Markup Language",
        options: [
            " A. Hyper Text Markup Language",
            " B. High Tech Markup Language",
            " C. Hyperlinks and Text Markup Language",
            " D. High Text Markup Language"
        ]
    },
    {
        num: 2,
        question: "Which of the following is NOT a new feature introduced in HTML5?",
        answer: " B . table",
        options: [
            " A . canvas",
            " B . table",
            " C . video",
            " D . audio"
        ]
    },
    {
        num: 3,
        question: "Which element is used to create a clickable button in HTML5?",
        answer: " A . button",

        options: [
            " A . button",
            " B . input",
            " C . a",
            " D . div"
        ]
    },
    {
        num: 4,
        question: "Which element is used to define navigation links in HTML5?",
        answer: " A . nav ",

        options: [
            " A . nav ",
            " B . header",
            " C . section",
            " D . div"
        ]
    },

    {
        num: 5,
        question: "Which element is used to draw graphics, on the fly, via scripting (usually JavaScript) in HTML5?",
        answer: " B . canvas",
        options: [
            " A . svg",
            " B . canvas",
            " C . img",
            " D . div"
        ]
    },
      {
        num: 6,
          question: "Which attribute is used to specify the URL of the media file in the <video> element?",
          answer: " A . src",
        options: [
            " A . src",
            " B . href",
            " C . url",
            " D . link"
        ]
    },

    // {
    //     num: 7,
    //     question: "Which doctype declaration is used for HTML5 documents?",
    //     answer: " B . <!DOCTYPE html>",
    //     options: [
    //         " A . <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>",
    //         " B . <!DOCTYPE html>",
    //         " C . <!DOCTYPE html5>",
    //         " D . <!DOCTYPE xhtml>"
    //     ]
    // },

    {
        num: 7,
        question: "Which of the following elements is used to group together and define sections of an HTML5 document?",
        answer: " D . All of the above",
        options: [
            " A . div",
            " B . section",
            " C . article",
            " D . All of the above"
        ]
    },


    {
        num: 8,
        question: "Which element is used to define a footer in an HTML5 document?",
        answer:" A . footer",
        options: [
            " A . footer",
            " B . foot",
            " C . bottom",
            " D . end"
        ]
    },
    {
        num: 9,
        question: "Which attribute is used to define placeholder text in an input field?",
        answer:" A . placeholder",
        options: [
            " A . placeholder",
            " B . text",
            " C . hint",
            " D . value"
        ]
    },
    {
        num: 10,
        question: "Which attribute is used to specify the alternative text for an image in HTML5?",
        answer: " A . alt ",
        options: [
            " A . alt ",
            " B . title",
            " C . src",
            " D . description"
        ]
    },
    {
        num: 11,
        question: "Which element is used to define a list of items in HTML5?",
        answer:" D . li",
        options: [
            " A . list ",
            " B . ul",
            " C . ol",
            " D . li"
        ]
    },
    {
        num: 12,
        question: "Which element is used to define the main content of an HTML5 document?",
        answer:" A . main",
        options: [
            " A . main",
            " B . body",
            " C . content",
            " D . article"
        ]
    },

    {
        num: 14,
        question: "Which element is used to define a container for navigation links in HTML5?",
        answer:" A . nav",
        options: [
            " A . nav",
            " B . header",
            " C . menu",
            " D . section"
        ]
    },
    {
        num: 15,
        question: "Which element is used to define a dropdown list in HTML5?",
        answer:" B . select",
        options: [
            " A . list",
            " B . select",
            " C . dropdown",
            " D . option"
        ]
    },

    //   {
    //     num: 16,
    //     question: "Which element is used to define a hyperlink in HTML5?",
    //     answer:" B . <a>",
    //     options: [
    //         " A . <link>",
    //         " B . <a>",
    //         " C . <hyperlink>",
    //         " D . <url>"
    //     ]
    // },

    // {
    //     num: 17,
    //     question: "Which of the following elements is used to specify a paragraph in HTML5?",
    //     answer: " B . <p>",
    //     options: [
    //         " A . <paragraph>",
    //         " B . <p>",
    //         " C . <para>",
    //         " D . <text>"
    //     ]
    // },

    {
        num: 15,
        question: "Which attribute is used to specify the relationship between the current document and the linked document?",
        answer: " B . rel",
        options: [
            " A . hreflang",
            " B . rel",
            " C . type",
            " D . title"
        ]
    },

    // {
    //     num: 19,
    //     question: "Which of the following elements is used to display a definition list in HTML5?",
    //     answer: " A . <dl>",
    //     options: [
    //         " A . <dl>",
    //         " B . <list>",
    //         " C . <def>",
    //         " D .  <dd>"
    //     ]
    // },

    {
        num: 16,
        question: "Which element is used to define a section in an HTML5 document?",
        answer: " A . <section>",
        options: [
            " A . <section>",
            " B . <div>",
            " C . <area>",
            " D . <article>"
        ]
    },

    {
        num: 17,
        question: "Which attribute is used to define a keyboard shortcut for an element in HTML5?",
        answer: " A . accesskey",
        options: [
            " A . accesskey",
            " B . shortcut",
            " C . hotkey",
            " D . key"
        ]
    },

    // {
    //     num: 22,
    //     question: "Which element is used to define a caption for a <figure> element in HTML5?",
    //     answer: " A . <figcaption>",
    //     options: [
    //         " A . <figcaption>",
    //         " B . <caption>",
    //         " C . <legend>",
    //         " D . <title>"
    //     ]
    // },

    // {
    //     num: 23,
    //     question: "Which element is used to define an unordered list in HTML5?",
    //     answer:" B . <ul>",
    //     options: [
    //         " A . <list>",
    //         " B . <ul>",
    //         " C . <ol>",
    //         " D . <li>"
    //     ]
    // },

    {
        num: 18,
        question: "Which attribute is used to specify the width of a <table> element in HTML5?",
        answer:  " A . width",
        options: [
            " A . width",
            " B . size",
            " C . style",
            " D . widthpx"
        ]
    },

    // {
    //     num: 25,
    //     question: "Which element is used to define a group of related options in a dropdown list in HTML5?",
    //     answer: " A . <optgroup>",
    //     options: [
    //         " A . <optgroup>",
    //         " B . <optiongroup>",
    //         " C . <optionset>",
    //         " D . <optiongroup>"
    //     ]
    // },

    {
        num: 19,
        question: "Which attribute is used to specify the language of the text in an element in HTML5?",
        answer: " B . lang",
        options: [
            " A . language",
            " B . lang",
            " C . textlang",
            " D . l"
        ]
    },

    // {
    //     num: 27,
    //     question: "Which element is used to define a table row in HTML5?",
    //     answer: " C . <tr>",
    //     options: [
    //         " A . <td>",
    //         " B . <th>",
    //         " C . <tr>",
    //         " D . <table-row>"
    //     ]
    // },

    {
        num: 20,
        question: "Which attribute is used to specify the alignment of text within an element in HTML5?",
        answer: " D .  style",
        options: [
            " A . align",
            " B . text-align",
            " C . alignment",
            " D .  style"
        ]
    },

    // {
    //     num: 29,
    //     question: "Which element is used to define a form in HTML5?",
    //     answer: " A . <form>",
    //     options: [
    //         " A . <form>",
    //         " B . <input>",
    //         " C . <fieldset>",
    //         " D . <label>"
    //     ]
    // },

    // {
    //     num: 30,
    //     question: "Which of the following is NOT a new feature introduced in HTML5?",
    //     answer: " B . <table>",
    //     options: [
    //         " A . <canvas>",
    //         " B . <table>",
    //         " C . <video>",
    //         " D . <audio>"
    //     ]
    // },
      
]