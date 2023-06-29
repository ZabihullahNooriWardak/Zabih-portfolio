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

// javascript for popUpCards

let array = [  {
  title: " ",
  description: ` `,
  technology: ` `,
  image:`images/professional.png`,
  button:`  <button class="see">See project</button>`
},
  {
    title: "<h6>Data Dashbord <br />Healthcare</h6>",
    description: ` <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>
  </ul>`,
  button:`  <button class="see">See project</button>`
  },
  {
    title: " <h6>Website portfolio</h6> ",
    description: ` <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>
  </ul>`,
  button:`  <button class="see">See project</button>`
  },
  {
    title: " <h6>Profesional Art <br />Printing Data More</h6>",
    description: ` <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>
  </ul>`,
  button:`  <button class="see">See project</button>`
  },
  {
    title: "  <h6>Data Dashbord <br />Healthcare</h6>",
    description: ` <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>
  </ul>`,
  button:`  <button class="see">See project</button>`
  },
  {
    title: "   <h6>Profesional Art <br />Printing Data More</h6>",
    description: ` <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>
  </ul>`,
  button:`  <button class="see">See project</button>`
  },
];
let insertion = function (title, technology,description,button) {
  const projectSection = document.querySelector(".projects-section");
  const section = document.createElement("div");
  projectSection.appendChild(section);
  section.className = "data-dashbord";

  section.innerHTML = `
${title}
 ${description}
${technology}
${button}
`;
};
for (let i = 0; i < 6; i++) {
  insertion(array[i]["title"], array[i]["technology"],array[i]['description'],array[i]['button']);
  document.querySelector('section button').className=`button${i}`;
  if(i===0){
    let dataDash= document.querySelector('.data-dashbord');
   dataDash.style.background=`url(${array[i]['image']})`;
   dataDash.style.paddingBottom='0px';
    let firstCardButton=document.querySelector('.data-dashbord button.see');
    firstCardButton.style.display='inline';
  }
}

let buttonSee = document.querySelectorAll(".see");
buttonSee.forEach(function (element) {
  element.addEventListener("click", function () {
    let divParent = document.createElement("div");
    let popUp = document.createElement("div");
    popUp.className = "popUpParent";
    popUp.innerHTML = `
   <div class='popUpHeader'>
   <h1>Multi Post Stories</h1>
   <i class='bx bx-x'></i>
   </div>
   <ul>
   <li>HTML</li>
   <li>Bootstrap</li>
   <li>Ruby on Rails</li>
   </ul>
   <img src="images/availiability.png">
   <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum ex ducimus quaerat inventore officia blanditiis impedit suscipit, unde nulla, porro magnam incidunt corporis quod repellat mollitia eum nesciunt! Sunt!
   <div class='popUpFooter'>
   <button>See live</button>
   <button>See source </button>
   </div>
  `;

    divParent.appendChild(popUp);
    let body = document.querySelector("body");
    body.appendChild(divParent);
    divParent.className = "zzz";

    //  for hiding popUp
    let crossX = document.querySelector(".popUpHeader i");
    crossX.addEventListener("click", function () {
      body.removeChild(divParent);
    });
  });
});
