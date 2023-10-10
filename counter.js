const localStorageKey = 'name-memory';
const typeArea = document.getElementById('name');
const save = document.getElementById('good');
const remove = document.getElementById('bad');

const hiAll = [];

class AllOfYou {
    constructor(_name) {
        this.name = _name;
    }
}

const renderList = function () {
    const listItems = document.getElementById('list');

    hiAll.forEach((person) => {
        const newItem = document.createElement('li');
        newItem.innerText = person.name; //acceddo alla prop nome di ogni elemento
        listItems.appendChild(newItem);
    });
};

const saveAction = () => {
    const saved = typeArea.value;
    localStorage.setItem(localStorageKey, saved);
    alert('salvato!');
    hiAll.push(new AllOfYou(saved)); // Aggiungo nome a hiAll 
    renderList( saved); /* RICHIAMO LA FUNZIONE PER CREARE LI */
};

const removeAction = () => {
    localStorage.removeItem(localStorageKey);
    hiAll.length = 0;
    renderList();
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

    // Salva il valore corrente del contatore prima della chiusura della finestra
    window.addEventListener('beforeunload', function () {
        sessionStorage.setItem('savedSeconds', seconds.toString());
    });

    // Ripristina il contatore quando la pagina viene ricaricata
    window.addEventListener('load', function () {
        updateCounter();
    });
});
