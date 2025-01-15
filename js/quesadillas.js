let inputNumber = document.getElementById("input");
let calcBtn = document.getElementById('calcBtn');
let loadingMyList = document.getElementById('loadingMyList');

let fillingAmount = [
    2,
    50,
    50,
    30,
    30,
    30,
    30,
]

let fillingIngredient = [
    ' Tortilla-Fladen',
    'g geriebener Käse',
    'g rote Paprika, klein gewürfelt',
    'g Zwiebel, fein gehackt',
    'g Champignons, klein geschnitten',
    'g Mais (aus der Dose, abgetropft)',
    'g schwarze Bohnen (aus der Dose, abgetropft)',
]

let sauceAmount = [
    1,
    2,
    1,
    1,
    1,
]

let sauceIngredient = [
    ' reife Avocado',
    ' EL Limettensaft',
    ' Tomate klein gewürfelt',
    ' Knoblauchzehe',
    ' EL Koriander',
]


// Läd die Zutaten für die Füllung der Enchiladas.
function loadListFilling(fAmount, fIngredient) {
    let listRef = document.getElementById('fillingAmount');
    listRef.innerHTML = ``;

    for (let i = 0; i < fAmount.length; i++) {
        const amount = fAmount[i];
        const ingredient = fIngredient[i];
        listRef.innerHTML += fillingTemplate(amount, ingredient);
    }
    loadListSauce(sauceAmount, sauceIngredient);
}


//Template Funktion um die Zutaten der Füllung in das HTML zu schreiben.
function fillingTemplate(amount, ingredient) {
    return `<li>${amount}${ingredient}</li>`;
}


// Läd die Zutaten für die Sauce der Enchiladas.
function loadListSauce(sAmount, sIngredient){
    let listRef = document.getElementById('sauce');
    listRef.innerHTML = ``;

    for (let i = 0; i < sAmount.length; i++) {
        const amount = sAmount[i];
        const ingredient = sIngredient[i];
        listRef.innerHTML += sauceTemplate(amount, ingredient);
    }
}


// Template Funktion um die Zutaten der Sauce in das HTML zu schreiben.
function sauceTemplate(amount, ingredient) {
    return `<li>${amount}${ingredient}</li>`
}


// Checkt die Conditions, ob das Input Feld richtig ausgefüllt würde. Startet außerdem die Portions Multiplizierung.
function checkConditions() {
    let inputValue = inputNumber.value.trim();

    if (inputValue === '') {
        alert('Bitte das Feld ausfüllen.');
        return;
    }

    inputValue = Number(inputValue);

    if (inputValue <= 0) {
        alert('Die Portion kann nicht 0 betragen und darf nicht in den negativen Bereich gehen.');
        return;
    }
    calculateFillingPortions(fillingAmount, fillingIngredient, inputValue);
}


// Multipliziert die Portionen der Füllung mit der eingegebenen Zahl aus dem Input Feld.
function calculateFillingPortions(fAmount, fIngredient, value) {
    let listRef = document.getElementById('filling');
    listRef.innerHTML = ``;

    for (let i = 0; i < fAmount.length; i++) {
        const amount = fAmount[i];
        const ingredient = fIngredient[i];
        let multiply = amount * value;
        listRef.innerHTML += resultTemplate(multiply, ingredient);
    }
    calculateSaucePortions(sauceAmount, sauceIngredient, value);
}


// Multipliziert die Portionen der Sauce mit der eingegebenen Zahl aus dem Input Feld.
function calculateSaucePortions(sAmount, sIngredient, value) {
    let listRef = document.getElementById('sauce');
    listRef.innerHTML = ``;

    for (let i = 0; i < sAmount.length; i++) {
        const amount = sAmount[i];
        const ingredient = sIngredient[i];
        let multiply = amount * value;
        listRef.innerHTML += resultTemplate(multiply, ingredient);
    }
}


// Schreibt die multiplizierte Portion ins HTML.
function resultTemplate(multi, ingredient) {
    return `<li>${multi}${ingredient}</li>`;
}


loadingMyList.onload = function() {
    loadListFilling(fillingAmount, fillingIngredient);
}


calcBtn.onclick = function() {
    checkConditions();
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