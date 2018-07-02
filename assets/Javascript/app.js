// Initial Variables
var time = 6;
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeOut = 0;

// Questions and Choices
var questions = [
    {
        question: "How many fingers are on your hand?",
        choices: ["1","4","3","5"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>"
    },

    {
        question: "How many toes are on your feet?",
        choices: ["5","4","13","9"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>"
    },

]


// Main Function
$(document).ready(function() {
    console.log("ready")


    // Loads Next Question
    function nextQuestion() {
        time = 5;
        $(".answer").html("");
        $(".images").html("");
        $(".question").html(questions[currentQuestion].question);

        timer();
        choices();
    }

    function buttonClicks() {
        if (questions[currentQuestion].choices[userChoice] === questions[currentQuestion].answer) {
            correctChoice();
        }

        else {
            incorrectChoice();
        }
    }


    // Populates the Choices 
    function choices() {
        $(".button1").html("<button class='buttons userChoice'>" + questions[currentQuestion].choices[0] + "</button>")
        $(".button2").html("<button class='buttons userChoice'>" + questions[currentQuestion].choices[1] + "</button>")
        $(".button3").html("<button class='buttons userChoice'>" + questions[currentQuestion].choices[2] + "</button>")
        $(".button4").html("<button class='buttons userChoice'>" + questions[currentQuestion].choices[3] + "</button>")
    }

    // Activtes Choice Buttons
    $(".userChoice").click(buttonClicks);


    // Controls Timer
    function timer() {
        $(".timer").html("Time Remaining: " + time + " seconds");
        clock = setInterval(countDown, 1000);

        function countDown() {
            if (time === 0) {
                clearInterval(clock);
                timesUp();
            }

            else if (time > 0) {
                time--;
            }

            $(".timer").html("Time Remaining: " + time + " seconds");
        }
        
    }


    // Result Screen Function
    // function resultScreen() {}


    // Time Out Function
    function timesUp() {
        timeOut++;
        $(".question").html("Uh-Oh, time ran out! Try to answer a little quicker next time.");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html("The correct answer was " + questions[currentQuestion].answer + ".");
        $(".images").html(questions[currentQuestion].image);

        if (currentQuestion < questions.length){
            currentQuestion++;
            setInterval(nextQuestion, 1000 * 5)
        }

        // else {
        //     setInterval(resultScreen, 1000 * 5)
        // }
        
    }


    // Incorrect Choice Function
    function incorrectChoice() {
        incorrectAnswer++;
        $(".question").html("Sorry, that is incorrect.");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html("The correct answer was " + questions[currentQuestion].answer + "."); 
        $(".images").html(questions[currentQuestion].image); 

        // if(currentQuestion < questions.length){
        //     currentQuestion++;
        //     setInterval(nextQuestion, 1000 * 5)
        // }

        // else {
        //     setInterval(resultScreen, 1000 * 5)
        // }

    }


    // Correct Choice Function
    function correctChoice() {
        correctAnswer++;
        $(".question").html("You are correct!!!");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html(questions[currentQuestion].answer);  
        $(".images").html(questions[currentQuestion].image); 
        
        // if(currentQuestion < questions.length){
        //     currentQuestion++;
        //     setInterval(nextQuestion, 1000 * 5)
        // }

        // else {
        //     setInterval(resultScreen, 1000 * 5)
        // }

    }

    
    // Starts the Game
    function startGame() {
        $(".startDiv").remove()
        nextQuestion()
    }

    // Activates Start Button
    $("#start").click(startGame)

});