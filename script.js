// ===== TOGGLE MENU =====
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// ===== ANIMATE SKILL BARS =====
window.addEventListener("scroll", function() {
    const skills = document.querySelectorAll(".progress");
    const trigger = window.innerHeight / 1.2;

    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        if(top < trigger) {
            skill.style.width = skill.classList.contains("html") ? "90%" :
                                skill.classList.contains("css") ? "80%" : "70%";
        }
    });
});

// ===== CONTACT FORM ALERT =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent ✅");
    this.reset();
});
