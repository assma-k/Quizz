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

function afficheScores() {
  const cookies = document.cookie.split(";")
  console.log("cookies :", cookies);
  const scoreP = cookies.find(c => c.startsWith("score_personnages"));
  if (scoreP){
    const V = scoreP.split("=")[1];
    const valeurDecodee = decodeURIComponent(V);
    document.getElementById("score-personnages").textContent = valeurDecodee;
  }

   const scoreU = cookies.find(c => c.startsWith("score_univers"));
  if (scoreU){
    const V = scoreU.split("=")[1];
    const valeurDecodee = decodeURIComponent(V);
    document.getElementById("score-univers").textContent = valeurDecodee;
  }

   const scoreC = cookies.find(c => c.startsWith("score_chronologies"));
  if (scoreC){
    const V = scoreC.split("=")[1];
    const valeurDecodee = decodeURIComponent(V);
    document.getElementById("score-chronologies").textContent = valeurDecodee;
  }
}
afficheScores();

