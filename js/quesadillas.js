let inputNumber = document.getElementById("input");
let calcBtn = document.getElementById("calcBtn");
let loadingList = document.getElementById("loadingList");

let filling = [
    { amount: 125, ingredient: "g geriebener Käse (z. B. Cheddar oder Mozzarella)" },
    { amount: 50, ingredient: "g rote Paprika, gewürfelt" },
    { amount: 50, ingredient: "g grüne Paprika, gewürfelt" },
    { amount: 30, ingredient: "g Zwiebel, gewürfelt" },
    { amount: 30, ingredient: "g Champignons, klein geschnitten" },
    { amount: 30, ingredient: "g Mais (aus der Dose, abgetropft)" },
    { amount: 30, ingredient: "g Kidneybohnen (aus der Dose, abgetropft)" },
    { amount: 1, ingredient: "g Paprikapulver" },
    { amount: 1, ingredient: "g Kreuzkümmel" },
    { amount: 1, ingredient: "g Chilipulver" },
    { amount: 2, ingredient: " große Tortilla-Wraps (Weizen oder Mais, ca. 25 cm Durchmesser)" },
];

let sauce = [
    { amount: 100, ingredient: "g Sauerrahm" },
    { amount: 50, ingredient: "g Guacamole" },
    { amount: 1, ingredient: "g Paprikapulver" },
    { amount: 1, ingredient: "g Kreuzkümmel" },
    { amount: 1, ingredient: "g Chilipulver" },
];

// Funktion zum Laden der Rezeptliste ins HTML
function loadList(inners, outers) {
    let fillingRef = document.getElementById("filling");
    let sauceRef = document.getElementById("sauce");
    fillingRef.innerHTML = ``;
    sauceRef.innerHTML = ``;

    inners.forEach((item) => {
        fillingRef.innerHTML += `<li>${item.amount} ${item.ingredient}</li>`;
    });

    outers.forEach((item) => {
        sauceRef.innerHTML += `<li>${item.amount} ${item.ingredient}</li>`;
    });
}

// Funktion zur Berechnung der Portionsgrößen
function calculatePortions(inners, outers) {
    if (inputNumber.value.trim() === "") {
        alert("Bitte eine Zahl für die gewünschte Portion eingeben.");
        return;
    }

    if (Number(inputNumber.value) < 1) {
        alert("Die eingegebene Menge darf 0 nicht unterschreiten. Bitte versuche es erneut mit einem positiven Wert.");
        return;
    }

    let changeInput = Number(inputNumber.value);

    // Neue Füllung basierend auf der Portionsanzahl
    let updatedFilling = inners.map((item) => ({
        amount: item.amount * changeInput,
        ingredient: item.ingredient,
    }));

    // Neue Sauce basierend auf der Portionsanzahl
    let updatedSauce = outers.map((item) => ({
        amount: item.amount * changeInput,
        ingredient: item.ingredient,
    }));

    loadList(updatedFilling, updatedSauce);
}

// Events hinzufügen
calcBtn?.addEventListener("click", () => calculatePortions(filling, sauce));
loadingList?.addEventListener("load", () => loadList(filling, sauce));

// Menü-Funktionalität initialisieren
function initMenu() {
    const toggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close-btn");
    const menu = document.getElementById("side-menu");

    if (toggle && closeBtn && menu) {
        toggle.addEventListener("click", () => menu.classList.toggle("resp_menu_closed"));
        closeBtn.addEventListener("click", () => menu.classList.toggle("resp_menu_closed"));
    }
}

initMenu();