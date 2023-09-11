//Old Code <FOR REFERENCE :>
function beats(ui, ci) {
  if (ui == "rock") {
    if (ci == ui) {
      return "TIE";
    } else if (ci == "paper") {
      return "NO";
    } else if (ci == "scissor") {
      return "YES";
    }
  } else if (ui == "paper") {
    if (ci == ui) {
      return "TIE";
    } else if (ci == "rock") {
      return "YES";
    } else if (ci == "scissor") {
      return "NO";
    }
  } else if (ui == "scissor") {
    if (ci == ui) {
      return "TIE";
    } else if (ci == "paper") {
      return "YES";
    } else if (ci == "rock") {
      return "NO";
    }
  } else {
    return "NO";
  }
}

function computer() {
  let ci_num = Math.floor(Math.random() * 3) + 1;
  if (ci_num == 1) {
    return "rock";
  } else if (ci_num == 2) {
    return "paper";
  } else if (ci_num == 3) {
    return "scissor";
  } else {
    return "rock";
  }
}

function checkbutton() {
  if (rocktog) {
    ci = computer();
    ui = "rock";
  }
  if (paprtog) {
    ci = computer();
    ui = "paper";
  }
  if (scistog) {
    ci = computer();
    ui = "scissor";
  }
  if (beats(ui, ci) == "YES") {
    console.log("Player!");
    score_u += 1;
  } else if (beats(ui, ci) == "NO") {
    console.log("Computer!");
    score_c += 1;
  } else {
    console.log("Tie");
  }
  scoreUpd();
}

function scoreUpd() {
  score.textContent = `${score_u} - ${score_c}`;
}

function roundUpd(){
    if(i<=rounds){
        i+=1;
        round.textContent = `Round ${i}`;
    }
    else{
        if(score_u>score_c){
            round.textContent = `Player Wins!`;
        }
        else if(score_c>score_u){
            round.textContent = `Player Loses!`;
        }
        else{
            round.textContent = `It's a TIE!!`;
        }
        i = 1
        score_u=score_c=0
    }
}

const round = document.querySelector(".Round");
const score = document.querySelector(".Score");
const outcome = document.querySelector(".Outcome");
const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");
let i = 1;
let rounds = 6;
let score_u = 0;
let score_c = 0;

let rocktog = false;
let paprtog = false;
let scistog = false;

rock.addEventListener("click", () => {
  rocktog = true;
  paprtog = false;
  scistog = false;
  checkbutton();
  roundUpd();
});

paper.addEventListener("click", () => {
  rocktog = false;
  paprtog = true;
  scistog = false;
  checkbutton();
  roundUpd();
});

scissor.addEventListener("click", () => {
  rocktog = false;
  paprtog = false;
  scistog = true;
  checkbutton();
  roundUpd();
});
