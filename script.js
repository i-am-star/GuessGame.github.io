'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 0;
let trial = ['💖', '💖', '💖', '💖', '💖', '💖','💖'];


const userLife = function() {

  if(trial.length === 0){
    displayMessage('😢You lose. Game Over!!');
  }
  }

  const displayMessage = function(message){
    document.querySelector('.guessing').textContent = message;
  }

const newNumber = function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

const x = function() {
  const userGuess = Number(document.querySelector('.number_container').value);
  
  if(trial.length > 0){

  if(!userGuess){
   displayMessage(`🚫 ${userGuess} is Invalid!`);
    userLife();
    
  } 

  else if(userGuess === secretNumber) {

    displayMessage(`🎉 ${userGuess} is Correct!`);
    score++;
    document.querySelector('.score').textContent = `💯Score: ${score}`;
    
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = `🥇Highscore: ${highScore}`;
      }
  userLife(); 
    newNumber(); 
  }

  else if(userGuess !== secretNumber){
    trial.pop();
  document.querySelector('.life').textContent = ` ${trial.join(" ")}`;
   displayMessage(userGuess > secretNumber ? `${userGuess} is too high!` : `${userGuess} is too low!`);
     userLife();
  }
}

else {
  document.querySelector('.life').textContent = ` Press restart button`;
}

}

const a = function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
 trial = ['💖', '💖', '💖', '💖', '💖', '💖', '💖'];
document.querySelector('.number_container').value = " ";
document.querySelector('.life').textContent = ` ${trial.join(" ")}`;
score = 0;
displayMessage(`Start guessing...`);
document.querySelector('.score').textContent = `💯Score: ${score}`;
document.querySelector('.highscore').textContent = `🥇Highscore: ${highScore}`;
}
document.querySelector('.again').addEventListener('click', a);
document.querySelector('.check').addEventListener('click', x);
