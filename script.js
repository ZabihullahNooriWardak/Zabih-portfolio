// Dom manipulation For the burgerMenu

// My Function For Dom manipulation of the burgerMenu
const divBurgerMenueItem = document.querySelector(".burger-menue");

const hiding = () => {
  divBurgerMenueItem.style.display = "none";
};

// For showing the burger menu page

const burgerMenu = document.querySelector(".bx-menu");
burgerMenu.addEventListener("click", () => {
  divBurgerMenueItem.style.display = "flex";
});

// for hiding the burgerMenu page using X

const cross = document.querySelector(".bx-x");
cross.addEventListener("click", hiding);

// for making the links in order to work

const LiInMenu = document.getElementsByClassName("menue");
for (let i = 0; i < LiInMenu.length; i += 1) {
  LiInMenu[i].addEventListener("click", hiding);
}
