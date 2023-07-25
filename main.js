let elements = {
    'Fulmínea': 0,
    'Crióstasis': 0,
    'Anemos': 0,
    'Geósfera': 0,
    'Aquea': 0,
    'Fulguro': 0,
    'Vitalia': 0,
};

let questions = [
    {
        'question': '¿Te gusta más el sol o la luna?',
        'answers': [
            {'text': 'Sol', 'elements': ['Fulmínea', 'Anemos']},
            {'text': 'Luna', 'elements': ['Crióstasis', 'Vitalia']}
        ]
    },
        {
            'question': '¿Cómo actúas cuando estás frente a un desafío?',
            'answers': [
                {'text': 'Con audacia y energía, enfrentándolo de frente', 'elements': ['Fulmínea', 'Fulguro']},
                {'text': 'Con calma y paciencia, buscando la mejor estrategia', 'elements': ['Crióstasis', 'Geósfera']}
            ]
        },
        {
            'question': '¿Cuál de estas actividades te atrae más?',
            'answers': [
                {'text': 'Explorar lugares nuevos y emocionantes', 'elements': ['Anemos', 'Aquea']},
                {'text': 'Relajarte en un lugar tranquilo y familiar', 'elements': ['Geósfera', 'Vitalia']}
            ]
        },
        {
            'question': '¿Cuál es tu manera preferida de resolver un conflicto?',
            'answers': [
                {'text': 'Afrontarlo y discutir hasta llegar a una solución', 'elements': ['Fulmínea', 'Fulguro']},
                {'text': 'Evitarlo y buscar la armonía', 'elements': ['Vitalia', 'Crióstasis']}
            ]
        },
        {
            'question': '¿Cómo te sientes más cómodo en un grupo?',
            'answers': [
                {'text': 'Siendo el líder y tomando decisiones', 'elements': ['Fulmínea', 'Fulguro']},
                {'text': 'Siendo un miembro del equipo y trabajando juntos', 'elements': ['Aquea', 'Geósfera']}
            ]
        },
        {
            'question': '¿Qué te atrae más, el orden o el caos?',
            'answers': [
                {'text': 'El orden', 'elements': ['Geósfera', 'Crióstasis']},
                {'text': 'El caos', 'elements': ['Anemos', 'Fulguro']}
            ]
        },
        {
            'question': 'Si tuvieras que escoger, ¿preferirías ser temido o amado?',
            'answers': [
                {'text': 'Temido', 'elements': ['Fulmínea', 'Fulguro']},
                {'text': 'Amado', 'elements': ['Aquea', 'Vitalia']}
            ]
        },
        {
            'question': 'Si pudieras volar o bucear sin límites, ¿qué escogerías?',
            'answers': [
                {'text': 'Volar', 'elements': ['Anemos', 'Fulguro']},
                {'text': 'Bucear', 'elements': ['Aquea', 'Crióstasis']}
            ]
        },
        {
            'question': '¿Cómo te gustaría pasar tu tiempo libre?',
            'answers': [
                {'text': 'Aventurándome en la naturaleza', 'elements': ['Anemos', 'Vitalia']},
                {'text': 'Relajándome en casa', 'elements': ['Crióstasis', 'Geósfera']}
            ]
        },
        {
            'question': '¿Qué te importa más, la justicia o la misericordia?',
            'answers': [
                {'text': 'Justicia', 'elements': ['Fulmínea', 'Geósfera']},
                {'text': 'Misericordia', 'elements': ['Aquea', 'Vitalia']}
            ]
        },
        {
            'question': '¿Qué preferirías, cambiar el mundo o ser cambiado por el mundo?',
            'answers': [
                {'text': 'Cambiar el mundo', 'elements': ['Fulmínea', 'Anemos']},
                {'text': 'Ser cambiado por el mundo', 'elements': ['Crióstasis', 'Vitalia']}
            ]
        },
        {
            'question': '¿Qué es más importante para ti, la verdad o la felicidad?',
            'answers': [
                {'text': 'La verdad', 'elements': ['Geósfera', 'Fulguro']},
                {'text': 'La felicidad', 'elements': ['Aquea', 'Vitalia']}
            ]
        },
        {
            'question': '¿Eres más de acción o de palabras?',
            'answers': [
                {'text': 'De acción', 'elements': ['Fulmínea', 'Fulguro']},
                {'text': 'De palabras', 'elements': ['Anemos', 'Crióstasis']}
            ]
        },
        {
            'question': '¿Qué buscas en un amigo, lealtad o honestidad?',
            'answers': [
                {'text': 'Lealtad', 'elements': ['Geósfera', 'Fulguro']},
                {'text': 'Honestidad', 'elements': ['Anemos', 'Aquea']}
            ]
        },
        {
            'question': '¿Eres una persona más racional o emocional?',
            'answers': [
                {'text': 'Racional', 'elements': ['Crióstasis', 'Geósfera']},
                {'text': 'Emocional', 'elements': ['Fulmínea', 'Vitalia']}
            ]
        },
        {
            'question': '¿Qué prefieres, tener una gran aventura o una vida tranquila?',
            'answers': [
                {'text': 'Una gran aventura', 'elements': ['Anemos', 'Fulguro']},
                {'text': 'Una vida tranquila', 'elements': ['Crióstasis', 'Geósfera']}
            ]
        },
        {
            'question': '¿Prefieres tomar decisiones con la cabeza o con el corazón?',
            'answers': [
                {'text': 'Con la cabeza', 'elements': ['Crióstasis', 'Geósfera']},
                {'text': 'Con el corazón', 'elements': ['Fulmínea', 'Vitalia']}
            ]
        },
        {
            'question': '¿Te sientes más atraído por el misterio o por la claridad?',
            'answers': [
                {'text': 'El misterio', 'elements': ['Anemos', 'Fulguro']},
                {'text': 'La claridad', 'elements': ['Geósfera', 'Crióstasis']}
            ]
        },
        {
            'question': 'Si fueras un artista, ¿te atraería más la pintura o la música?',
            'answers': [
                {'text': 'La pintura', 'elements': ['Geósfera', 'Aquea']},
                {'text': 'La música', 'elements': ['Anemos', 'Fulmínea']}
            ]
        },
        {
            'question': '¿Cómo te gusta celebrar tus victorias?',
            'answers': [
                {'text': 'Con una gran fiesta y muchos amigos', 'elements': ['Anemos', 'Fulguro']},
                {'text': 'En silencio y paz, disfrutando del momento', 'elements': ['Crióstasis', 'Vitalia']}
            ]
        },
        {
            'question': 'Si tuvieras que escoger, ¿vivirías en un bosque o en una ciudad?',
            'answers': [
                {'text': 'En un bosque', 'elements': ['Geósfera', 'Vitalia']},
                {'text': 'En una ciudad', 'elements': ['Fulmínea', 'Anemos']}
            ]
        },
    ];
    
;

let currentQuestion = 0;

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('button1').innerText = question.answers[0].text;
    document.getElementById('button2').innerText = question.answers[1].text;
}

function selectAnswer(answerIndex) {
    let elementsForAnswer = questions[currentQuestion].answers[answerIndex].elements;
    for (let element of elementsForAnswer) {
        elements[element] += 1;
    }
    currentQuestion += 1;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    let maxCount = 0;
    let chosenElement = null;
    for (let element in elements) {
        if (elements[element] > maxCount) {
            maxCount = elements[element];
            chosenElement = element;
        }
    }
    document.getElementById('question').innerText = 'Tu elemento es ' + chosenElement + '!';
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
}

document.getElementById('button1').onclick = function() {selectAnswer(0);};
document.getElementById('button2').onclick = function() {selectAnswer(1);};

showQuestion();
