const navbar = document.getElementById('nav-bar');
const menuNavbar = document.getElementById('menu-navbar');
const crossBtn = document.getElementById('cross-btn');
const lists = document.querySelectorAll('#menu-navbar li');
const email = document.querySelector('input[type="email"]');
const form = document.getElementById('contact-me-form');
const span = document.getElementById('error-msg');
const errorMessage = 'The email should be written in lower case';
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
// Worksection created dynamically
const workSection = document.getElementById('work');

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectImage: './Images/Snapshoot Portfolio.png',
    technogies: ['HTML', 'CSS', 'Javascript'],
    projectId: '',
    buttonId: 'cardOne',
  },

  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectImage: './Images/Availibity.png',
    technogies: ['HTML', 'CSS', 'Javascript'],
    projectId: 'availibity-card',
    buttonId: 'cardTwo',
  },

  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectImage: './Images/gym_fit.png',
    technogies: ['HTML', 'CSS', 'Javascript'],
    projectId: '',
    buttonId: 'cardThree',
  },

  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectImage: './Images/Snapshoot Portfolio (2).png',
    technogies: ['HTML', 'CSS', 'Javascript'],
    projectId: 'projessional-art-card',
    buttonId: 'cardFour',
  },
];

function createProject() {
  projects.forEach((project) => {
    const projectSection = document.createElement('section');
    projectSection.classList.add('project-section');
    projectSection.setAttribute('id', project.projectId);
    const imageContainer = document.createElement('figure');
    imageContainer.classList.add('figure-margin-right');
    const projectImage = document.createElement('img');
    projectImage.classList.add('snap-shot-image');
    projectImage.src = project.projectImage;
    imageContainer.appendChild(projectImage);
    projectSection.appendChild(imageContainer);
    const projectShowing = document.createElement('section');
    projectShowing.classList.add('project-showing');
    const title = document.createElement('h2');
    title.textContent = project.name;
    projectShowing.appendChild(title);
    //
    const experience = document.createElement('ul');
    experience.classList.add('experience');
    //
    const canopyText = document.createElement('li');
    canopyText.setAttribute('id', 'canopy-text');
    canopyText.textContent = 'CANOPY';
    //
    const counterImg1 = document.createElement('img');
    counterImg1.classList.add('counter-img');
    counterImg1.src = './Images/Counter.png';
    //
    const counterImg2 = document.createElement('img');
    counterImg2.classList.add('counter-img');
    counterImg2.src = './Images/Counter.png';
    //
    const projectLi = document.createElement('li');
    projectLi.textContent = 'Back End Dev';
    //
    const year = document.createElement('li');
    year.textContent = 2015;
    experience.appendChild(canopyText);
    experience.appendChild(counterImg1);
    experience.appendChild(projectLi);
    experience.appendChild(counterImg2);
    experience.appendChild(year);
    projectShowing.appendChild(experience);
    //
    const infoText = document.createElement('p');
    infoText.classList.add('info-text');
    infoText.textContent = project.description;
    projectShowing.appendChild(infoText);
    //
    const skillButton = document.createElement('ul');
    skillButton.classList.add('skill-buttons');
    for (let i = 0; i < project.technogies.length; i += 1) {
      const skill = document.createElement('li');
      skill.textContent = project.technogies[i];
      skillButton.appendChild(skill);
    }
    projectShowing.appendChild(skillButton);
    //
    const buttonContainer = document.createElement('div');
    let j = 1;
    buttonContainer.classList.add('view-project-button');
    buttonContainer.setAttribute('id', j);
    j += 1;
    //
    const projectBtn = document.createElement('button');
    projectBtn.setAttribute('data-modal-target', '#project-pop-up');
    projectBtn.setAttribute('id', project.buttonId);
    projectBtn.textContent = 'See Project';
    //
    buttonContainer.appendChild(projectBtn);
    projectShowing.appendChild(buttonContainer);
    //
    projectSection.appendChild(projectShowing);
    workSection.appendChild(projectSection);
  });
}
createProject();
const openPopButtons = document.querySelectorAll('[data-modal-target]');

menuNavbar.style.display = 'none';
lists.forEach((list) => {
  list.addEventListener('click', () => {
    navbar.style.display = 'block';
    menuNavbar.style.display = 'none';
  });
});

navbar.addEventListener('click', () => {
  navbar.style.display = 'none';
  if (menuNavbar.style.display === 'none') {
    menuNavbar.style.display = 'block';
  } else {
    menuNavbar.style.display = 'none';
  }
});

crossBtn.addEventListener('click', () => {
  navbar.style.display = 'block';
  menuNavbar.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    span.textContent = errorMessage;
    span.style.display = 'block';
    e.preventDefault();
  } else {
    span.style.display = 'none';
  }
});

function createModal(id, title, image, description, skills, liveLink) {
  const sampleTemplateModal = `
<div id="#" class="">
<section class="project-sectiona modal-project-section">
    <section class = "project-showinga modal-project-showing">
        <div class="header-wrapper">
            <h2>${title}</h2>
            <a href="#/" id="crossBtnImg">
                <img src="./Images/Icon - Cancel.png" alt="" data-close-button>
            </a>
        </div>
        <ul class="experiencea modal-experience">
            <li id="canopy-text">CANOPY</li>
            <img src="./Images/Counter.png" alt="" class="counter-img">
            <li>Back End Dev</li>
            <img src="./Images/Counter.png" alt="" class="counter-img">
            <li>2015</li>
        </ul>

        <figure class=" figure-margin-righta">
            <img src="${image}" alt="" class="snap-shot-imagea modal-image">
        </figure>
      <div class="info-skill-container">
          <p class="info-texta modal-text">${description}</p>

            <div class="skill-button-container">
              <ul class="skill-buttons modal-skill-buttons">
                <li>${skills[0]}</li>
                <li>${skills[1]}</li>
                <li>${skills[2]}</li>
              </ul>
              <div class="button-wrapper">
                  <button class="pop-up-btn see-btn">
                  <span>See Live</span>
                  <a href="${liveLink}"><img src="./Images/Icon.png" alt=""></a>
                  </button>
                  <button class="pop-up-btn see-btn">
                  <span>See Source</span>
                      <a href="${liveLink}"> <img src="./Images/Vector.png" alt=""></a>
                  </button>
              </div>
          </div>
      </div>
        
    </section>
</section>
</div>
`;
  return sampleTemplateModal;
}

const projectCard = {
  cardOne: {
    id: 1,
    title: 'Tonic',
    image: './Images/Snapshoot Portfolio.png',
    description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardTwo: {
    id: 2,
    title: 'Multi-Post Stories',
    image: './Images/Availibity.png',
    description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardThree: {
    id: 3,
    title: 'Tonic',
    image: './Images/gym_fit.png',
    description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardFour: {
    id: 4,
    title: 'Multi-Post Stories',
    image: './Images/Snapshoot Portfolio (2).png',
    description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },
};

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openPopButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const name = e.target.id;
    const prefix = projectCard[name];
    const modal = createModal(prefix.id, prefix.title,
      prefix.image, prefix.description, prefix.skills, prefix.liveLink);
    const element = document.createElement('div');
    element.innerHTML = modal;
    element.classList.add('modal');
    element.setAttribute('id', 'test');
    const addElement = document.getElementById('1');
    addElement.after(element);
    element.after(overlay);
    openModal(element);
    const figures = document.querySelectorAll('.project-showing figure');
    figures.forEach((figure) => {
      figure.style.width = '100%';
      figure.style.marginTop = '2rem';
    });
    const closePopButtons = document.querySelectorAll('[data-close-button]');

    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  });
});
