// array of numbers
var numericCharacters = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// array of special characters
var spcialCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+"
];

//array of uppercase letters
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

//array of lowercase letters
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
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
