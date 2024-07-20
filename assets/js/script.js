/*Navbar */

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar-custom');

    navbar.addEventListener('mouseover', function () {
        navbar.classList.add('navbar-interact');
    });

    navbar.addEventListener('mouseout', function () {
        navbar.classList.remove('navbar-interact');
    });
});