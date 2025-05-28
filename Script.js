function toggleSidebar() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    if (section.textContent.toLowerCase().includes(query)) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// FAQ toggles
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      q.classList.toggle("active");
      const answer = q.nextElementSibling;
      answer.classList.toggle("open");
    });
  });
});