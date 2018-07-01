// initial variables
var time = 6;
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeOut = 0;

// Questions and choices
var questions = [
    {
        question: "How many fingers are on your hand?",
        choices: ["1","4","3","5"],
        answer: "5",
        image: "<img class='answerImage' src='assets/images/PH1.jpg' alt='placeholder' height='250px' width='250px'>"
    },

]


// Main Function
$(document).ready(function() {
    console.log("ready")


    // Loads next question
    function nextQuestion() {
        time = 5;

        $(".question").html(questions[currentQuestion].question);

        timer();
        choices();
    }


    //
    function choices() {
        $(".button1").html("<button class='buttons'>" + questions[currentQuestion].choices[0] + "</button>")
        $(".button2").html("<button class='buttons'>" + questions[currentQuestion].choices[1] + "</button>")
        $(".button3").html("<button class='buttons'>" + questions[currentQuestion].choices[2] + "</button>")
        $(".button4").html("<button class='buttons'>" + questions[currentQuestion].choices[3] + "</button>")
    }


    // Controls Timer
    function timer() {
        $(".timer").html("Time Remaining: " + time + " seconds");
        clock = setInterval(countDown, 1000);

        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                timesUp();
            }

            else if (time > 0) {
                time--;
            }

            $(".timer").html("Time Remaining: " + time + " seconds");
        }
        
    }


    function timesUp() {
        timeOut++;
        $(".question").html("Uh-Oh, time ran out! Try to answer a little quicker next time.");
        $(".timer").html("");
        $(".button1").html("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
        $(".answer").html("The correct answer was " + questions[currentQuestion].answer + ".");
        $(".images").html(questions[currentQuestion].image)
        
    }

    // function wrongChoice() {
    //     incorrectAnswer++;
    //     $(".question").html("Sorry, that is incorrect.");
    //     $(".timer").emtpy();
    //     $(".button1").empty();
    //     $(".button2").empty();
    //     $(".button3").empty();
    //     $(".button4").emtpy();
    //     $(".answer").html("The correct answer was " + questions[currentQuestion].answer + ".");   
    // }

    
    // Starts the Game
    function startGame() {
        $(".startDiv").remove()
        nextQuestion()
    }

    // Activates Start Button
    $("#start").click(startGame)

});