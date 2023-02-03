// TRACCIA:

// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!

// Ogni secondo il nostro countdown dovrà scalare fino alle 9: 30 di domani mattina!

// SVOLGIMENTO:

let messageEl = document.getElementById("output_message");
// Creare data fine countdown (quanto tempo sarà passato fino al giorno n)
const countDownDay = new Date("Feb 04, 2023 09:30:00").getTime();
// console.log(countDownDay);

// Impostare distanza tra momento partenza e fine countdown

// SE distanza < 0 fine countdown



const now = new Date().getTime();
// console.log(now);

let countDown = countDownDay - now;
console.log("Millisecondi rimanenti al giorno n " + countDown);

// Calcola secondi
const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
console.log("Secondi rimanenti al minuto successivo o alla fine del countdown: " + seconds);

// Calcola minuti
const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
console.log("Minuti rimanenti all'ora successiva o alla fine del countdown: " + minutes);

// Calcola ore
const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log("Ore rimanenti al giorno successivo o alla fine del countdown: " + hours);

// Calcola giorno
const days = Math.floor((countDown / (1000 * 60 * 60 * 24)));
console.log("Giorni rimanenti alla fine del countdown: " + days);


// Funzione per decrementare countdown ogni secondo

    // Impostare momento partenza countdown

    // Calcola secondi
    // const seconds = ;
    // Calcola ora
    // Calcola minuti
    // Calcola giorno
