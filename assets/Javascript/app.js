// Questions and Choices
var questions = [
    {
        //quesions, choices and answeres
        question: "How many different genres of anime are there?",
        choices: ["7","4","8","5"],
        answer: "5",
        // Displays correct/incorrect image with corresponding messages
        correctImage: "<h2 class='question-message'>Shonen seems to be the most ubiquitous in America.</h2><img class='answerImage' src='https://media.giphy.com/media/NDYQkBC3C1aog/giphy.gif' alt='Naruto GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>We don't talk about Harem or Reverse Harem you weirdo...</h2><img class='answerImage' src='https://media.giphy.com/media/iHmodiTc8t0BO/giphy.gif' alt='Missed Plot GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>You seem distracted.</h2><img class='answerImage' src='https://media.giphy.com/media/NDYQkBC3C1aog/giphy.gif' alt='Naruto GIF' height='250px' width='250px'>",
        // Boolean to help determine if a question was answered
        answered: false,

        // questions are all structured the same from here
    },

    {
        question: "While 'anime' refers to animation, the term '_____' refers to comics and cartooning. ",
        choices: ["Shonen","Manga","Comicon","Cartoon"],
        answer: "Manga",
        correctImage: "<h2 class='question-message'>They're fun but you can't get action like this on paper!</h2><img class='answerImage' src='https://media.giphy.com/media/q0mt3liFrHZ3q/giphy.gif' alt='Naruto GIF 2' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>Yea, that but Japanese, I guess...</h2><img class='answerImage' src='https://media.giphy.com/media/PWIwU7wH9Y7Bu/giphy.gif' alt='Slammed Head GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>You don't need to be so nervous. ^__^</h2><img class='answerImage' src='https://media.giphy.com/media/12nMEydAAgCxYA/giphy.gif' alt='Nervous Girl GIF' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "What is the most watched/influential anime in America?",
        choices: ["Fooly Cooly","Dragon Ball Z","Cowboy Bebop","Dragon Ball"],
        answer: "Dragon Ball Z",
        correctImage: "<h2 class='question-message'>Yea... Take that comic book dummies!</h2><img class='answerImage' src='https://media.giphy.com/media/YG90C8Fg3td16/giphy.gif' alt='Vegeta beats Super Heros GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>Vegeta doesn't seem to approve your lack of knowlege. You may wanna back away... Perhaps a planet or two...</h2><img class='answerImage' src='https://media.giphy.com/media/84CRvhy2DJlwA/giphy.gif' alt='Angry Vegeta GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>You can't get it if you don't try.</h2><img class='answerImage' src='https://media.giphy.com/media/1S5zDKW1VFAUU/giphy.gif' alt='Goku holding back Vegeta GIF' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "Which character feature do animators spend the most time and money on?",
        choices: ["Clothes","Hair","Eyes","Mouth"],
        answer: "Eyes",
        correctImage: "<h2 class='question-message'>Are you an anime character? Cause I could get lost in those eyes.</h2><img class='answerImage' src='https://media.giphy.com/media/Rx8LAWIa1rMOI/giphy.gif' alt='Anime Eyes' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>You gotta make your eyes sparkle!</h2><img class='answerImage' src='https://media.giphy.com/media/bs0R4pliH2UVO/giphy.gif' alt='Anime Sparkly Eyes' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>Maybe a couple of real girls will wake you up.</h2><img class='answerImage' src='https://media.giphy.com/media/12lyuVXsq9z0hG/giphy.gif' alt='Fake Anime Eyes GIF' height='250px' width='250px'>",
        answered: false,
    },


    {
        question: "What percentage of the worlds animation is anime?",
        choices: ["%75","%98","%60","%90"],
        answer: "%60",
        correctImage: "<h2 class='question-message'>Wow, you got that right? You may wanna go out more...</h2><img class='answerImage' src='https://media.giphy.com/media/MJDBXJ2PtgkEg/giphy.gif' alt='No Life Anime GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>Senpai will never notice you with such bad study habbits!</h2><img class='answerImage' src='https://media.giphy.com/media/9GDlxcLtNJv32/giphy.gif' alt='One Punch Study GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>You're silence confuses me???</h2><img class='answerImage' src='https://media.giphy.com/media/tsyOrm9P1Oj9C/giphy.gif' alt='Not Kawaii GIF' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "What is the only anime to win an Academy Award?",
        choices: ["Spirited Away","Ponyo","Princess Mononoke","Castle in the Sky"],
        answer: "Spirited Away",
        correctImage: "<h2 class='question-message'>Such a good movie! But wasn't it so much more depressing than you thought it was as a kid?</h2><img class='answerImage' src='https://media.giphy.com/media/3oz8xw3LmrW1XS9iQE/giphy.gif' alt='Spirited Away Train GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>You probably shouldn't take the gold.</h2><img class='answerImage' src='https://media.giphy.com/media/l3ZrVw8NkxIly/giphy.gif' alt='No-Face GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>Don't hurt yourself now...</h2><img class='answerImage' src='https://media.giphy.com/media/12Yyb0SJv6C55C/giphy.gif' alt='Spirited Away Can't Remember GIF' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "The longest running animated series is _____ .",
        choices: ["One Piece","Lupin III","The Simpsons","Sazae-san"],
        answer: "Sazae-san",
        correctImage: "<h2 class='question-message'>The show began in 1969 and has 2500+ episodes! (You must have some crazy computer skills, because you definitly didn't know that beforehand.)</h2><img class='answerImage' src='https://media.giphy.com/media/3o6nUL3Td1hbHkbNqE/giphy.gif' alt='Sazae-san Suprised Face GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>The show began in 1969 and has 2500+ episodes!</h2><img class='answerImage' src='https://media.giphy.com/media/3o6nUL3Td1hbHkbNqE/giphy.gif' alt='Sazae-san Suprised Face GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>When the timer is under 5 seconds and you have no clue what's going on in this game.</h2><img class='answerImage' src='https://media.giphy.com/media/1iv7n5qiQ2epEC7RNV/giphy.gif' alt='Mr. Krabs Meme GIF' height='250px' width='250px'>",
        answered: false,
    },

    {
        question: "The first anime, in ____, was a two minutes clip of a samurai testing his new sword.",
        choices: ["1865","1917","1919","1907"],
        answer: "1917",
        correctImage: "<h2 class='question-message'>The original artists were; Shimokawa Oten, Jun'ichi Kouchi and Seitaro Kitayama.(This is NOT that anime)</h2><img class='answerImage' src='https://media.giphy.com/media/D9kRCocIGZ9f2/giphy.gif' alt='Chibi GIF' height='250px' width='250px'>",
        incorrectImage: "<h2 class='question-message'>The original artists were; Shimokawa Oten, Jun'ichi Kouchi and Seitaro Kitayama.(This is NOT that anime)</h2><img class='answerImage' src='https://media.giphy.com/media/D9kRCocIGZ9f2/giphy.gif' alt='Chibi GIF' height='250px' width='250px'>",
        timeOutImage: "<h2 class='question-message'>The original artists were; Shimokawa Oten, Jun'ichi Kouchi and Seitaro Kitayama.(This is NOT that anime)</h2><img class='answerImage' src='https://media.giphy.com/media/D9kRCocIGZ9f2/giphy.gif' alt='Chibi GIF' height='250px' width='250px'>",
        answered: false,
    },

];

