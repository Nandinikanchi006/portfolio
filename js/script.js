// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
}

themeToggle.addEventListener('click', toggleTheme);

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  body.classList.add('dark');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Typing Effect
function typingEffect() {
  const texts = ["Computer Science Student", "AI/ML Enthusiast", "Problem Solver"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  const typingElement = document.querySelector('.typing');

  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        setTimeout(type, 1500);
      }, 2000);
    } else {
      setTimeout(type, 80);
    }
  }
  type();
}

// Skills Data (from your resume)
const skills = [
  { name: "Python", level: "90" },
  { name: "SQL", level: "80" },
  { name: "Pandas & NumPy", level: "85" },
  { name: "Scikit-learn", level: "75" },
  { name: "HTML & CSS", level: "80" },
  { name: "Machine Learning", level: "78" },
  { name: "Git & GitHub", level: "85" },
  { name: "Data Analysis", level: "88" }
];

function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <div class="skill-info">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

// Projects Data (from your resume)
const projects = [
  {
    title: "QCryptAI – Secure File Encryption",
    description: "Developed a system to encrypt uploaded files and generate automated summaries using AI.",
    tech: "Python, AI/ML, Encryption",
    link: "#",
    github: "#"
  },
  {
    title: "Eye Stress Detection Using Iris Analysis",
    description: "Real-time webcam-based stress detection system using computer vision.",
    tech: "Python, OpenCV, Machine Learning",
    link: "#",
    github: "#"
  },
  {
    title: "AI-Based Cardiovascular Disease Prediction",
    description: "Performed EDA and built a predictive model for heart disease risk.",
    tech: "Python, Pandas, Scikit-learn",
    link: "#",
    github: "#"
  }
];

function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = projects.map(project => `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <div class="project-links">
        <a href="${project.link}" target="_blank" class="btn primary">Live Demo</a>
        <a href="${project.github}" target="_blank" class="btn secondary">GitHub</a>
      </div>
    </div>
  `).join('');
}

// Contact Form
function handleContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been received.");
    form.reset();
  });
}

// Smooth Scrolling
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize
function init() {
  typingEffect();
  renderSkills();
  renderProjects();
  handleContactForm();
  smoothScroll();
}

window.onload = init;