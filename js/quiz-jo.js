// 1-a: Lagra frågorna i ett objekt eftersom det är flera frågor
// 1-b: Frågorna ska ha fråga, 2 alternativ, rätt svar
// 2-a: Skapa en loop som håmtar alla frågor med info
// 2-b: Koppla dem till frontend
// 3-a: Knapp, submit som har en funktion är svaren kontrolleras
// 3-b: När svaren är klara - kör en funktion som skriver ut resultatet

const quizContainer = document.querySelector('.container');
const quizForm = document.querySelector('#quiz');

let qId = 0;

// Setup the form and display it in the DOM.
Object.values(questions).forEach(questionEntry => {
    
    console.log(questionEntry.question);

    // Create the question div
    const questionBox = document.createElement('div');
    questionBox.className = 'd-block mt-4';
    quizContainer.appendChild(questionBox);

    // Create the question title
    const questionText = document.createElement('span');
    questionText.className = 'questiontext';
    questionText.textContent = questionEntry.question;
    questionBox.appendChild(questionText);
    
    let answers = questionEntry.answers;

    for(let i = 0; i < answers.length; i++) {
        console.log(answers[i].ans);
        //console.log(questionId);

        qId++;
        console.log(qId);

        // Label
        const questionLabel = document.createElement('label');
        questionLabel.className = 'd-block';
        questionLabel.setAttribute('for', qId);
        questionLabel.setAttribute('id', 'label-'+qId);
    
        questionLabel.textContent = answers[i].ans;
        questionBox.appendChild(questionLabel);

        // Input radio
        const questionAnswer = document.createElement('input');
        questionAnswer.setAttribute('type', 'radio');
        questionAnswer.setAttribute('id', qId);
        questionAnswer.setAttribute('value', answers[i].check)

        console.log(answers[i].check);
        questionLabel.prepend(questionAnswer);
    }
    
});

let calcPoints = 0;

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicking on the form");

    qId = 0;

    Object.values(questions).forEach(checkAnswers => {

        let check = checkAnswers.answers;
        
        for(let i = 0; i < check.length; i++) {
            qId++;
            
            // Checks if the radio button is selected and if it is true
            let userAnwswer = document.querySelector('input[id="'+qId+'"]:checked');
            let labelCheck = document.querySelector('#label-'+qId);

            if (userAnwswer) {
                let answer = userAnwswer.value;
                if (answer == 'true') {
                    // Adds 1 point to the score.
                    calcPoints++;
                    labelCheck.classList.add('correct');
                    console.log(calcPoints);
                } else {
                    // Set red color on wrong answer.
                    labelCheck.classList.add('wrong');
                }
            }
        }
    });
});