// Dom manipulation For the burgerMenu

// My Function For Dom manipulation of the burgerMenu
const divBurgerMenueItem = document.querySelector('.burger-menue');

const hiding = () => {
  divBurgerMenueItem.style.display = 'none';
};

// For showing the burger menu page

const burgerMenu = document.querySelector('.bx-menu');
burgerMenu.addEventListener('click', () => {
  divBurgerMenueItem.style.display = 'flex';
});

// for hiding the burgerMenu page using X

const cross = document.querySelector('.bx-x');
cross.addEventListener('click', hiding);

// for making the links in order to work

const LiInMenu = document.getElementsByClassName('menue');
for (let i = 0; i < LiInMenu.length; i += 1) {
  LiInMenu[i].addEventListener('click', hiding);
}

// javascript for popUpCards

const array = [
  {
    title: ' ',
    description: ' ',
    technology: ' ',
    image: 'images/Todo2.png',
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>Data Dashbord <br />Healthcare</h6>',
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
    title: ' <h6>Website portfolio</h6> ',
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
    title: ' <h6>Profesional Art <br />Printing Data More</h6>',
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
    title: '  <h6>Data Dashbord <br />Healthcare</h6>',
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
    title: '   <h6>Profesional Art <br />Printing Data More</h6>',
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
  const projectSection = document.querySelector('.projects-section');
  const section = document.createElement('div');
  projectSection.appendChild(section);
  section.className = 'data-dashbord';

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
    array[i].button,
  );
  if (i === 0) {
    const dataDash = document.querySelector('.data-dashbord');
    dataDash.style.background = `url(${array[i].image})`;
    dataDash.style.paddingBottom = '0px';
    const firstCardButton = document.querySelector('.data-dashbord button.see');
    firstCardButton.style.display = 'inline';
  }
}

const buttonSee = document.querySelectorAll('.see');
for (let i = 0; i < 7; i += 1) {
  buttonSee[i].addEventListener('click', () => {
    let dynmicTitle = '';
    let dynamicTechnologyStack = [];
    let dynamicDetails = '';
    let dynamicImage = " <img src='images/availiability.png'>";
    switch (i) {
      case 2:
        dynmicTitle = 'Data Dashbord HealthCare';
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 3:
        dynmicTitle = 'Website portfolio';
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 4:
        dynmicTitle = 'Professional Art Printing Data More';
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 5:
        dynmicTitle = 'Data Dashbord HealthCare';
        dynamicImage = " <img src='images/availiability.png'>";
        break;
      case 6:
        dynmicTitle = 'Professional Art Printing Data More';
        dynamicImage = "<img src='images/availiability.png'>";
        break;
      case 0:
        dynmicTitle = 'Uzbek to Persian Dictionary';
        dynamicImage = "<img src='images/newnewdic.jpg'>";
        dynamicTechnologyStack = ['Dart', 'Flutter', 'SqfLite', 'Provider'];
        dynamicDetails= "Comprehensive Dictionary :"+
" Contains thousands of Uzbek and Persian words with accurate translations and meanings."+
"Includes synonyms, antonyms, and usage examples."+
" Offline Mode:Translate words and phrases without an internet connection. Perfect for on-the-go use."+
" Favorites and History:Save frequently used words and phrases in the Favorites list.Access your translation history anytime."
        break;
      case 1:
        dynmicTitle = 'Task List taking Website';
        dynamicImage = '   <img src="images/Todo2.png">';
        dynamicDetails = "Make productivity a lifestyle with this To-Do App."+
        " Embrace a well-organized and structured routine,"+
        "stay focused, and achieve your goals with ease."+
        " Whether it's a personal project, a work-related task, or anything in between,"+
        " this app empowers you to take control of your tasks and conquer your ambitions.";
        dynamicTechnologyStack = ['HTML', 'CSS', 'JavaScript'];
        
        break;
      default:
        dynamicImage = 'no image';
        dynmicTitle = 'no title';
    }
    const divParent = document.createElement('div');
    const popUp = document.createElement('div');
    popUp.className = 'popUpParent';
    popUp.innerHTML = `
   <div class='popUpHeader'>
   <h1>${dynmicTitle}</h1>
   <i class='bx bx-x'></i>
   </div>
   <ul>
   <li>${dynamicTechnologyStack[0]}</li>
   <li>${dynamicTechnologyStack[1]}</li>
   <li>${dynamicTechnologyStack[2]}</li>
   </ul>
${dynamicImage}
   <p>${dynamicDetails}</p>
   <div class='popUpFooter'>
   <button><a href='https://zabihullahnooriwardak.github.io/brandNewTodoApp/dist/'>See live</a></button>
   <button><a href = 'https://github.com/ZabihullahNooriWardak/brandNewTodoApp#live-demo'>See source</a> </button>
   </div>
  `;

    divParent.appendChild(popUp);
    const body = document.querySelector('body');
    body.appendChild(divParent);
    divParent.className = 'zzz';

    //  for hiding popUp
    const crossX = document.querySelector('.popUpHeader i');
    crossX.addEventListener('click', () => {
      body.removeChild(divParent);
    });
  });

  // javascript for the validating email input field.
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailField = document.getElementById('email');
    const isEmailValid = emailField.value.trim() !== '';
    const isEmailToLowerCase = emailField.value === emailField.value.toLowerCase();
    if (isEmailValid && isEmailToLowerCase) {
      document.querySelector('form p').style.display = 'none';
      this.submit();
    } else {
      document.querySelector('form p').style.display = 'inline';
    }
  });
}

// Javascript for the local storage
window.onload = () => {
  const userDataInLocalStorage = localStorage.getItem('userData');
  const parsedData = JSON.parse(userDataInLocalStorage);
  document.getElementById('fullName').value = parsedData.name ?? ' ';
  document.getElementById('email').value = parsedData.email ?? ' ';
  document.getElementById('textArea').value = parsedData.comment ?? ' ';
};

function localStorageMine() {
  const userName = document.getElementById('fullName');
  const userEmail = document.getElementById('email');
  const userComment = document.getElementById('textArea');
  const uname = userName.value ?? ' ';
  const email = userEmail.value ?? ' ';
  const comment = userComment.value ?? ' ';
  const inputFieldObject = {
    name: uname,
    email,
    comment,
  };
  try {
    const forLocalStorage = JSON.stringify(inputFieldObject);
    window.localStorage.setItem('userData', forLocalStorage);
  } catch (e) {
    console.log('error occured while storing data to localStorage');
  }
}
// when the user leave the fields the changes are saved automatically.
const allInputs = document.getElementsByClassName('input');
for (let i = 0; i < 3; i += 1) {
  allInputs[i].addEventListener('input', localStorageMine);
}

// javascript for the validating email input field.
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailField = document.getElementById('email');
  const isEmailValid = emailField.value.trim() !== '';
  const isEmailToLowerCase = emailField.value === emailField.value.toLowerCase();
  if (isEmailValid && isEmailToLowerCase) {
    document.querySelector('form p').style.display = 'none';
    this.submit();
  } else {
    document.querySelector('form p').style.display = 'inline';
  }
});

document.getElementById("ccc").addEventListener("click", function(){
  const pdfPath = 'images/resume.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.click();
});