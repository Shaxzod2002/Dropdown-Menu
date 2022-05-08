let bars = document.getElementById('bars');
let userBox = document.querySelector('.userBox');
let dews = document.querySelector('.dews');
let threeSpan = document.querySelector('.three-span');
let oneSpan = document.querySelector('.one-span');
let twoSpan = document.querySelector('.two-span');
let menuToggle = document.querySelector('.menuToggle');

bars.onclick = () => {
    userBox.classList.toggle('active');
    dews.classList.toggle('active');
    oneSpan.classList.toggle('active');
    twoSpan.classList.toggle('active');
    threeSpan.classList.toggle('active');
    menuToggle.classList.toggle('active');
}