const navbar = document.getElementById('nav-bar');
const menuNavbar = document.getElementById('menu-navbar');
const crossBtn = document.getElementById('cross-btn');
const lists = document.querySelectorAll('#menu-navbar li');
const openPopButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');

function createModal(id, title, image, description, skills, liveLink) {
  const sampleTemplateModal = `
<div id="#" class="">
<section class="project-section">
    <section class = "project-showing ">
        <div class="header-wrapper">
            <h2>${title}</h2>
            <a href="#/" id="crossBtnImg">
                <img src="./Images/Icon - Cancel.png" alt="" data-close-button>
            </a>
        </div>
        <ul class="experience">
            <li id="canopy-text">CANOPY</li>
            <img src="./Images/Counter.png" alt="" class="counter-img">
            <li>Back End Dev</li>
            <img src="./Images/Counter.png" alt="" class="counter-img">
            <li>2015</li>
        </ul>

        <figure class=" figure-margin-right">
            <img src="${image}" alt="" class="snap-shot-image">
        </figure>

        <p class="info-text">${description}</p>
        <ul class="skill-buttons">
            <li>${skills[0]}</li>
            <li>${skills[1]}</li>
            <li>${skills[2]}</li>
        </ul>
        <div class="button-wrapper">
            <div class="pop-up-btn">
            <a href="${liveLink}"><button class="see-btn">See Live <span><img src="./Images/Icon.png" alt=""></span></button></a>
            </div>
            <div class="pop-up-btn">
                <a href="${liveLink}"><button class="see-btn">See Source <img src="./Images/Vector.png" alt=""></button></a>
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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardTwo: {
    id: 2,
    title: 'Multi-Post Stories',
    image: './Images/Availibity.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardThree: {
    id: 3,
    title: 'Tonic',
    image: './Images/gym_fit.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#/',
  },

  cardFour: {
    id: 4,
    title: 'Multi-Post Stories',
    image: './Images/Snapshoot Portfolio (2).png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
    const closePopButtons = document.querySelectorAll('[data-close-button]');

    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  });
});

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
  menuNavbar.style.display = 'none';
  navbar.style.display = 'block';
});