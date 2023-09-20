'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 0;
let trial = ['💖', '💖', '💖', '💖', '💖', '💖','💖'];


const userLife = function() {

  if(trial.length === 0){
    document.querySelector('.guessing').textContent = '😢You lose. Game Over!!';
  }
  }

const newNumber = function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

const x = function() {
  const userGuess = Number(document.querySelector('.number_container').value);
  
  if(trial.length > 0){

 if(userGuess != secretNumber) {
  trial.pop();
  document.querySelector('.life').textContent = ` ${trial.join(" ")}`;
}

  if(!userGuess){
    document.querySelector('.guessing').textContent = `🚫 ${userGuess} is Invalid!`;
    userLife();
    
  } 

  else if(userGuess === secretNumber) {

    document.querySelector('.guessing').textContent = `🎉 ${userGuess} is Correct!`;
    score++;
    document.querySelector('.score').textContent = `💯Score: ${score}`;
    
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = `🥇Highscore: ${highScore}`;
      }
  userLife(); 
    newNumber(); 
  }
   else if(userGuess > secretNumber) {
    document.querySelector('.guessing').textContent = `${userGuess} is too high!`;
    userLife();
  } 
  else if(userGuess < secretNumber) {
    document.querySelector('.guessing').textContent = `${userGuess} is too low!`;
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
document.querySelector('.guessing').textContent = `Start guessing...`;
document.querySelector('.score').textContent = `💯Score: ${score}`;
document.querySelector('.highscore').textContent = `🥇Highscore: ${highScore}`;
}
document.querySelector('.again').addEventListener('click', a);
document.querySelector('.check').addEventListener('click', x);