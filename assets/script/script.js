// Assignment code here

function generatePassword (){
    var passData {
      passLength: "",
      passUpper: "",
      passLower: "",
      passNum: "",
      passSpec: "",
    }

    var passQueries {
      passLength: "How long would you like your password to be? Please write a number between 8 and 128.",
      passUpper: "Would you like uppercase letters? Please answer Y/N.",
      passLower: "Would you like lowercase letters? Please answer Y/N.",
      passNum: "Would you like numbers? Please answer Y/N.",
      passSpec: "Would you like special characters? Please answer Y/N.",
    }

    for (var i = 0, i < passData.length, i++) {
      function getData(){
        
      }
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
