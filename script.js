// Dom manipulation For the burgerMenu

//My Function For Dom manipulation of the burgerMenu

let hiding = function () {
  divBurgerMenueItem.style.display = "none";
};

// For showing the burger menu page

let burgerMenu = document.querySelector(".bx-menu");
let divBurgerMenueItem = document.querySelector(".burger-menue");
burgerMenu.addEventListener("click", function () {
  divBurgerMenueItem.style.display = "flex";
});

//for hiding the burgerMenu page using X

let cross = document.querySelector(".bx-x");
cross.addEventListener("click", hiding);

// for hiding the burgerMenu page, clicking other parts of page

let divAll = document.querySelector(".burger-menue");
divAll.addEventListener("click", hiding);

//for making the links in order to work

let LiInMenu = document.getElementsByClassName("menue");
for (let i = 0; i < LiInMenu.length; i++) {
  LiInMenu[i].addEventListener("click", hiding);
}