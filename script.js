//array of lowercase letters
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

//array of uppercase letters
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// array of numbers
var numericCharacters = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// array of special characters
var spcialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+"
];

//function to prompt user for password options
function getPasswordOptions() {
  // defining length variable and conditional statements
  var length = parseInt(prompt("How long do you want your password?"));

  if (isNaN(length) === true) {
    alert("Length of password must be provided as a numerica number");
    return;
  }

  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password can be no longer than 128 characters");
    return;
  }
  //confirming character type variables

  var lowerCasedCharacters = confirm("Press OK to confirm lower cased letter");
  if (lowerCasedCharacters === false){
    alert("You must have a lower cased letter");
    return;
  }

  var upperCasedCharacters = confirm("Press OK to confirm upper cased letter");
  if (upperCasedCharacters === false){
    alert("You must have upper cased letter");
    return;
  } 

  var numericCharacters = confirm("Press OK to confirm number");
  if (numericCharacters === false){
    alert("You must have number");
    return;
  }

  var specialCharacters = confirm("Press OK to confirm special character");
  if (specialCharacters === false){
    alert("You must have special character");
    return;
  } 
}

//function to get random item from array
function getRandomItem(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Assignment Code 
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
