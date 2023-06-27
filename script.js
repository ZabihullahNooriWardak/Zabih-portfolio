
// Dom manipulation For the burgerMenu
let burgerMenu =document.querySelector('.bx-menu');
let divBurgerMenueItem=document.querySelector('.burger-menue');
burgerMenu.addEventListener('click',function(){
 divBurgerMenueItem.style.display='flex';
});

let cross=document.querySelector('.bx-x');
cross.addEventListener('click',function(){
    divBurgerMenueItem.style.display='none';
});

let LiInMenu=document.querySelector('.burger-menue ul li');
LiInMenu.addEventListener('click',function(){
    divBurgerMenueItem.style.display='none';
})

