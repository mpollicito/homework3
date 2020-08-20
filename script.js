// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var word = "";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberChar = "0123456789".split("");
  var specialChar = `"~!@#$%^&*()_+-=[]{}\|;:',<.>/?*`.split("");
  
  var chosenChar = [];
  var length = parseInt(prompt("Choose password length between 8 and 128 characters"));
  
  var upper = confirm("Would you like uppercase characters?");
  var lower = confirm("Would you like lowercase characters?");
  var number = confirm("Would you like numbers?");
  var special = confirm("Would you like special characters?");

  if (upper) {  
      for(var i = 0; i<upperCaseChar.length; i++){
      chosenChar.push(upperCaseChar[i]);
    }
  }

  if (lower) {  
    for(var i = 0; i<lowerCaseChar.length; i++){
    chosenChar.push(lowerCaseChar[i]);
    }
  }

  if (number) {  
    for(var i = 0; i<numberChar.length; i++){
    chosenChar.push(numberChar[i]);
    }
  }

  if (special) {  
    for(var i = 0; i<specialChar.length; i++){
    chosenChar.push(specialChar[i]);
    }
  
  }

  
  for(var i = 0; i<length; i++){
    var randomIndex = Math.floor(Math.random()*chosenChar.length);
    word+=chosenChar[randomIndex];
  }
  return word;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
