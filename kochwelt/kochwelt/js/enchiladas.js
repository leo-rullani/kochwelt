let inputNumber = document.getElementById("input");
let calcBtn = document.getElementById('calcBtn');
let loadingList = document.getElementById('loadingList');

let filling = [
    {amount : 125, ingredient : 'g Hähnchenbrustfilet (oder Hackfleisch, alternativ vegetarisch mit Bohnen oder Tofu)'},
    {amount : 50, ingredient : 'g rote Paprika, gewürfelt'},
    {amount : 50, ingredient : 'g grüne Paprika, gewürfelt'},
    {amount : 30, ingredient : 'g Zwiebel, gewürfelt'},
    {amount : 1, ingredient : ' kleine Knoblauchzehe, gehackt'},
    {amount : 30, ingredient : 'g Mais (aus der Dose, abgetropft)'},
    {amount : 30, ingredient : 'g schwarze Bohnen (aus der Dose, abgetropft)'},
    {amount : 1, ingredient : 'g Paprikapulver'},
    {amount : 1, ingredient : 'g Kreuzkümmel'},
    {amount : 1, ingredient : 'g Chilipulver'},
    {amount : 50, ingredient : 'g geriebener Käse (z. B. Cheddar oder Gouda)'},
    {amount : 2, ingredient : ' kleine Tortilla-Wraps (Weizen oder Mais, ca. 60–70 g pro Wrap)'},
]

let sauce = [
    {amount : 7, ingredient : 'ml Pflanzenöl'},
    {amount : 7, ingredient : 'g Mehl'},
    {amount : 125, ingredient : 'ml Gemüsebrühe'},
    {amount : 12, ingredient : 'g Tomatenmark'},
    {amount : 1, ingredient : 'g Paprikapulver'},
    {amount : 1, ingredient : 'g Kreuzkümmel'},
    {amount : 1, ingredient : 'g Chilipulver'},
]


// Mit dieser Funktion wird die Rezeptliste ins HTML geladen (Funktion wird beim Aufrufen der Seite gestartet)
function loadList(inners, outers) {
    let fillingRef = document.getElementById('filling');
    let sauceRef = document.getElementById('sauce');
    fillingRef.innerHTML = ``;
    sauceRef.innerHTML = ``;

    for (let i = 0; i < inners.length; i++) {
        let element = inners[i];
        fillingRef.innerHTML += getFillingTemplate(element);
    }

    for (let k = 0; k < outers.length; k++) {
        let sauceFilling = outers[k];
        sauceRef.innerHTML += getSauceTemplate(sauceFilling);
    }
}

function getFillingTemplate(element) {
    return `<li>${element.amount}${element.ingredient}</li>`
}

function getSauceTemplate(sauceFilling) {
    return `<li>${sauceFilling.amount}${sauceFilling.ingredient}</li>`
}


function calculatePortions(inners, outers) {

    loadList(filling, sauce);

    if (Number(inputNumber.value == '')){
        alert('Bitte eine Zahl für die gewünschte Portion eingeben.');
        return;
    }

    if (Number(inputNumber.value < 1)){
        alert('Die eingegebene Menge darf 0 nicht unterschreiten. Bitte versuche es erneut mit einem positiven Wert.');
        return;
    }
        let changeInput = Number(inputNumber.value);
        let fillingRef = document.getElementById('filling');
        let sauceRef = document.getElementById('sauce');
        fillingRef.innerHTML = ``;
        sauceRef.innerHTML = ``;

    // Die Kopie des ersten Arrays
    let copiedFilling = [];
    for (let i = 0; i < inners.length; i++) {
        let originalItem = inners[i];
        copiedFilling.push({ // Mit der push() Methode können die Key Value Paare in das kopierte Array geschrieben werden
            amount: originalItem.amount, // Kopiert die Numbers
            ingredient: originalItem.ingredient // Kopiert den Text
        });
    }

    // Berechnung basierend auf der ersten Kopie
    for (let i = 0; i < copiedFilling.length; i++) {
        let element = copiedFilling[i];
        element.amount *= changeInput;
        fillingRef.innerHTML += calculatedFillings(element); // Hier wird die Funktion aufgerufen um das aktualisierte Rezept ins HTML zu schreiben
    }

    // Kopie des zweiten Arrays
    let copiedSauce = [];
    for (let k = 0; k < outers.length; k++) {
        let originalSauce = outers[k];
        copiedSauce.push({ // Mit der push() Methode können die Key Value Paare in das kopierte Array geschrieben werden
            amount: originalSauce.amount,
            ingredient: originalSauce.ingredient
        });
    }

    // Berechnung des zweiten Arrays
    for (let k = 0; k < copiedSauce.length; k++) {
        let element = copiedSauce[k];
        element.amount *= changeInput;
        sauceRef.innerHTML += calculatedFillings(element); // Hier wird die Funktion aufgerufen um das aktualisierte Rezept ins HTML zu schreiben
    }
}

// Schreibt das aktualisierte Rezept ins HTML
function calculatedFillings(element) {
    return `<li>${element.amount}${element.ingredient}</li>`
}

// Läd beim Aufrufen der Seite das Rezept
loadingList.onload = function() {
    loadList(filling, sauce);
}

// Durch das Klicken auf den "Portionen" Button wird diese Funktion aufgerufen
calcBtn.onclick = function() {
    calculatePortions(filling, sauce);
}

/**
 * Initializes the event listeners for the menu toggle functionality.
 * Checks if the required DOM elements exist before adding event listeners.
 */
function init() {
    /**
     * @type {HTMLElement | null} toggle - The menu toggle button element.
     */
    const toggle = document.getElementById("menu-toggle");
  
    /**
     * @type {HTMLElement | null} closeBtn - The menu close button element.
     */
    const closeBtn = document.getElementById("menu-close-btn");
  
    // If either toggle or close button is not found, stop further execution
    if (!toggle || !closeBtn) return;
  
    /**
     * Add a click event listener to the toggle button.
     * @listens click
     */
    toggle.addEventListener("click", toggleMenu);
  
    /**
     * Add a click event listener to the close button.
     * @listens click
     */
    closeBtn.addEventListener("click", toggleMenu);
  }
  
  /**
  * Toggles the visibility of the side menu.
  * This function adds or removes the `resp_menu_closed` class
  * on the side menu element.
  */
  function toggleMenu() {
    /**
     * @type {HTMLElement | null} menu - The side menu element.
     */
    const menu = document.getElementById("side-menu");
  
    if (menu) {
        menu.classList.toggle("resp_menu_closed");
    }
  }
  
  init();