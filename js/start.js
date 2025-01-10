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

  // If the side menu exists, toggle the "resp_menu_closed" class
  if (menu) {
      menu.classList.toggle("resp_menu_closed");
  }
}

// Initialize the menu functionality when the script is executed
init();
