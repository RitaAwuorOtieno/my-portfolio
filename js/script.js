// Navigation component
function loadNavigation() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <div class="logo">Your Name</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `;
    }
}

// Footer component
function loadFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <p>&copy; ${new Date().getFullYear()} Rita Awuor Otieno. All rights reserved.</p>
            <div class="social-links">
                <a href="#">LinkedIn</a> | 
                <a href="https://github.com/RitaAwuorOtieno">GitHub</a> | 
                <a href="https://instagram.com/_rita_aah">Instagram</a>
            </div>
        `;
    }
}

// Load projects dynamically
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        const projects = [
            {
                title: "Calculator",
                description: "This is an advanced calculator, basically, it is used for intergrated calculations. My role is to ensure that it serves the users specified purposes ",
                technologies: ["HTML", "CSS", "JavaScript"],
                link: "git@github.com:RitaAwuorOtieno/calculator.git"
            },
            {
                title: "Custom Project 2",
                description: "enter project description here",
                technologies: ["React", "Node.js"],
                link: "git@github.com:waliuba/group-4-.git"
            },

        ];
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Project</a>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
}

// Load skills dynamically
function loadSkills() {
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
        const skills = [
            "HTML", "CSS", "JavaScript", 
            "React", "Node.js", "Git", 
            "Responsive Design", "UI/UX Design"
        ];
        
        skills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
    loadProjects();
    loadSkills();
});