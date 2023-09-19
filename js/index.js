var i = 0;
var correctCount = 0;


generate(0); 

function generate(index) {
    resetRadioButtons(); 
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
    document.getElementById("optt4").innerHTML = jsonData[index].opt4;
}

function resetRadioButtons() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });
}

function checkAnswer() {
    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer) {
        correctCount++;

    }
    i++;
    if (jsonData.length - 1 < i) {
        document.write("<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'>");
        document.write("<div style='background-color:#348322; padding: 20px; border-radius: 10px;'>");
        document.write("<div style='color:#fff; font-size:18pt; text-align:center;'>Congradualations <br> Your score is: " + correctCount + "</div>");
        document.write("</div>");
        document.write("</div>");
    }
    
    

    
    generate(i);
}

function checkAnswersecond() {
    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;

    }
    if (document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer) {
        correctCount++;

    }
    i++;
    document.write("<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'>");
    document.write("<div style='background-color:#348322; padding: 20px; border-radius: 10px;'>");
    document.write("<div style='color:#fff; font-size:18pt; text-align:center;'>Congradulations You have completed.!<br> Your score is: " + correctCount + "</div>");
    document.write("</div>");
    document.write("</div>");

}

function refreshPage() {
    location.reload();
}

const progressItems = document.querySelectorAll('.progress-item');

progressItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        progressItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');

        displayQuestion(index); 
    });
});

function displayQuestion(index) {
    generate(index); }
const quizDuration = 900; // 30 minutes

const countdownElement = document.getElementById("countdown");

let countdown = quizDuration;


function updateTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    countdownElement.textContent = `${minutes}:${seconds < 30 ? '0' : ''}${seconds}`;
}



function startTimer() {
    updateTimer();
    const timerInterval = setInterval(function () {
        countdown--;
        updateTimer();
        if (countdown <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Quiz has ended.");

            const inputElements = document.querySelectorAll('input');
            const buttons = document.querySelectorAll('button');
            inputElements.forEach((input) => {
                input.disabled = true;
            });
            buttons.forEach((button) => {
                button.disabled = true;
            });
            document.write("<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'>");
                document.write("<div style='background-color:#348322; padding: 20px; border-radius: 10px;'>");
                document.write("<div style='color:#fff; font-size:18pt; text-align:center;'>Your score is: " + correctCount + "</div>");
                document.write("</div>");
                document.write("</div>");
        }
    }, 1000); 
}




startTimer();
