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
            <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div class="social-links">
                <a href="#">LinkedIn</a> | 
                <a href="#">GitHub</a> | 
                <a href="#">Twitter</a>
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
                description: "basice Calculator",
                technologies: ["HTML", "CSS", "JavaScript"],
                link: "https://github.com/RitaAwuorOtieno/calculator.git"
            },
            {
                title: "Project 2",
                description: "group project",
                technologies: ["React", "Node.js"],
                link: "https://github.com/waliuba/group-4-.git"
            }
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
            "HTML5", "CSS3", "JavaScript", 
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