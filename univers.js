let questions = [];

fetch("questions.php?theme=univers")
  .then((reponse) => reponse.json())
  .then((data) => {
     console.log("DATA RECUE :", data);
    questions = data;
    console.log(questions);
    afficheQuest();
    document.querySelectorAll(".reponse").forEach((btn, index) => {
      btn.addEventListener("click", function () {
        if (index === questions[current].bonne) {
          score++;
        }
        current++;
        if (current < questions.length) {
          afficheQuest();
        } else {
            fetch(`save_score.php?theme=univers&score=${score}&total=${questions.length}`);
          document.getElementById(
            "contenue"
          ).innerHTML = `<h2>Quiz terminé ! score : ${score} /${questions.length}</h2>`;
        }
      });
    });
  })
  .catch((error) => console.error("Erreur :", error));

let current = 0;
let score = 0;

function afficheQuest() {
  document.getElementById("question").textContent = questions[current].question;
  document.getElementById("reponse0").textContent =
    questions[current].reponse[0];
  document.getElementById("reponse1").textContent =
    questions[current].reponse[1];
  document.getElementById("reponse2").textContent =
    questions[current].reponse[2];
}
