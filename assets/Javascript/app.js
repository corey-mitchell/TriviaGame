// initial variables
var time = 15;
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

// Questions and choices
var questions = [
    {
        question: "How many fingers are on your hand?",
        choices: ["1","4","3","5"],
        answer: "5",
    },

]


// Main Function
$(document).ready(function() {
    console.log("ready")


    // Loads next question
    function nextQuestion() {
        time = 15;

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

        function countDown () {
            if (time < 1) {
                clearInterval(clock);
                // timeOut();
            }

            else if (time > 0) {
                time--;
            }

            $(".timer").html("Time Remaining: " + time + " seconds");
        }
        
    }

    
    // Starts the Game
    function startGame() {
        $(".startDiv").remove()
        nextQuestion()
    }

    // Activates Start Button
    $("#start").click(startGame)

});