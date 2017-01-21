var menuIcon = document.getElementById('nav-icon');
var menuToggle = document.getElementById('menu');
menuIcon.addEventListener('click', function () {
    if (menuToggle.className === 'menu-closed') {
        menuToggle.className = 'menu-open';
    } else {
        menuToggle.className = 'menu-closed';
    }
});