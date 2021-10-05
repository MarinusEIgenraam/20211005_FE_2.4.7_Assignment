/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
    return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

const school = {
    naam: `Novi Hogeschool`,
    studie: `Full Stack Development`,
}

const getSchool = (school) => school.naam;

console.log(getSchool(school))

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

const gelukkigeOntvanger = [
    {
        voorNaam: `Marinus`,
        achterNaam: `Eigenraam`,
        grades: [8, 8.5, 6, 7],

    }, {
        voorNaam: `Max`,
        achterNaam: `Verstappen`,
        grades: [10,10,10,10]
    }
]

const geefCompiment = (ontvanger) => `"Lekker bezig met die functies, ${ontvanger.voorNaam} ${ontvanger.achterNaam}!"`;
console.log(geefCompiment(gelukkigeOntvanger[0]));

for (i = 0; i < gelukkigeOntvanger.length; i++) {
    console.log(geefCompiment(gelukkigeOntvanger[i]));
}

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

const getGrades = (person) => person.grades;
console.log(getGrades(gelukkigeOntvanger[0]))

for (i = 0; i < gelukkigeOntvanger.length; i++) {
    const person = gelukkigeOntvanger[i];

    console.log(`Meneer ${person.voorNaam} ${person.achterNaam} heeft de cijfers ${getGrades(person)} gehaald`);
    console.log(getGrades(person))
}

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

const getDetails = (person) => person;

console.log(getDetails(gelukkigeOntvanger[0]))