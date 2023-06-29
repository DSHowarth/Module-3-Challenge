// Assignment code here

function generatePassword (){
  //create object for password answers
    var passData = {
      passLength: "",
      passUpper: "",
      passLower: "",
      passNum: "",
      passSpec: "",
    }
    //create array to order the questions in a for loop
    var passOrder = ["passLength", "passUpper", "passLower", "passNum", "passSpec"]
    
    //create object to store prompt messages
    var passQueries = {
      passLength: "How long would you like your password to be? Please write an integer between 8 and 128.",
      passUpper: "Would you like uppercase letters? Please answer Y/N.",
      passLower: "Would you like lowercase letters? Please answer Y/N.",
      passNum: "Would you like numbers? Please answer Y/N.",
      passSpec: "Would you like special characters? Please answer Y/N.",
    }

    //for loop to prompt user
    for (var i = 0, i < passOrder.length, i++) {
      //function for making prompts and validating data
      function getData(){
        //begin infinitely nested if statements
        if (passOrder[i] === "passLength"){
          var promptAnswer = prompt(passQueries[i])
            if (promptAnswer.isInteger && ( 8 <= promptAnswer <= 128) ){
              
            }
            else{
              alert("Sorry, this prompt can only take an integer between ")
            }
        }
        else {
          var promptAnswer = prompt(passQueries[i])
          if (promptAnswer === "Y" || "N"){
  
          }
        }
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
