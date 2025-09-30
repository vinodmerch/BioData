function toggleDetails() {
  const more = document.getElementById("more");
  more.style.display = more.style.display === "none" ? "block" : "none";
}

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}
