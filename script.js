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
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

// array of special characters
var specialCharacters = [
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

  var confirmLower = confirm("Press OK to confirm using lower cased letter");
  if (confirmLower === false){
    alert("You must have a lower cased letter");
    return;
  }

  var confirmUpper = confirm("Press OK to confirm using upper cased letter");
  if (confirmUpper === false){
    alert("You must have upper cased letter");
    return;
  } 

  var confirmNumeric = confirm("Press OK to confirm using a number");
  if (confirmNumeric === false){
    alert("You must have number");
    return;
  }

  var confirmSpecial = confirm("Press OK to confirm using a special character");
  if (confirmSpecial === false){
    alert("You must have special character");
    return;
  } 

  //object to store user's input
  var getPasswordOptions = {
    length: length,
    confirmUpper: confirmUpper,
    confirmLower: confirmLower,
    confirmNumeric: confirmNumeric,
    confirmSpecial: confirmSpecial
  }
  return getPasswordOptions;
}

//function to get random item from array
function getRandomItem(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
//generating password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
//conditional statement to add lower cased characters into array
  if (options.confirmLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandomItem(lowerCasedCharacters));
    console.log(lowerCasedCharacters);
  }
//conditional statement to add upper cased characters into array
  if (options.confirmUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters); 
    guaranteedCharacters.push(getRandomItem(upperCasedCharacters));
    console.log(upperCasedCharacters);
  }
//conditional statement to add numeric characters into array
  if (options.confirmNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandomItem(numericCharacters));
    console.log(numericCharacters);
  }
//conditional statement to add special characters into array
  if (options.confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandomItem(specialCharacters));
    console.log(specialCharacters);
  } 
//Forloop to iterate length of password
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandomItem(possibleCharacters);
    result.push(possibleCharacter);
  }
//Forloop to include one guaranteed character
  for (var i =0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join(" ");
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
