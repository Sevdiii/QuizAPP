let questions = [


    {
        'question': 'Welche Lieblingsfarbe hat Sevdi?',
        'answer_1': 'blau',
        'answer_2': 'schwarz',
        'answer_3': 'rot',
        'answer_4': 'lila',
        'right_answer': 3,
    },





    {
        'question': 'Wie  groß bin ich in cm?',
        'answer_1': '180 cm',
        'answer_2': '184 cm',
        'answer_3': '188 cm',
        'answer_4': '178 cm',
        'right_answer': 2,
    },

    {
        'question': 'Was hasse ich überalles auf der Welt',
        'answer_1': 'Jemanden anlügen',
        'answer_2': 'Freches verhalten',
        'answer_3': 'Unpünktlichkeit...',
        'answer_4': 'Nachtragkeit',
        'right_answer': 1,
    },

    {
        'question': 'Wo möchte ich mal unbedingt hin?',
        'answer_1': 'Venedig',
        'answer_2': 'Rimini',
        'answer_3': 'Rio de Janeiro',
        'answer_4': 'Tokyo',
        'right_answer': 4,
    },
    {
        'question': 'Welches Auto will ich mir später holen?',
        'answer_1': 'BMW M6',
        'answer_2': 'Mercedes C-Klasse 200',
        'answer_3': 'Range Rover',
        'answer_4': 'Mercedes GLE Klasse',
        'right_answer': 4,
    },
    {
        'question': 'Was ist mein Lieblingsessen?',
        'answer_1': 'Spaghetti bolognese',
        'answer_2': 'Curry Reis',
        'answer_3': 'Lasagne',
        'answer_4': 'Hab keins',
        'right_answer': 2,

    },

    {
        'question': 'Wie nennt sich die Stelle, welches ich anstreben möchte, nach meiner Weiterbildung?',
        'answer_1': 'KI Developer',
        'answer_2': 'Fullstack Enwickler',
        'answer_3': 'Webdeveloper im Berech Web Frontend',
        'answer_4': 'Baustelle',
        'right_answer': 3,
    },

    {
        'question': 'Was mag ich  am meißten?',
        'answer_1': 'Autos',
        'answer_2': ' Witze..',
        'answer_3': 'Nachtragkeit',
        'answer_4': 'Flugzeuge',
        'right_answer': 1,
    }

];


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

}

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCESS = new Audio('./audio/right.mp3');
let AUDIO_FAIL = new Audio('./audio/wrong.mp3');

function showQuestions() {

    if (currentQuestion >= questions.length) {
        showEndscreen();
    } else {
        updateToNextQuestion();
        upDateprogressBar();

    }

}



function updateToNextQuestion() {
    let question = questions[currentQuestion];




    document.getElementById('current-questions').innerHTML = currentQuestion + 1;
    document.getElementById('questionstext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function upDateprogressBar() {

    let bar = currentQuestion / questions.length;
    bar = Math.round(bar * 100);

    document.getElementById('progress-bar').innerHTML = `${bar}%`
    document.getElementById('progress-bar').style.width = `${bar}%`
}



function showEndscreen() {
    document.getElementById('end-screen').classList.remove('display-n');
    document.getElementById('quiz-game').classList.add('display-n');
    document.getElementById('quiz-picture').src = "./pic/star-2402083_1920.png"; //Bild am Ende geändert mit einem anderen!
    document.getElementById('pic-end').classList.add('display-n');

    document.getElementById('amount-of-question').innerHTML = questions.length; // Anzahl der falschen Anworten
    document.getElementById('amount-of-current-question').innerHTML = rightQuestions; //Anzahl der richtigen Antworten
}



function answer(selection) {
    // Parameterübergabe, aber in der funktion kann ich beliebigen Namen eingeben als Paramter z.B Selection {
    let question = questions[currentQuestion]; // Array in einer Variable in der Funktion deklariert
    let selectedQuestionNumber = selection.slice(-1); // greift über Selection den Letzen Buchstaben, also z.b 3

    let idOfRightAnswer = `answer_${question['right_answer']}` // da wir oben eine Zahl eingebenen habe in JSON wird das über Dollarzeichen hinzugefügt

    if (selectedQuestionNumber == question['right_answer']) {

        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCESS.play();
        rightQuestions++;

    } else {
        console.log('Falsche antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // parendNode greift über eine klasse drüber
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-btn').disabled = false; // Button erst bei Funktion enable
}

function nextQuestion() {
    currentQuestion++; // da sich nur ShowQuestions ändert, ändern wir die currentQuestons von 0 auf 1
    document.getElementById('next-btn').disabled = true; // Button erst bei Funktion enable

    resetbuttons();
    showQuestions();


}


function resetbuttons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('quiz-picture').src = "/pic/pexels-pixabay-356079.jpg";

    document.getElementById('end-screen').classList.add('display-n'); // wieder schließen
    document.getElementById('quiz-game').classList.remove('display-n'); // wieder anzeigen

    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('current-questions').innerHTML = currentQuestion + 1;
    init();

}