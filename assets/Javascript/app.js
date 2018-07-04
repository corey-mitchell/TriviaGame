// Initial Variables
var time = 15;
var currentQuestion = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var timeOut = 0;

// Questions and Choices
var questions = [
    {
        question: "How many fingers are on your hand?",
        choices: ["1","4","3","5"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "How many toes are on your feet?",
        choices: ["5","4","13","9"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "What is a good next question?",
        choices: ["6","5","3","4"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "Guess a number?",
        choices: ["16","8","5","3"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

];


// Ready Function
$(document).ready(function() {
    console.log("ready")


    // Loads Next Question
    function nextQuestion() {
        console.log("next question");

        time = 5;
        $(".answer").html("");
        $(".images").html("");
        $(".question").html(questions[currentQuestion].question);

        // For some reason the timer wouldn't clear out after question so I had to do a little work around
        $("#timerPlacement").html("<p class='timer text-center'>Time Remaining: " + time + " seconds</p>");

        timer();
        choices();
    }


    // Defines Button Functions
    function buttonClicks() {
        // alert("Clicked")
        userGuess = $(this).text();
        if (userGuess === questions[currentQuestion].answer) {
            correctAnwer();
        }

        else {
            incorrectAnswer();
        };
    }


    // Populates the Choices with Buttons
    function choices() {
        $(".button1").html("<button class='buttons'>" + questions[currentQuestion].choices[0] + "</button>");
        $(".button2").html("<button class='buttons'>" + questions[currentQuestion].choices[1] + "</button>");
        $(".button3").html("<button class='buttons'>" + questions[currentQuestion].choices[2] + "</button>");
        $(".button4").html("<button class='buttons'>" + questions[currentQuestion].choices[3] + "</button>");
    }

    // Activtes Choice Buttons
    console.log("Button Clicked")
    $(".button1").click(buttonClicks)
    $(".button2").click(buttonClicks)
    $(".button3").click(buttonClicks)
    $(".button4").click(buttonClicks)


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
            };

            $(".timer").html("Time Remaining: " + time + " seconds");
        }
        
    }


    // Result Screen Function
    function resultScreen() {
        console.log("Results");
        $(".question").html("Results are");
        $(".answer").html("");
        $(".images").html("");

    }


    // Moves to next question unless out of questions in which case it activates result screen
    function decider(){
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            setTimeout(nextQuestion, 1000 * 5);
        }

        else if (questions[3].answered = true){
            setTimeout(resultScreen, 1000 * 5);
        }
    }


    // Time Out Function
    function timesUp() {
        console.log("Times Up!");
        timeOut++;
        $(".question").html("Uh-Oh, time ran out! Try to answer a little quicker next time.");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html("The correct answer was " + questions[currentQuestion].answer + ".");
        $(".images").html(questions[currentQuestion].image);

        questions[currentQuestion].answered = true;

        decider();
        
    }


    // Incorrect Choice Function
    function incorrectAnswer() {
        console.log("Incorrect Choice");

        incorrectGuesses++;
        $(".question").html("Sorry, that is incorrect.");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html("The correct answer was " + questions[currentQuestion].answer + "."); 
        $(".images").html(questions[currentQuestion].image); 

        questions[currentQuestion].answered = true;

        decider();

    }


    // Correct Choice Function
    function correctAnwer() {
        console.log("Correct Choice");
        correctGuesses++;
        $(".question").html("You are correct!!!");
        $(".timer").remove();
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html(questions[currentQuestion].answer);  
        $(".images").html(questions[currentQuestion].image); 

        questions[currentQuestion].answered = true;
        
        decider();

    }

    
    // Starts the Game
    function startGame() {
        $(".startDiv").remove();
        nextQuestion();
    }

    // Activates Start Button
    $("#start").click(startGame)

});