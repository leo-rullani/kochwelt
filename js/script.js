function init() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // Klick-Event für das Umschalten
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Wenn das DOM geladen ist, rufen wir init() auf
  document.addEventListener('DOMContentLoaded', init);