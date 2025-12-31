const jouer = document.getElementById("jouer");
const choix = document.getElementById("choix");
jouer.addEventListener("click",() => {
  choix.classList.toggle("hidden");
});




document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("perso").addEventListener("click", function () {
    window.location.href = "Qpersonnages.html";
  });

  document.getElementById("chrono").addEventListener("click", function () {
    window.location.href = "Qchronologie.html";
  });

  document.getElementById("univers").addEventListener("click", function () {
    window.location.href = "Qunivers.html";
  });
});



