// Dom manipulation For the burgerMenu

// For showing the burger menu page

const burgerMenu = document.querySelector('.bx-menu');
const divBurgerMenueItem = document.querySelector('.burger-menue');
burgerMenu.addEventListener('click', () => {
  divBurgerMenueItem.style.display = 'flex';
});

// My Function For Dom manipulation of the burgerMenu

const hiding = function () {
  divBurgerMenueItem.style.display = 'none';
};

// for hiding the burgerMenu page using X

const cross = document.querySelector('.bx-x');
cross.addEventListener('click', hiding);

// for hiding the burgerMenu page, clicking other parts of page

const divAll = document.querySelector('.burger-menue');
divAll.addEventListener('click', hiding);

// for making the links in order to work

const LiInMenu = document.getElementsByClassName('menue');
for (let i = 0; i < LiInMenu.length; i += i) {
  LiInMenu[i].addEventListener('click', hiding);
}
