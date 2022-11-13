// 1-a: Lagra frågorna i ett objekt eftersom det är flera frågor
// 1-b: Frågorna ska ha fråga, 2 alternativ, rätt svar
// 2-a: Skapa en loop som håmtar alla frågor med info
// 2-b: Koppla dem till frontend
// 3-a: Knapp, submit som har en funktion är svaren kontrolleras
// 3-b: När svaren är klara - kör en funktion som skriver ut resultatet

const quizContainer = document.querySelector('.container');

const qId = 0; // Maybe use question ID to everyanswer ID.

// Print out the values
Object.values(questions).forEach(questionEntry => {
    console.log(questionEntry.question);
    quizContainer.innerHTML += questionEntry.question + '<br>';
});