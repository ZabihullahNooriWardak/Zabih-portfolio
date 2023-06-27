// Dom manipulation For the burgerMenu

//this select the whole div of menu page
let divBurgerMenueItem = document.querySelector(".burger-menue");

//My Function For Dom manipulation of the burgerMenu

let hiding = function () {
  divBurgerMenueItem.style.display = "none";
};

// For showing the burger menu page

let burgerMenu = document.querySelector(".bx-menu");
burgerMenu.addEventListener("click", function () {
  divBurgerMenueItem.style.display = "flex";
});

