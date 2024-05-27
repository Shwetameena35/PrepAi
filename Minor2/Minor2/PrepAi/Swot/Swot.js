const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

startBtn.addEventListener("click", () => {
  console.log("heloo");
  popupInfo.classList.add("active");
  main.classList.add("active");
});

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(0);
  questionCounter(1);
  headerScore();
};
tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  resultBox.classList.remove("active");
  nextBtn.classList.remove("active");
  questionCount = 0;
  questionNum = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNum);

  headerScore();
};
goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  resultBox.classList.remove("active");
  nextBtn.classList.remove("active");
  questionCount = 0;
  questionNum = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNum);

  headerScore();
};

let questionCount = 0;
let questionNum = 1;
let userScore = 0;
const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNum++;
    questionCounter(questionNum);
    nextBtn.classList.remove("active");

    // console.log("next clicked")
  } else {
    showResultBox();
  }
};
const optionList = document.querySelector(".option-list");

function showQuestions(index) {
  const questiontext = document.querySelector(".question-text");
  questiontext.textContent = `${questions[index].num}.${questions[index].question}`;

  let optiontag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optiontag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
//   headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  
  const circularProgress = document.querySelector(".circular-process");
  console.log(circularProgress);
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = Math.floor((userScore / questions.length) * 100);
  
  let speed = 20;
  
  let progress = setInterval(() => {
    progressStartValue++;
    
    
    
    const myArray = ["ENFP", "ESFJ", "ENTP", "ESTJ", "ESFP","ENFJ", "ESTP","ENTJ" , "INFP" , "ISFJ" , "INTP", "ISTJ", "ISFP", "INFJ",  "ISTP", "INTJ"];
    
    // Function to generate a random index within the array length
    function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
    
    // Generate a random index
    const randomIndex = getRandomIndex(myArray);
    
    // Access the element at the random index
    const randomElement = myArray[randomIndex];
    
    scoreText.textContent = `Your personality type is ${randomElement}.`;
    
      if(randomElement=="ENFP")
      {
        c
      }
    
    

    progressValue.textContent = `${randomElement}`;
    circularProgress.style.background = `conic-gradient(#33d155 ${
      progressStartValue * 3.6
    }deg, rgba(255,255,255,.1) 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
