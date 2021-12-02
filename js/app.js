'use strict';

//console.log('Hello world');

function myUserName(){
    let userName = prompt('What is your Name?')
    alert('Welcome to Michael\'s About Me website ' + userName)
    return userName
}

let userCounter = 0
let userName = myUserName(); 




// Question One yes is the answer

function questionOne(){
    let userAgeOne = prompt('Am I 25 years old?').toLocaleLowerCase();


    if (userAgeOne === 'yes' || userAgeOne === 'y') {
        //console.log('Yes, I am 25!');
        alert('Yes, I am 25!')
        userCounter++;

    }
}
questionOne();

function questionTwo(){
    let userLocation = prompt('Do I live in Vancouver?').toLocaleLowerCase();

    if (userLocation === 'yes' || 'y') {
        //console.log('Yes, I do live in Vancouver!');
        alert('Yes, I do live in Vancouver!');
        userCounter++;

    }
}
questionTwo();

function questionThree(){
    let userVideoGame = prompt('Do I play Video Games?').toLocaleLowerCase();
    if (userVideoGame === 'yes' || userVideoGame === 'y') {
        //consol.log('yes, I do play Video Games!');
        alert('Yes, I do play Video Games!');
        userCounter++;

    }
}
questionThree();

function questionFour(){
    let userSoccer = prompt('Do I like to play Soccer?').toLocaleLowerCase();
    if (userSoccer === 'yes' || userSoccer === 'y') {
        console.log('Yes, I do play Soccer!');
        alert('Yes, I do play Soccer!');
        userCounter++;
    }

}
questionFour();

function questionFive(){

    let userCake = prompt('Do I like to eat cake?').toLocaleLowerCase();
    if (userCake === 'yes' || userCake === 'y') {
        //console.log('Yes, I love eating cake');
        alert('Yes, I love eating cake!');
        userCounter++;
    }
}
questionFive();

//let userBye = prompt('Thanks for the visiting my Website.
//alert('Thanks for the visiting my Website ' + userName); 




function questionSix(){

    let userAnswer = parseInt(prompt('Please Enter a Number 1-100'))
    let correctAnswer = 90
    let attemps = 3
    
    
    for (let i = 0; i < attemps; i++) {
        while (userAnswer < 1 || userAnswer > 100) {
            userAnswer = parseInt(prompt('Try Again! A number 1-100'))
    
        }
        if (userAnswer === correctAnswer) {
            alert('Correct!');
            alert("Winner!");
            userCounter++;
            break;
        } else if (userAnswer > correctAnswer) {
            userAnswer = parseInt(prompt('Too high! Please try again'))
    
        } else if (userAnswer < correctAnswer) {
            userAnswer = parseInt(prompt('Too low! Please try again!'))
    
        }
        if (i == 3) {
            alert('The correct answer was ' + correctAnswer);
            alert("Game Loser")
    
    
        }
    }
}
questionSix();

function questionSeven(){

    let userQ7Guess = prompt('What is 1 factor of 48?');
    let correctQuest = [1, 2, 3, 4, 6, 8, 12, 16, 24, 48]
    
    for (let count = 5; count > 0; count--) {
        for (let i = 0; i < correctQuest.length; i++) {
            let guess = correctQuest[i];
            if (userQ7Guess == guess) {
                alert('Correct!')
                userCounter++;
                count = 1;
                break;
            }
    
    
    
        }
    
    
    
    
    }
}
questionSeven();

alert('Thank you for visiting my website ' + userName + 'Your score was ' + userCounter + '/7!')


