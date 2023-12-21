/* --------------- PUNTO 1 --------------- */

/* const character = window.prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)');

console.log(character); */

/* --------------- PUNTO 2 --------------- */

/* const span = document.querySelector('h1 > span');

switch (character) {
    case "Mario":
        console.log(span.textContent = "Mario");
        break;
    case "Luigi":   
        console.log(span.textContent = "Luigi");
        break;
    case "Bowser":
         console.log(span.textContent = "Bowser Morton Koopa");
        break;
    case "Peach":
        console.log(span.textContent = "Princesa Peach Toadstool");
        break;
    case "Yoshi":
        console.log(span.textContent = "T. Yoshisaur Munchakoopas");
        break;
    case "Toad":
        console.log(span.textContent = "Toad");
        break;
    case "Toadette":
        console.log(span.textContent = "Toadette");
        break;
    case "Daisy":
        console.log(span.textContent = "Princesa Daisy");
        break;
    default:
        console.log(span.textContent = "desconocido");
        break;
    }
 */
/* --------------- PUNTO 3 --------------- */

/* const mario = document.getElementById('mario');
const luigi = document.getElementById('luigi');
const bowser = document.getElementById('bowser');
const peach = document.getElementById('peach');
const yoshi = document.getElementById('yoshi');
const toad = document.getElementById('toad');
const toadette = document.getElementById('toadette');

const characterLowerCase = character.toLowerCase();
console.log(characterLowerCase);

if (characterLowerCase == 'mario') {
    mario.title = "Presentado";
} else if (characterLowerCase == 'luigi') {
    luigi.title = "Presentado";
} else if (characterLowerCase == 'bowser') {
    bowser.title = "Presentado";
} else if (characterLowerCase == 'peach') {
    peach.title = "Presentado";
} else if (characterLowerCase == 'yoshi') {
    yoshi.title = "Presentado";
} else if (characterLowerCase == 'toad') {
    toad.title = "Presentado";
} else {
    toadette.title = "Presentado";
} */

/* --------------- PUNTO 6 --------------- */

function presentar() {

    /* --------------- PUNTO 1 --------------- */
    
    const character = window.prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)');

    console.log(character);

    /* --------------- PUNTO 2 --------------- */

    const span = document.querySelector('h1 > span');

    switch (character.toLowerCase()) {
        case "mario":
            console.log(span.textContent = "Mario");
            break;
        case "luigi":   
            console.log(span.textContent = "Luigi");
            break;
        case "bowser":
            console.log(span.textContent = "Bowser Morton Koopa");
            break;
        case "peach":
            console.log(span.textContent = "Princesa Peach Toadstool");
            break;
        case "yoshi":
            console.log(span.textContent = "T. Yoshisaur Munchakoopas");
            break;
        case "toad":
            console.log(span.textContent = "Toad");
            break;
        case "toadette":
            console.log(span.textContent = "Toadette");
            break;
        case "daisy":
            console.log(span.textContent = "Princesa Daisy");
            break;
        default:
            console.log(span.textContent = "desconocido");
            break;
        }

    /* --------------- PUNTO 3 --------------- */

    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const bowser = document.getElementById('bowser');
    const peach = document.getElementById('peach');
    const yoshi = document.getElementById('yoshi');
    const toad = document.getElementById('toad');
    const toadette = document.getElementById('toadette');

    const characterLowerCase = character.toLowerCase();
    console.log(characterLowerCase);

    if (characterLowerCase == 'mario') {
        mario.title = "Presentado";
    } else if (characterLowerCase == 'luigi') {
        luigi.title = "Presentado";
    } else if (characterLowerCase == 'bowser') {
        bowser.title = "Presentado";
    } else if (characterLowerCase == 'peach') {
        peach.title = "Presentado";
    } else if (characterLowerCase == 'yoshi') {
        yoshi.title = "Presentado";
    } else if (characterLowerCase == 'toad') {
        toad.title = "Presentado";
    } else {
        toadette.title = "Presentado";
    }

    /* --------------- BUTTON --------------- */

    const btn = document.getElementById('btn');
    btn.style.visibility = "hidden";
}