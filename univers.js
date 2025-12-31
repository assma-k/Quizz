const question =[ 
    //univers

    { question: "Quelle est l’arme emblématique de Link ?", reponse: ["L’épée de feu", "L’épée de légende (Master Sword)", "L’épée royale"], bonne: 1 },
    { question: "Que représentent les Triforces ?", reponse: ["Courage, Force et Sagesse", "Vie, Mort et Destin", "Feu, Eau et Vent"], bonne: 0 },
    { question: "Où repose généralement la Master Sword ?", reponse: ["Dans un volcan", "Dans un socle sacré", "Dans un château"], bonne: 1 },
    { question: "Quel objet permet à Link de tirer à distance ?", reponse: ["Le boomerang", "L’arc", "La bombe"], bonne: 1 },
    { question: "Quel est le royaume principal de la saga ?", reponse: ["Termina", "Hyrule", "Lorule"], bonne: 1 },
    { question: "À quoi servent les rubis ?", reponse: ["Sauvegarder", "Acheter des objets", "Se téléporter"], bonne: 1 },
    { question: "Quel est le temple souvent associé à l’eau ?", reponse: ["Temple de la forêt", "Temple de l’eau", "Temple de l’ombre"], bonne: 1 },
    { question: "Quel objet permet de planer dans Breath of the Wild ?", reponse: ["La feuille Mojo", "Le parapente", "Les bottes de Pégase"], bonne: 1 },
    { question: "Quel peuple vit dans l’eau ?", reponse: ["Gorons", "Zoras", "Sheikahs"], bonne: 1 },
    { question: "Que sont les Korogus ?", reponse: ["Des esprits de la forêt", "Des ennemis", "Des marchands"], bonne: 0 }
]

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