// Random Bottom Messages to User (Senpai Says)
var correctMessages = ["You may wanna get a life.", "First Try!", "Someone's a weeboo!", "Ye You Right.", "Yoku yatta! :3"];
var incorrectMessages = ["Frowny Face...", "There's always Google...", "Maybe next time...", "Ganbari!", "Be the ball, throw yourself."];
var timesUpMessages = ["Time's up!", "Answer Faster!", "Watch the time!", "Google wouldn't load quick enough?", "You do know there's a timer right?"];
var startUPMessages = ["Man who stand on toilet, high on pot.", "Never play leapfrog with a unicorn.", "A donut without a hole is just a Danish.", "Your toast must ALWAYS land butter-side up!", "I don't make the rules, I just think em up and write em down.", "I've said it before and I'll say it again. I've said it before."];


// Ready Function
$(document).ready(function() {
    console.log("ready")

    // Randomly Generates Bottom Text (Senpai Says) Every Time the Page Loads
    $(".senpaiSays").html("Senpai Says: " + startUPMessages[Math.floor(startUPMessages.length * Math.random())]);


    // Activates Start Button
    $("#start").click(startGame);

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


    // Populates the Buttons with Choices
    function choices() {
        $(".button1").html("<button class='buttons options'>" + questions[currentQuestion].choices[0] + "</button>");
        $(".button2").html("<button class='buttons options'>" + questions[currentQuestion].choices[1] + "</button>");
        $(".button3").html("<button class='buttons options'>" + questions[currentQuestion].choices[2] + "</button>");
        $(".button4").html("<button class='buttons options'>" + questions[currentQuestion].choices[3] + "</button>");
    }

    // Activates Choice Buttons
    $(document).on('click', '.options', buttonClicks);

    // Defines Choice Button Functions
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


    // Correct Choice Function
    function correctAnwer() {
        console.log("Correct Choice");

        correctGuesses++;
        $(".senpaiSays").html("Senpai Says: " + correctMessages[Math.floor(correctMessages.length * Math.random())]);
        $(".question").html("<strong id='answer-color'><u>" + questions[currentQuestion].answer + "</u></strong> was correct!");  
        $(".images").html(questions[currentQuestion].correctImage); 

        questions[currentQuestion].answered = true;
        
        decider();
    }


    // Incorrect Choice Function
    function incorrectAnswer() {
        console.log("Incorrect Choice");

        incorrectGuesses++;
        $(".senpaiSays").html("Senpai Says: " + incorrectMessages[Math.floor(incorrectMessages.length * Math.random())]);
        $(".question").html("That is incorrect. The correct answer was <strong id='answer-color'><u>" + questions[currentQuestion].answer + "</u>. </strong>"); 
        $(".images").html(questions[currentQuestion].incorrectImage); 

        questions[currentQuestion].answered = true;

        decider();
    }


    // Time Out Function
    function timesUp() {
        console.log("Times Up!");

        timeOut++;
        $(".senpaiSays").html("Senpai Says: " + timesUpMessages[Math.floor(timesUpMessages.length * Math.random())]);
        $(".question").html("The correct answer was <strong id='answer-color'><u>" + questions[currentQuestion].answer + ".</u></strong>");
        $(".images").html(questions[currentQuestion].timeOutImage);

        questions[currentQuestion].answered = true;

        decider();       
    }


    // 'Decides' if it should move to next question or to result screen if all questions are answered
    // Also clears extra text off screen
    function decider(){
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            setTimeout(nextQuestion, 1000 * 8);
        }

        else if (questions[7].answered = true){
            setTimeout(resultScreen, 1000 * 8);
        }

        $(".timer").remove();
        $(".button1").text("");
        $(".button2").html("");
        $(".button3").html("");
        $(".button4").html("");
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

        // if and else if for different score messages
        //(There is probably an easier way to do this with a Switch/case, but I'm not very good with Switch/case yet so forgive me)
        if (correctGuesses > incorrectGuesses && correctGuesses > timeOut) {
            $(".senpaiSays").html("*Senpai Pats Head* You have been noticed!");
        }

        else if (incorrectGuesses > correctGuesses && incorrectGuesses > timeOut) {
            $(".senpaiSays").html("*Senpai beats you with walking stick*");
        }

        else if (timeOut > correctGuesses && timeOut > incorrectGuesses) {
            $(".senpaiSays").html("Senpai Says: How dare you go AFK at such a crucial moment!");
        }

        else if (correctGuesses === incorrectGuesses) {
            $(".senpaiSays").html("Senpai Says: Someone has been too lax in their studies.");
        }

        else {
            $(".senpaiSays").html("Senpai Says: Hmm these are some pretty mixed results. Perhaps another try?");
        }

    }

    // Activates Restart Button
    $(document).on('click', '#restart-button', startGame);


    function nextQuestion() {
        console.log("next question");

        time = 15;
        $(".answer").html("");
        $(".images").html("");
        $(".senpaiSays").html("");
        $(".question").html(questions[currentQuestion].question);

        // For some reason the timer wouldn't clear out after question so I had to do a little work around
        $("#timerPlacement").html("<p class='timer text-center'>Time Remaining: " + time + " seconds</p>");

        timer();
        choices();
    }
    
});

// I didn't have enough time to make more questions, so I hope that 8 will do. But I can add more questions to the array for more content with ease.

// I hope you enjoyed this cancerous content that I made you sit through  ^__^
