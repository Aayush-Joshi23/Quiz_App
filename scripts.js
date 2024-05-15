var questions = [
    {
        question : "Who is Tony Stark's father ?",
        choices : ["Howard Stark", "Halloween Stark", "Peter Stark", "Donald Stark"],
        correctAnswer :0
    },
    {
        question : "Captain America's shield and Bucky's arm are made of what ?",
        choices : ["Silver", "Titanium", "Uranium", "Vibranium"],
        correctAnswer :3
    },
    {
        question : "Wanda and her brother Pietro are from where ?",
        choices : ["Czech Republic", "Sokovia", "Slovakia", "Germany"],
        correctAnswer :1
    },
    {
        question : "On what planet was the Soul Stone in Infinity War ?",
        choices : ["Nebula", "NoWhere", "Asgard", "Vormir" ],
        correctAnswer : 3
    },
    {
        question : "Thor played what video game in Avengers: Endgame ?",
        choices : [ "Rocket League", "Fortnite", "GTA V", "Cyber-Punk"],
        correctAnswer : 1
    },
    {
        question : "Stan Lee made his final cameo in which Marvel movie ?",
        choices : ["Avengers: Endgame", "Captain America: Winter Soldier", "Spiderman: Far from Home", "Thor: Ragnarok"],
        correctAnswer : 0
    },
    {
        question : "What's Mordo's full name ?",
        choices : ["Kevin Mordo", "Sam Mordo" , "Karl Mordo", "Morbius Mordo"],
        correctAnswer : 2
    },
    {
        question : "Hawkeye has how many children ?",
        choices : [ "Four", "Three", "One", "Two"],
        correctAnswer : 1
    },
    {
        question : "Star-Lord/Peter Quill's father Ego is a what ?",
        choices : ["Eternal", "Cosmic Being","Celestial", "Titan"],
        correctAnswer : 2
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function()
{
    displayCurrentQuestion();
    $(this).find("quizMessage").hide();
    $(this).find(".nextButton").on("click", function()
    {
        if (!quizOver)
        {
            value = $("input[type='radio']:checked").val();
            if(value == undefined)
            {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }
            else
            {
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer)
                {
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length)
                {
                    displayCurrentQuestion();
                }
                else
                {
                    console.log("last question");
                    displayScore();
                    console.log("score displayed");
                    $(document).find(".nextButton").text("Play Again ?");
                    quizOver = true;
                }
            }
        }
        else
        {
            quizOver=false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
            
        }
    });

});

//hello 

function displayCurrentQuestion()
{
    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++)
    {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+i+' name="dynradio"/>'+choice+'</li>').appendTo(choiceList);
    }
}

function resetQuiz()
{
    currentQuestion=0;
    currentAnswers=0;
    hideScore();
}

function displayScore()
{
    $(document).find(".quizContainer > .result").text("You scored : "+correctAnswers+" out of "+questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore()
{
    $(document).find(".result").hide();
}

