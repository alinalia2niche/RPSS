let allbuttons = document.querySelectorAll(".g");
const PS = document.getElementById("PS");
const CS = document.getElementById("CS");
let chosen = "";
PScore = 0;
CScore = 0;
CS.textContent = PScore;
PS.textContent = CScore;
allbuttons.forEach(element => {
    console.log(element)
    element.addEventListener("click", function(element){
        chosen = element.target.id;
        printer(chosen);
        gamestart(chosen);
    })
    
});

function printer(name){
    console.log(name);
}

function gamestart(user){
    let compchoi = "";
    let rand = Math.floor(Math.random() * 3) + 1; //1 or 2 or 3 
    if(rand === 1){
        compchoi = "Rock";
    }
    else if(rand === 2){
        compchoi = "Paper";
    }
    else if(rand === 3){
        compchoi = "Scissors";
    }
    else{
        compchoi = "Error";
    }
    console.log(rand);
    console.log(compchoi);
    assess(user, compchoi);
}

function assess(user, comp){

    results(user, comp);
    if(user === "Rock"){
        if(comp === "Rock"){
            tie();
        }
        else if(comp === "Paper"){
            lose();
        }
        else if(comp === "Scissors"){
            win();
        }
        else{
            errorz();
        }
    }

    else if(user === "Paper"){
        if(comp === "Paper"){
            tie();
        }
        else if(comp === "Rock"){
            win();
        }
        else if(comp === "Scissors"){
            lose();
        }
        else{
            errorz();
        }
    }

    else if(user === "Scissors"){
        if(comp === "Paper"){
            win();
        }
        else if(comp === "Rock"){
            lose();
        }
        else if(comp === "Scissors"){
            tie();
        }
        else{
            errorz();
        }
    }
    else{
        errorz();
    }






}


function win(){
    document.getElementById("WTL").textContent = "WIN! 💗";
    PScore++;
    PS.textContent = PScore;

}

function tie(){
    document.getElementById("WTL").textContent = "TIE! 😊";
 }

function lose(){
    document.getElementById("WTL").textContent = "LOSE! 💔";
    CScore++;
    CS.textContent = CScore;

}

function errorz(){
    document.getElementById("WTL").textContent = "erm sumting went wong >_<";
}


function results(u, c){
    if(u === "Paper"){
        u += " 🤚";
    }
    else if(u === "Rock"){
        u += " 👊";
    }
    else if(u === "Scissors"){
        u += " ✌️";
    }

    if(c === "Paper"){
        c += " 🤚";
    }
    else if(c === "Rock"){
        c += " 👊";
    }
    else if(c === "Scissors"){
        c += " ✌️";
    }
    document.getElementById("PERSON").textContent = "Player's choice: " + u;
    document.getElementById("COMP").textContent = "Computer's choice: " + c;

}