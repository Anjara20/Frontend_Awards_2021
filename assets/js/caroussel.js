// Golbal variables
let caroussel = document.querySelector('#films-caroussel');
let carousselWidth = caroussel.firstElementChild.offsetWidth;
let count = 0;
const controllers = {
    left: document.querySelector('.caroussel-controllers button.prev'),
    right: document.querySelector('.caroussel-controllers button.next'),
};

console.log(carousselWidth);

// Control hanlder
const handleControl = (isNext = true) => {
    if ((isNext && count === 2) || (!isNext && count === 0)) return;
    count += 1 * isNext ? 1 : -1;
    caroussel.style.transform = `translateX(${- count * carousselWidth}px)`;
}

controllers.left.addEventListener('click', () => handleControl(false));
controllers.right.addEventListener('click', () => handleControl(true));
