// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animate skill bars when visible
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".progress div");
  skills.forEach(skill => {
    const pos = skill.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100 && skill.style.width === "0px") {
      skill.style.width = skill.getAttribute("data-skill") + "%";
    }
  });
});
