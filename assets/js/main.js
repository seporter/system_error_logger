// JavaScript for modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.getElementById(modalId).setAttribute('aria-hidden', 'false');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.getElementById(modalId).setAttribute('aria-hidden', 'true');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        event.target.setAttribute('aria-hidden', 'true');
    }
}

// Quantum particle animation
const particlesContainer = document.querySelector('.quantum-particles');
for (let i = 0; i < 50; i++) { // Reduced number of particles for performance
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.7)`;
    particle.style.borderRadius = '50%';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `quantum-float ${5 + Math.random() * 10}s infinite`;
    particlesContainer.appendChild(particle);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes quantum-float {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
    }
`;
document.head.appendChild(style);
