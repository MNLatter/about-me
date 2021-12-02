'use strict';

//console.log('Hello world');

let userName = prompt ('What is your Name?')
  alert('Welcome to Michael\'s About Me website ' + userName)




// Question One yes is the answer
let userAgeOne = prompt('Am I 25 years old?').toLocaleLowerCase();


if (userAgeOne === 'yes' || userAgeOne === 'y'){
//console.log('Yes, I am 25!');
alert('Yes, I am 25!')

}

let userLocation = prompt('Do I live in Vancouver?').toLocaleLowerCase();

if (userLocation === 'yes' || 'y'){
//console.log('Yes, I do live in Vancouver!');
alert('Yes, I do live in Vancouver!');

}

let userVideoGame = prompt('Do I play Video Games?').toLocaleLowerCase();
if (userVideoGame === 'yes' || userVideoGame === 'y'){
//consol.log('yes, I do play Video Games!');
  alert('Yes, I do play Video Games!');

}

let userSoccer = prompt('Do I like to play Soccer?').toLocaleLowerCase();
if (userSoccer === 'yes' || userSoccer === 'y'){
console.log('Yes, I do play Soccer!');
alert('Yes, I do play Soccer!');

}

let userCake = prompt('Do I like to eat cake?').toLocaleLowerCase();
if (userCake === 'yes' || userCake === 'y'){
//console.log('Yes, I love eating cake');
alert('Yes, I love eating cake!');
}

//let userBye = prompt('Thanks for the visiting my Website.
//alert('Thanks for the visiting my Website ' + userName); 





  let userAnswer = parseInt('Please Enter a Number 1-100'));
  let correctAnswer = 90;
  let attemps = 3;


  for (let i = 0; i < attemps; i++){
      while(userAnswer < 1 || userAnswer > 100){
          userAnswer = prompt('Try Again! A number 1-100');

      }
      if(userAnswer == correctAnswer){
          alert('Correct!');
          document.write("Winner!");
          break;
      }else if (userAnswer > correctAnswer){
          userAnswer = prompt('Too high! Please try again');

      }else if (userAnswer < correctAnswer){
          userAnswer = prompt('Too low! Please try again!');
      
      }
      if(i == 3){
          alert('The correct answer was ' + correctAnswer);
          document.write("Game Loser")

      }
  }        
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  alert('Thanks for the visiting my Website ' + userName); 



