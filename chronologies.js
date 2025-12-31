const question =[
    //chrono

    { question: "Quel est le premier jeu de la saga Zelda sorti en 1986 ?", reponse: ["A Link to the Past", "Zelda II", "The Legend of Zelda"], bonne: 2 },
    { question: "Dans quel jeu apparaît pour la première fois Ganondorf ?", reponse: ["Ocarina of Time", "Twilight Princess", "Wind Waker"], bonne: 0 },
    { question: "Quel jeu se déroule principalement sur une mer ?", reponse: ["Skyward Sword", "Wind Waker", "Breath of the Wild"], bonne: 1 },
    { question: "Quel jeu est une suite directe de Breath of the Wild ?", reponse: ["Age of Calamity", "Tears of the Kingdom", "Skyward Sword"], bonne: 1 },
    { question: "Dans quel jeu Link peut-il se transformer en loup ?", reponse: ["Majora’s Mask", "Twilight Princess", "Skyward Sword"], bonne: 1 },
    { question: "Quel jeu est connu pour son système de masques ?", reponse: ["Ocarina of Time", "Majora’s Mask", "Minish Cap"], bonne: 1 },
    { question: "Quel jeu se déroule dans le ciel ?", reponse: ["Breath of the Wild", "Skyward Sword", "Twilight Princess"], bonne: 1 },
    { question: "Quel est le style graphique de Wind Waker ?", reponse: ["Réaliste", "Cell-shading", "Pixel art"], bonne: 1 },
    { question: "Quel jeu Zelda est sorti sur Nintendo Switch en 2017 ?", reponse: ["Skyward Sword", "Breath of the Wild", "Link’s Awakening"], bonne: 1 },
    { question: "Quel jeu se déroule sur l’île du Poisson-Rêve ?", reponse: ["Link’s Awakening", "Oracle of Ages", "Minish Cap"], bonne: 0 }
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