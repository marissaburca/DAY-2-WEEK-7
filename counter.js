
const typeArea = document.getElementById('name');
const save = document.getElementById('good');
const remove = document.getElementById('bad');


const saveAction = () => {
    const saved = typeArea.value;
    localStorage.setItem('localStorageKey', saved);
    alert('salvato!');
    localStorage.getItem('saved')
    typeArea.value= ''
    const newPerson = document.getElementById('list');
    newPerson.innerHTML = `${saved}`; //acceddo alla prop nome di ogni elemento  
    };
   

const removeAction = () => {
    localStorage.removeItem(localStorageKey);
};




save.addEventListener('click', saveAction);
remove.addEventListener('click', removeAction);




/*  contatore */
document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    let seconds = 0;

    // Ripristina il contatore dalla sessionStorage, se c'è
    const savedSeconds = sessionStorage.getItem('savedSeconds');
    if (savedSeconds) {
        seconds = parseInt(savedSeconds, 10);
    }

    function updateCounter() {
        counterElement.textContent = seconds + ' secondi';
    }

    function incrementCounter() {
        seconds++;
        updateCounter();
    }

    // funzione per aggiornare contatore ad ogni secondo
    const intervalId = setInterval(incrementCounter, 1000);

    // Salva il valore corrente del contatore prima del refresh della finestra
    window.addEventListener('beforeunload', function () {
        sessionStorage.setItem('savedSeconds', seconds.toString());
    });

    // Ripristina il contatore quando la pagina viene ricaricata
    window.addEventListener('load', function () {
        updateCounter();
    });
});
