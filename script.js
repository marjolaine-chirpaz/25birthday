// Mettre à jour la date de l'événement ici
const eventDate = new Date("April 6, 2024 20:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    // Calculs pour jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afficher le résultat dans un élément avec id="countdown"
    document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // Si le compteur arrive à 0, écrire un texte
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "C'est l'heure de la fête !";
    }
}

// Mettre à jour le compteur toutes les secondes
let x = setInterval(updateCountdown, 1000);

