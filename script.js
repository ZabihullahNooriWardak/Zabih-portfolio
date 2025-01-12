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
    title: '<h6>Task List Taking Website</h6>',
    description: ` <p>
   Make productivity a lifestyle with this To-Do App. Embrace a well-organized and structured routine, stay focused, and achieve your goals with ease.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    image: 'images/Todo2.png',
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>ChatGPT <br />Conference</h6>',
    description: ` <p>
   The ChatGPT Conference Website is dedicated to a conference website focused on exploring the capabilities, advancements, and real-world applications of ChatGPT, an AI-powered language model. 
  </p>`,
    image: 'images/chatgpt.png',
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>Task List Taking Website</h6>',
    description: ` <p>
   Make productivity a lifestyle with this To-Do App. Embrace a well-organized and structured routine, stay focused, and achieve your goals with ease.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    image: 'images/Todo2.png',
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>ChatGPT <br />Conference</h6>',
    description: ` <p>
   The ChatGPT Conference Website is dedicated to a conference website focused on exploring the capabilities, advancements, and real-world applications of ChatGPT, an AI-powered language model. 
  </p>`,
    image: 'images/chatgpt.png',
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>Task List Taking Website</h6>',
    description: ` <p>
   Make productivity a lifestyle with this To-Do App. Embrace a well-organized and structured routine, stay focused, and achieve your goals with ease.
  </p>`,
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    image: 'images/Todo2.png',
    button: '  <button class="see">See project</button>',
  },
  {
    title: '<h6>ChatGPT <br />Conference</h6>',
    description: ` <p>
   The ChatGPT Conference Website is dedicated to a conference website focused on exploring the capabilities, advancements, and real-world applications of ChatGPT, an AI-powered language model. 
  </p>`,
    image: 'images/chatgpt.png',
    technology: `  <ul class="button">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>`,
    button: '  <button class="see">See project</button>',
  },
];
const insertion = function (title, technology, description, button, image) {
  const projectSection = document.querySelector('.projects-section');
  const section = document.createElement('div');
  projectSection.appendChild(section);
  section.className = 'data-dashbord';
  section.style.backgroundImage = `url(${image})`;
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
    array[i].image,
  );

}

const buttonSee = document.querySelectorAll('.see');
for (let i = 0; i < 7; i += 1) {
  buttonSee[i].addEventListener('click', () => {
    let dynmicTitle = '';
    let dynamicTechnologyStack = [];
    let dynamicDetails = '';
    let dynamicImage = " <img src='images/availiability.png'>";
    let dynamicLinks = [];
    switch (i) {
      case 2:
        dynmicTitle = 'ChatGPT Conference';
        dynamicImage = "<img src='images/chatgpt.png'>";
        dynamicTechnologyStack = ['HTML', 'CSS', 'JavaScript'];
        dynamicDetails = " The ChatGPT Conference Website is dedicated to a conference website focused on exploring the capabilities, advancements, and real-world applications of ChatGPT, an AI-powered language model. The web page serves as a central hub for attendees, speakers, and sponsors to access event information, participate in sessions.";
        dynamicLinks = ['https://zabihullahnooriwardak.github.io/ChatGPt-conference/', 'https://github.com/ZabihullahNooriWardak/ChatGPt-conference'];
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
        dynamicDetails = "Comprehensive Dictionary :" +
          " Contains thousands of Uzbek and Persian words with accurate translations and meanings." +
          "Includes synonyms, antonyms, and usage examples." +
          " Offline Mode:Translate words and phrases without an internet connection. Perfect for on-the-go use." +
          " Favorites and History:Save frequently used words and phrases in the Favorites list.Access your translation history anytime.";
        dynamicLinks = ['https://t.me/zabihN/34', 'privateRepository.html'];
        break;
      case 1:
        dynmicTitle = 'Task List taking Website';
        dynamicImage = '   <img src="images/Todo2.png">';
        dynamicDetails = "Make productivity a lifestyle with this To-Do App." +
          " Embrace a well-organized and structured routine," +
          "stay focused, and achieve your goals with ease." +
          " Whether it's a personal project, a work-related task, or anything in between," +
          " this app empowers you to take control of your tasks and conquer your ambitions.";
        dynamicTechnologyStack = ['HTML', 'CSS', 'JavaScript'];
        dynamicLinks = ['https://zabihullahnooriwardak.github.io/brandNewTodoApp/dist/', 'https://github.com/ZabihullahNooriWardak/brandNewTodoApp#live-demo']

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
    ${dynamicTechnologyStack.map((item) => `<li>${item}</li>`)}
   </ul>
${dynamicImage}
   <p>${dynamicDetails}</p>
   <div class='popUpFooter'>
   <button><a href= ${dynamicLinks[0]}>See live</a></button>
   <button><a href = ${dynamicLinks[1]}>See source</a> </button>
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

document.getElementById("ccc").addEventListener("click", function () {
  const pdfPath = 'images/resume.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.click();
});