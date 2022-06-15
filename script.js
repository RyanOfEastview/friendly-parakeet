// Assignment code here

var characterLength = 66;  //I randomly chose this number as no characters are displayed until after the user chooses how many characters they want.
var characters = [];       //I left this empty as it will get populated via the prompt function below
//my array variables where the prompts function will concatenate the results into the writePassword function
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '<', '?', '>', '/'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

//event listener.  when clicked, actions the writePassword function on line 19
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//The writePassword function pulls the results of the prompts function
function writePassword() {
  var promptChoice = prompts(); //actions prompts function on line 41.  If true proceed to creating the new variable wontGuessThis by running the generatePassword function
  var passwordString = document.querySelector("#password");

  //if prompts returned true and were entered correctly, then a password will be generated into the wontGuessThis variable by running the generatePassword function
  if (promptChoice) {
    var wontGuessThis = generatePassword();
    passwordString.value = wontGuessThis;
  } 
}

function generatePassword() {
  // look at prompts and generate password
  //for loop looks at the value characterLength and 
  var password = ""; //the generated password will go between the quotations and become the password.
  for(var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * characters.length);
    password = password + characters[randomCharacter];
  }
  return password;
}

//prompts function is a series of prompts that the user sees displayed once they click the generate password button.
function prompts() {
  characters = [];

  characterLength = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128 characters."));

  //using simple true or false prompts, the user is asked to provide the following preference:
  //I chose the isNaN method to keep a simple true/false line of questioning for this function
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number value that is between 8 and 128 characters.");
    return false;
  }  //once a password size is selected, this functions combines the results with the concatenated var arrays and stores the value in the characters variable on line 4
  if (confirm("Would you like to include lowercase characters?")) {
    characters = characters.concat(lowercase);
  }
  if (confirm("Would you like to include uppercase characters?")) {
    characters = characters.concat(uppercase);
  }
  if (confirm("Would you like to include symbols?")) {
    characters = characters.concat(symbols);
  }
  if (confirm("Would you like to include numbers?")) {
    characters = characters.concat(numbers);
  } 
  return true;
}
