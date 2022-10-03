const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('#id-menu-bar');
const logoText = document.querySelector('.logo-text');
const menuBar = document.querySelector('.menu-bar');

/** Modal window variables */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.modal-close');
const projectBtn = document.querySelectorAll('.see-project');

// Validate email
const form = document.querySelector('#contact-form');
const inputEmail = document.querySelector('#email');
const alert = document.querySelector('.alert');

const projects = {
  featureProj: {
    title: 'WATHER-APPLICATION',
    desc: 'A Weather Application that displays daily and weekly weather updates from different cities across the world',
    technologies: ['react-redux', 'javascript', 'bootstrap', 'css', 'html'],
    image: 'images/weather-app.png',
    liveDemoLink: 'https://62b9c319ef5d2f4fb550e3fb--heartfelt-tapioca-356bb6.netlify.app/',
  },
  project1: {
    title: 'MEALS-A-DAY',
    desc: 'A web application that consumes the MealDB API. It displays a list of food, their recipes and instructions. One can also be able to comment on them',
    technologies: ['javascript', 'api', 'css', 'html'],
    image: 'images/meals-app.png',
    liveDemoLink: 'https://jmoseka.github.io/Meals-A-Day/',
    gitLink: 'https://github.com/jmoseka/Meals-A-Day',
  },
  project2: {
    title: 'LEADERBOARD',
    desc: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved to an external Leaderboard API service',
    technologies: ['javascript', 'html', 'css', 'webpack'],
    image: 'images/leaderboard.png',
    liveDemoLink: 'https://jmoseka.github.io/Leaderboard/',
    gitLink: 'https://github.com/jmoseka/Leaderboard',
  },
  project3: {
    title: 'TO-DO-LIST',
    desc: 'A web app that helps you organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It is built with ES6 and Webpack!',
    technologies: ['javascript', 'css', 'html', 'webpack'],
    image: 'images/to-do.png',
    liveDemoLink: 'https://626e5ac8a92f1b301e871a90--fanciful-stroopwafel-1c6022.netlify.app/#',
    gitLink: 'https://github.com/jmoseka/To-Do-List',
  },
  project4: {
    title: 'CONFERENCE WEBSITE',
    desc: 'A confrence website built based on an online school website. It is part of the Microverse end of a module final project, meant to apply all of the CSS and HTML learned so far.',
    technologies: ['javascript', 'css', 'html'],
    image: 'images/conference.png',
    liveDemoLink: 'https://jmoseka.github.io/Conference-Frontend/',
    gitLink: 'https://github.com/jmoseka/Conference-Frontend',
  },
  project5: {
    title: 'AWESOME BOOKS',
    desc: 'A basic website that allows users to add/remove books from a list. It is achieved by using JavaScript objects and arrays. We also dynamically modified the DOM and added basic events.',
    technologies: ['js', 'css', 'html'],
    image: 'images/awesome.png',
    liveDemoLink: 'https://jmoseka.github.io/Awesome-Books/#',
    gitLink: 'https://github.com/jmoseka/Awesome-Books',
  },
  project6: {
    title: 'LANDING PAGE',
    desc: 'A beautiful landing page for an ecommerce website that deals with beauty products',
    technologies: ['html', 'css'],
    image: 'images/landing.png',
    liveDemoLink: 'https://sad-shirley-6aae5c.netlify.app/',
    gitLink: 'https://github.com/jmoseka/Landing-Page',
  },
  project7: {
    title: 'TECHINAL DOCUMENTATION',
    desc: 'A technical documentation website',
    technologies: ['html', 'css'],
    image: 'images/doc.png',
    liveDemoLink: 'https://codepen.io/jmoseka/full/KKvoEWQ',
    gitLink: 'https://github.com/jmoseka/Responsive-Web-Design/tree/main/Technical-Documentation',
  },
};

/* Navigation humberger button open and close function */
navToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('active');
  logoText.classList.toggle('active');
  menuBar.classList.toggle('active');
});

// close modal function
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// close modal button set on listener
modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/** Loop through project object to dynamically
 *  set data on modal window */

projectBtn.forEach((button) => {
  button.addEventListener('click', () => {
    // modal window close
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    const h2 = document.querySelector('.modal h2');
    const p = document.querySelector('.modal p');
    const img = document.querySelector('.image-proj');
    // const ul = document.getElementsByClassName(".modal-list");
    const items = document.querySelectorAll('.modal-list li');
    const livelink = document.querySelector('.liveLink');
    const githubLink = document.querySelector('.gitLink');

    // eslint-disable-next-line no-restricted-syntax
    for (const project of [...Object.keys(projects)]) {
      if (button.classList.contains(project)) {
        h2.textContent = projects[project].title;
        p.textContent = projects[project].desc;
        livelink.setAttribute('href', projects[project].liveDemoLink);
        githubLink.setAttribute('href', projects[project].gitLink);
        img.src = projects[project].image;

        let s = 0;
        // eslint-disable-next-line no-restricted-syntax
        for (const i of items) {
          i.textContent = projects[project].technologies[s];
          s += 1;
        }
      }
    }
  });
});

/** CONTACT FORM VALIDATION */
// error message

// remove error message upon clicking anywhere
document.onclick = (e) => {
  /** Close modal window if pressed anywhere */
  if (e.target.id !== 'id-menu-bar') {
    primaryNav.classList.remove('active');
    logoText.classList.remove('active');
    menuBar.classList.remove('active');
  } else if (
    e.target.id === 'email'
    || e.target.id === 'fname'
    || e.target.id === 'lname'
    || e.target.id === 'comments'
  ) {
    alert.classList.add('hidden');
  }
};

// error message
function alertMsg(msg) {
  alert.classList.remove('hidden');
  alert.textContent = msg;
}

form.addEventListener('submit', (e) => {
  const lowerCaseReg = /[a - z]/;
  if (lowerCaseReg.test(inputEmail.value) === false) {
    alertMsg('Please use small letters for email address');
    e.preventDefault();
  }
});
