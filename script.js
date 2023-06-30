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

const array = [
  {
    title: " ",
    description: " ",
    technology: " ",
    image: "images/professional.png",
    button: '  <button class="see">See project</button>',
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
    button: '  <button class="see">See project</button>',
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
    button: '  <button class="see">See project</button>',
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
    button: '  <button class="see">See project</button>',
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
    button: '  <button class="see">See project</button>',
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
    button: '  <button class="see">See project</button>',
  },
];
const insertion = function (title, technology, description, button) {
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
for (let i = 0; i < 6; i += 1) {
  insertion(
    array[i].title,
    array[i].technology,
    array[i].description,
    array[i].button
  );
  if (i === 0) {
    const dataDash = document.querySelector(".data-dashbord");
    dataDash.style.background = `url(${array[i].image})`;
    dataDash.style.paddingBottom = "0px";
    const firstCardButton = document.querySelector(".data-dashbord button.see");
    firstCardButton.style.display = "inline";
  }
}

const buttonSee = document.querySelectorAll(".see");
for (let i = 0; i < 7; i += 1) {
  buttonSee[i].addEventListener("click", () => {
    let dynmicTitle = "";
    let dynamicImage = " <img src='images/availiability.png'>";
    switch (i) {
      case 2:
        dynmicTitle = "Data Dashbord HealthCare";
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 3:
        dynmicTitle = "Website portfolio";
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 4:
        dynmicTitle = "Professional Art Printing Data More";
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 5:
        dynmicTitle = "Data Dashbord HealthCare";
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 6:
        dynmicTitle = "Professional Art Printing Data More";
        dynamicImage = "<img src='images/availiability.png'>";
        break;
      case 0:
        dynmicTitle = "Multi-post Stories";
        dynamicImage = "<img src='images/woman.png'>";
        break;
      case 1:
        dynmicTitle = "Professional Art Printing Printing Data";
        dynamicImage = '   <img src="images/professional.png">';
        break;
      default:
        dynamicImage = "no image";
        dynmicTitle = "no title";
    }
    const divParent = document.createElement("div");
    const popUp = document.createElement("div");
    popUp.className = "popUpParent";
    popUp.innerHTML = `
   <div class='popUpHeader'>
   <h1>${dynmicTitle}</h1>
   <i class='bx bx-x'></i>
   </div>
   <ul>
   <li>HTML</li>
   <li>Bootstrap</li>
   <li>Ruby on Rails</li>
   </ul>
${dynamicImage}
   <p>             Lorem ipsum dolor sit amet
    consectetur adipisicing elit.
     Similique cumque fugit, corrupti odio 
     ex eos provident reprehenderit expedita
      exercitationem saepe dolor.
      e  ex eos provident reprehenderit expedita
      exercitationem saepe dolor.
      ex eos provident reprehenderit expedita
      exercitationem saepe dolor.
       consectetur adipisicing elit. Quos illum ex ducimus quaerat
        inventore officia blanditiis impedit suscipit,
         unde nulla, porro magnam ex eos provident reprehenderit expedita
         exercitationem saepe dolor.x eos provident reprehenderit expedita
      exercitationem saepe dolor.
       consectetur adipisicing elit. Quos illum ex ducimus quaerat
        inventore officia blanditiis impedit suscipit,
         unde nulla, porro magnam ex eos provident reprehenderit expedita
         exercitationem saepe dolor.
         
          consectetur adipisicing elit. Quos illum ex ducimus quaerat
           inventore officia blanditiis impedit suscipit,
            unde nulla, porro magnam
       consectetur adipisicing elit. Quos illum ex ducimus quaerat
        inventore officia blanditiis impedit suscipit,
         unde nulla, porro magnam
          incidunt corporis quod 
         repellat mollitia eum nesciunt! Sunt!</p>
   <div class='popUpFooter'>
   <button>See live</button>
   <button>See source </button>
   </div>
  `;

    divParent.appendChild(popUp);
    const body = document.querySelector("body");
    body.appendChild(divParent);
    divParent.className = "zzz";

    //  for hiding popUp
    const crossX = document.querySelector(".popUpHeader i");
    crossX.addEventListener("click", () => {
      body.removeChild(divParent);
    });
  });

  // javascript for the validating email input field.
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailField = document.getElementById("email");
    const isEmailValid = emailField.value.trim() !== "";
    const isEmailToLowerCase =
      emailField.value === emailField.value.toLowerCase();
    if (isEmailValid && isEmailToLowerCase) {
      document.querySelector("form p").style.display = "none";
      this.submit();
    } else {
      document.querySelector("form p").style.display = "inline";
    }
  });
}
