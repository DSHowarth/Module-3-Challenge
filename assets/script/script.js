// Assignment code here

function randoNum (rangeNum){
  return Math.floor(Math.random() * rangeNum)
}

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

    var passInfo;
    var passFinal;

    //for loop to prompt user
    getAnswers:  
    for (var i = 0; i < passOrder.length; i++) {
      var cancellation;
      //function for making prompts and validating data
      function getData(){
        //begin infinitely nested if statements
        if (passOrder[i] === "passLength"){
          var promptAnswer = prompt(passQueries[passOrder[i]]);
          if (promptAnswer === null){ // if user hits cancel, exit for loop
            cancellation = true;
          }
          promptAnswer = Number(promptAnswer);
          if (Number.isInteger(promptAnswer) && (8 <= promptAnswer) && (promptAnswer <= 128) ){
            passData.passLength = promptAnswer;
          }
          else{
            alert("Sorry, this prompt can only take an integer between 8 and 128");
            getData();
          }
        }
        else {
          var promptAnswer = prompt(passQueries[passOrder[i]]);
          if (promptAnswer === null){
            cancellation = true;
          }
          if (promptAnswer === ("Y" || "N")){
            passData[passOrder[i]] = promptAnswer;
          }
          else{
            alert("This prompt is quite dim. Please only answer Y or N.");
            getData();
          }
        }
      }
      if(cancellation){
        break getAnswers;
      }
      getData();
      passInfo = true;
    }
    function makePass{
      //make strings of possible characters
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var specChar = " !#\"$%&'()*+,-./:;<=>?@[\]^_`{|}~";

      for (var i = 0; i < passData.passLength; i++){
        // generate random number for which type of character to use
        // generate character based on number
        //append character to password array
        
      }
      //convert password array to string
    }
    //if user answered all prompts correctly, make password
    if (passInfo){
      makePass();
    }
    else{
      return;
    }
    // return made password to writePassword()
    return passFinal;
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
