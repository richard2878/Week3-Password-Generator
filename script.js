// Assignment Code
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specChar = ["!", "'", "$", "#", "%", "&", "(", ")", "*", "+", ",", "-", ]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var finalPwd = [];
var newArr = [];

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
    while((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128)) {
      passwordLength = prompt('How many characters does your password contain?');
    }

  var chkUpperCase = confirm("Ok if you'd like upper case characters?");
    while(chkUpperCase === true)   
  
  var chkLowerCase = confirm("Ok if you'd like lower case characters?");
    while(chkLowerCase === true)

  var chkSpecChar = confirm("Ok if you'd like special characters in your password?");
    while(chkCase === true)

  var chkNumbers = confirm("Ok if you'd like numerical characters in your password?");
    while(chkCase === true)

  while(
    chkUpperCase === false && chkLowerCase === false && chkSpecChar === false && chkNumbers === false 
  ) {
    alert("Must have at least one character type.");
  }  
}
  

for(var i = 0; i <numbers.length; i++) {
  newArr.push(numbers[i])
}

for(var i = 0; i <upperCase.length; i++) {
  newArr.push(upperCase[i])
}

for(var i = 0; i <lowerCase.length; i++) {
  newArr.push(lowerCase[i])
}

for(var i = 0; i <specChar.length; i++) {
  newArr.push(specChar[i])
}

for(var i = 0; i < newArr.length; i++) {
  finalPwd.push(newArr[i])
}

function random_items(newArr) {
  return newArr[Math.floor(Math.random() * newArr.length)];
}

for(let i = 0; i < passwordLength; i++) {
  console.log(random_items(newArr));
}

newPassword.textContent = finalPwd

var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword);
