const question =[
    //perso

    {question: "Quel est le véritable nom de la princesse Zelda dans Skyward Sword ?", reponse: ["Zelda", "Impa", "Hylia"], bonne: 0},
    {question: "Qui est le principal antagoniste récurrent de la saga ?", reponse: ["Vaati", "Ganon", "Majora"], bonne: 1},
    {question: "Quel est le nom du compagnon de Link dans Ocarina of Time ?", reponse: ["Midna", "Navi", "Fi"], bonne: 1},
    {question: "Quel personnage est le chef des Gorons dans Breath of the Wild ?", reponse: ["Daruk", "Yunobo", "Goron bleu"], bonne: 1},
    { question: "Qui est Impa ?", reponse: ["Une déesse", "Une Sheikah protectrice de Zelda", "Une Gerudo"], bonne: 1 },
    { question: "Quel est le nom du marchand masqué dans Majora’s Mask ?", reponse: ["Skull Kid", "Happy Mask Salesman", "Tingle"], bonne: 1 },
    { question: "Quel peuple vit principalement dans le désert Gerudo ?", reponse: ["Les Sheikahs", "Les Zoras", "Les Gerudos"], bonne: 2 },
    { question: "Qui est Midna ?", reponse: ["Princesse du Royaume du Crépuscule", "Une fée", "Une sorcière"], bonne: 0 },
    { question: "Quel est le nom du héros incarné par le joueur ?", reponse: ["Zelda", "Ganon", "Link"], bonne: 2 },
    { question: "Quel personnage est obsédé par les rubis ?", reponse: ["Beedle", "Tingle", "Ganondorf"], bonne: 1 }
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