const startBtn = document.querySelector(".start_btn");
const restartBtn = document.querySelector(".buttons .restart");
const quitBtn = document.querySelector(".buttons .quit");
const nextBtn = document.querySelector(".total .next");

const infoBlock = document.querySelector(".main_quest");
const quizBox = document.querySelector(".quiz_box");
const resultbox = document.querySelector(".result_box");
const answerList = document.querySelector(".answ_list");

const totalQuestCount = document.querySelector(".total span");

const timerLeft = document.querySelector(".time_number");

const questText = document.querySelector(".que_text");

let questCount = 0;

startBtn.addEventListener('click', function () {
    infoBlock.classList.add('hidden');
    quizBox.classList.remove('hidden');
    getQuestions(0)
});

quitBtn.addEventListener('click', function () {
    infoBlock.classList.remove('hidden');
    quizBox.classList.add('hidden');
    resultbox.classList.add('hidden');
});

function Next(){
    answerList.style.pointerEvents = 'auto';
    if (questCount < questions.length - 1) {
        questCount++;
        getQuestions(questCount);
    } else {
        resultbox.classList.remove('hidden');
        quizBox.classList.add('hidden');
        questCount = 0;
    }
}

nextBtn.addEventListener('click', Next)

function getQuestions(index) {
    let quest = `<span>${questions[index].question}</span>`;
    questText.innerHTML = quest;

    let answList = `
    <div class="answ">
    <span>${questions[index].answer[0]}</span>
    </div>

    <div class="answ">
    <span>${questions[index].answer[1]}</span>
    </div>

    <div class="answ">
    <span>${questions[index].answer[2]}</span>
    </div>

    <div class="answ">
    <span>${questions[index].answer[3]}</span>
    </div>
    `
    answerList.innerHTML = answList;
    toggleAnswer();

    totalQuestCount.innerHTML = `<p>${questions[index].num}</p><p>of ${questions.length}</p> Questions`
}

function toggleAnswer(){
    const answer = document.querySelectorAll(".answ");
    for(let i = 0; i < answer.length; i++){
        answer[i].setAttribute("onclick", "selectedAnsw(this)");
    }
}

let correctAnsCount = 0;


function selectedAnsw(answ){
   let userAnswer = String(answ.textContent.toLowerCase().trim())
   let correctAnswer = String(questions[questCount].correct.toLowerCase().trim())
   if(correctAnswer == userAnswer){
       correctAnsCount++;
       answ.classList.add('correct')
       answ.innerHTML += `<div class="icon check"><i class="fa fa-check"></i></div>`
       answerList.style.pointerEvents = 'none';
       setTimeout(Next,1000)
   }
   else{
       answ.classList.add('incorrect')
       answ.innerHTML += `<div class="icon incorr"><i class="fa fa-times"></i></div>`
       answerList.style.pointerEvents = 'none';
       setTimeout(Next,1000)
   }
}



