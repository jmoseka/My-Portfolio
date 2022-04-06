const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector("#id-menu-bar");
const logoText = document.querySelector(".logo-text");
const menuBar = document.querySelector(".menu-bar");

/**Modal window variables */
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".modal-close");
const projectBtn = document.querySelectorAll(".see-project");

//Validate email
const form = document.querySelector("#contact-form");
const inputEmail = document.querySelector("#email");
const inputFirstName = document.querySelector("#fname");
const inputLastName = document.querySelector("#lname");
const submitBtn = document.querySelector("#in-touch-btn");
const alert = document.querySelector(".alert");
const msgAlert = document.querySelector(".alert p");

const projects = {
  featureProj: {
    title: "Multi-post Stories",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["html", "javascript", "bootstrap", "ruby on rail"],
    image: "images/Img-placeholder.png",
    liveDemoLink: "#",
  },
  project1: {
    title: "Healthcare System",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript", "bootstrap", "ruby on rail"],
    image: "images/img-2.png",
    liveDemoLink: "#",
    gitLink: "",
  },
  project2: {
    title: "School Management System",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript"],
    image: "images/img-3.png",
    liveDemoLink: "#",
    gitLink: "#",
  },
  project3: {
    title: "E-commerce Web Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript", "ruby on rail"],
    image: "images/img-4.png",
    liveDemoLink: "#",
    gitLink: "#",
  },
  project4: {
    title: "Hotel Management System",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript", "ruby on rail", "bootstrap"],
    image: "images/img-5.png",
    liveDemoLink: "#",
    gitLink: "",
  },
  project5: {
    title: "Cooking and Recipe",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript", "ruby on rail"],
    image: "images/img-6.png",
    liveDemoLink: "#",
    gitLink: "#",
  },
  project6: {
    title: "Messaging Chat Web",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "javascript", "ruby on rail"],
    image: "images/img-1.png",
    liveDemoLink: "#",
    gitLink: "#",
  },
};

/*Navigation humberger button open and close function */
navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
  logoText.classList.toggle("active");
  menuBar.classList.toggle("active");
});

//close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//close modal button set on listener
modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/**Close modal window if pressed anywhere */
document.onclick = function (e) {
  if (e.target.id !== "id-menu-bar") {
    primaryNav.classList.remove("active");
    logoText.classList.remove("active");
    menuBar.classList.remove("active");
  }
};

/**Loop through  project object */

projectBtn.forEach((button) => {
  button.addEventListener("click", () => {
    //modal window close
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    const h2 = document.querySelector(".modal h2");
    const p = document.querySelector(".modal p");
    const liveDemo = document.querySelector(".liveLink");
    const githubLink = document.querySelector(".gitLink");
    const img = document.querySelector(".image-proj");
    //const ul = document.getElementsByClassName(".modal-list");
    let items = document.querySelectorAll(".modal-list li");

    for (let project of [...Object.keys(projects)]) {
      if (button.classList.contains(project)) {
        h2.textContent = projects[project].title;
        p.textContent = projects[project].desc;
        //liveDemo = projects[project].liveDemoLink;
        //githubLink = projects[project].gitLink;
        img.src = projects[project].image;

        for (let i = 0; i < items.length; i++) {
          items[i].textContent = projects[project].technologies[i];
        }
      }
    }
  });
});

/**CONTACT FORM VALIDATION */
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//error message
function alertMsg(msg) {
  alert.classList.remove("hidden");
  alert.textContent = msg;
}

//remove error message upon clicking anywhere
document.onclick = function (e) {
  if (
    e.target.id === "email" ||
    e.target.id === "fname" ||
    e.target.id === "lname" ||
    e.target.id === "comments"
  ) {
    alert.classList.add("hidden");
  }
};

const isEmptyFields = () => {
  if (inputFirstName.value === "") {
    alertMsg("Please enter first name!");
  } else if (inputLastName.value === "") {
    alertMsg("Please enter last name!");
  }
};

const isValidEmail = () => {
  const lowerCaseReg = /[a - z]/;

  if (inputEmail.value === "") {
    alertMsg("Please enter email!");
  } else if (lowerCaseReg.test(inputEmail.value) === false) {
    alertMsg("Please use small letters");
  } else {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(inputEmail.value).toLowerCase());
    if (result === false) {
      alertMsg("Invalid email address");
    }
  }
};

submitBtn.addEventListener("click", function () {
  isEmptyFields();
  isValidEmail();
});
