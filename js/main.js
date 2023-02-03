// TRACCIA:
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9: 30 di domani mattina!


// SVOLGIMENTO:

// Creare data fine countdown (quanto tempo sarà passato fino al giorno n)
const countDownDay = new Date("Feb 06, 2023 09:30:00").getTime();

const countDownTime = setInterval(generateCountDown, 1000);




/** 
 * Funzione che data la costante del giorno dal quale vogliamo fare il conto alla rovescia, calcolerà la differenza da quest'ultimo a oggi, calcolando secondi, minuti, ore e giorni
 * 
 */

function generateCountDown() {

    const now = new Date().getTime();

    let countDown = countDownDay - now;

    // Calcola secondi
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Calcola minuti
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    // Calcola ore
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = (hours < 10) ? "0" + hours : hours;

    // Calcola giorno
    let days = Math.floor((countDown / (1000 * 60 * 60 * 24)));
    days = (days < 10) ? "0" + days : days;

    let messageEl = document.getElementById("output_message");
    messageEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // SE distanza < 0 fine countdown
    if (countDown <= 0) {
        clearInterval(countDownTime);
        messageEl.innerHTML = "INIZIA LA CORREZIONE!";
    }
}