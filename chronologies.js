

let current = 0;
let score = 0;

function afficheQuest(){
    document.getElementById("question").textContent = question[current].question;
    document.getElementById("reponse1").textContent = question[current].reponse[0];
    document.getElementById("reponse2").textContent = question[current].reponse[1];
    document.getElementById("reponse3").textContent = question[current].reponse[2];
}

afficheQuest();

document.querySelectorAll(".reponse").forEach((btn, index) => {
    btn.addEventListener("click", function(){
        if(index === question[current].bonne){
            score++;
        }
        current++;
        if(current < question.length) {
            afficheQuest();
        }
        else{
            document.getElementById("contenue").innerHTML = `<h2>Quiz terminé ! score : ${score} /10</h2>`;
        }
    });
});