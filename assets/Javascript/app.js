// Initial Variables
var time = 15;
var currentQuestion = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var timeOut = 0;


// Questions and Choices
var questions = [
    {
        //quesions, choices and answeres
        question: "How many different genres of anime are there?",
        choices: ["7","4","8","5"],
        answer: "5",
        // Displays correct/incorrect image with corresponding messages
        correctImage: "<h2 class='question-message'>Have you seen the new episode of Boruto?</h2><img class='answerImage' src='https://media.giphy.com/media/l49JHOl3OFL6c6u1W/giphy.gif' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>We don't talk about Harem or Reverse Harem you weirdo...</h2><img class='answerImage' src='https://media.giphy.com/media/iHmodiTc8t0BO/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        // Boolean to help determine if a question was answered
        answered: false,

        // questions are all structured the same from here
    },

    {
        question: "Most animes are based off comic-book style series called ____ .",
        choices: ["Shonen","Manga","Comicon","Cartoon"],
        answer: "Manga",
        correctImage: "<h2 class='question-message'>They're fun but you can't get action like this on paper!</h2><img class='answerImage' src='https://media.giphy.com/media/q0mt3liFrHZ3q/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>Yea, that but Japanese, I guess...</h2><img class='answerImage' src='https://media.giphy.com/media/adh7vQfwU52AE/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "What is the most watched/influential anime in America?",
        choices: ["Fooly Cooly","Dragon Ball Z","Cowboy Bebop","Dragon Ball GT"],
        answer: "Dragon Ball Z",
        correctImage: "<h2 class='question-message'>Yea... Take that comic book dummies!</h2><img class='answerImage' src='https://media.giphy.com/media/YG90C8Fg3td16/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>Vegeta doesn't seem to approve of your lack of knowlege. You may wanna back away... Perhaps a planet or two...</h2><img class='answerImage' src='https://media.giphy.com/media/84CRvhy2DJlwA/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "Which character feature do animators spend the most time and money on?",
        choices: ["Clothes","Hair","Eyes","Mouth"],
        answer: "Eyes",
        correctImage: "<h2 class='question-message'></h2><img class='answerImage' src='https://media.giphy.com/media/Rx8LAWIa1rMOI/giphy.gif' alt='placeholder' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'></h2><img class='answerImage' src='https://media.giphy.com/media/12lyuVXsq9z0hG/giphy.gif' height='250px' width='250px'>",
        answered: false,
    },

];

// Messages to User
var correctMessages = ["You may wanna get a life", "First Try", "Someone's a weeboo", "Ye You Right", "Yoku yatta! :3"];
var incorrectMessages = ["Frowny Face", "There's always Google...", "Maybe next time", "Ganbari!", "Be the ball, throw yourself."];
var timesUpMessages = ["Uh-Oh time's up!", "Try to answer a little quicker", "Watch the time!", "Google wouldn't load quick enough?", "You do know there's a timer right?"];


// Ready Function
$(document).ready(function() {
    console.log("ready")


    // Loads Next Question
    function nextQuestion() {
        console.log("next question");

        time = 15;
        $(".answer").html("");
        $(".images").html("");
        $(".question").html(questions[currentQuestion].question);
        $(".bottomText").html("");

        // $("#question-message").remove();

        // For some reason the timer wouldn't clear out after question so I had to do a little work around
        $("#timerPlacement").html("<p class='timer text-center'>Time Remaining: " + time + " seconds</p>");

        timer();
        choices();
    }


    // Defines Button Functions
    function buttonClicks() {
        console.log("Button Clicked")

        userGuess = $(this).text();
        if (userGuess === questions[currentQuestion].answer) {
            clearInterval(clock);
            correctAnwer();
        }

        else {
            clearInterval(clock);
            incorrectAnswer();
        };
    }

    // Populates the Choices with Buttons
    function choices() {
        $(".button1").html("<button class='buttons options'>" + questions[currentQuestion].choices[0] + "</button>");
        $(".button2").html("<button class='buttons options'>" + questions[currentQuestion].choices[1] + "</button>");
        $(".button3").html("<button class='buttons options'>" + questions[currentQuestion].choices[2] + "</button>");
        $(".button4").html("<button class='buttons options'>" + questions[currentQuestion].choices[3] + "</button>");
    }

    // Activates Choice Buttons
    $(document).on('click', '.options', buttonClicks);



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
    function resultScreen() {
        console.log("Results");

        $(".question").html("Well done! Your score: ");
        $(".answer").html("");
        $(".images").html("");
        $("#result-screen").prepend(`<h2 class='results'>Answered Correctly: ${correctGuesses}</h2>
        <h2 class='results'>Answered Incorrectly: ${incorrectGuesses}</h2>
        <h2 class='results'>Time Outs: ${timeOut}</h2>`)
        $(".resultButton").html("<button id='restart-button'>Restart</button>")
        $(".bottomText").html("");

        // $("#question-message").remove();
    }

    // Activates Restart Button
    $(document).on('click', '#restart-button', startGame);


    // Moves to next question unless out of questions in which case it activates result screen
    // Also clears extra text off screen
    function decider(){
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            setTimeout(nextQuestion, 1000 * 8);
        }

        else if (questions[3].answered = true){
            setTimeout(resultScreen, 1000 * 8);
        }

        $(".timer").remove();
        $(".button1").text("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
    }


    // Time Out Function
    function timesUp() {
        console.log("Times Up!");

        timeOut++;
        $(".bottomText").html("Hint: " + timesUpMessages[Math.floor(timesUpMessages.length * Math.random())]);
        $(".question").html("The correct answer was " + questions[currentQuestion].answer + ".");
        $(".images").html(questions[currentQuestion].incorrectImage);

        questions[currentQuestion].answered = true;

        decider();       
    }


    // Incorrect Choice Function
    function incorrectAnswer() {
        console.log("Incorrect Choice");

        incorrectGuesses++;
        $(".bottomText").html(incorrectMessages[Math.floor(incorrectMessages.length * Math.random())]);
        $(".question").html("The correct answer was " + questions[currentQuestion].answer + "."); 
        $(".images").html(questions[currentQuestion].incorrectImage); 

        questions[currentQuestion].answered = true;

        // $("#question-message").html("<h2>" + questions[currenctQuestion].correctMessage + "</h2>");

        decider();
    }


    // Correct Choice Function
    function correctAnwer() {
        console.log("Correct Choice");

        correctGuesses++;
        $(".bottomText").html(correctMessages[Math.floor(correctMessages.length * Math.random())]);
        $(".question").html(questions[currentQuestion].answer + " was correct!");  
        $(".images").html(questions[currentQuestion].correctImage); 

        questions[currentQuestion].answered = true;

        // $("#question-message").html("<h2>" + questions[currenctQuestion].correctMessage + "</h2>");
        
        decider();
    }

    
    // Starts the Game
    function startGame() {
        currentQuestion = 0;
        correctGuesses = 0;
        incorrectGuesses = 0;
        timeOut = 0;

        $(".startDiv").remove();
        $("#result-screen").html("");
        $(".resultButton").html("");
        nextQuestion();
    }

    // Activates Start Button
    $("#start").click(startGame);

});