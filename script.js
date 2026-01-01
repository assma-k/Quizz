const jouer = document.getElementById("jouer");
const choix = document.getElementById("choix");
jouer.addEventListener("click",() => {
  choix.classList.toggle("hidden");
});

jouer.addEventListener("click",() => {
  jouer.style.display = "none";
});


document.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("perso").addEventListener("click", () => {
    window.location.href = "Qpersonnages.html";
  });

  document.getElementById("chrono").addEventListener("click", () => {
    window.location.href = "Qchronologie.html";
  });

  document.getElementById("univers").addEventListener("click", () => {
    window.location.href = "Qunivers.html";
  });
});



