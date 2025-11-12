// Datos de los proyectos
const projectData = {
    project1: {
        title: "Haunted",
        description: "Descripción detallada del primer proyecto. Explica las mecánicas, tecnologías usadas, y características principales.",
        tech: ["Unity", "C#", "Photon"],
        links: {
            demo: "https://itsbocchi.itch.io/haunted"
        }
    },
    project2: {
        title: "Scarlet Bubble",
        description: "Descripción detallada del segundo proyecto.",
        tech: ["Unreal Engine", "Blueprint", "Multiplayer"],
        links: {
            demo: "https://itsbocchi.itch.io/scarlet-bubble"
        }
    },
    project3: {
        title: "Nombre del Juego 3",
        description: "Descripción detallada del tercer proyecto.",
        tech: ["Godot", "GDScript", "2D"],
        links: {
            github: "https://github.com/tuusuario/proyecto3",
            demo: "https://tuusuario.itch.io/proyecto3"
        }
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    // Hover effect para cambiar imagen
    projectCards.forEach(card => {
        const img = card.querySelector('.project-gif');
        const originalSrc = img.src;
        const hoverSrc = img.dataset.hover;

        card.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });

        card.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });

    // Abrir modal al hacer click en proyecto
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const project = projectData[projectId];
            
            if (project) {
                showProjectModal(project);
            }
        });
    });

    // Cerrar modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function showProjectModal(project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="tech-stack">
                <h3>Tecnologías:</h3>
                <div class="tech-tags">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-links">
                ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn">GitHub</a>` : ''}
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn">Jugar Demo</a>` : ''}
            </div>
        `;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }
});