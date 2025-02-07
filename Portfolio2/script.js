function downloadCv() {
  const cv = document.createElement("a");
  cv.href = "resume.pdf";
  cv.download = "resume.pdf";
  cv.click();
}
function contact() {
  window.open("#Contact");
}
const sidebar = document.getElementById("sidebar");
function closeicon() {
  sidebar.style.right = "-150px";
}
function openicon() {
  sidebar.style.right = "0";
}

const year = (document.getElementById("year").textContent =
  new Date().getFullYear());
function more() {
  window.open("https://github.com/samkayode?tab=repositories");
}
