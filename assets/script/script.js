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
    getAnswers:  
    for (var i = 0; i < passOrder.length; i++) {
      console.log("we got into the for loop");
      var cancellation;
      //function for making prompts and validating data
      function getData(){
        //begin infinitely nested if statements
        if (passOrder[i] === "passLength"){
          var promptAnswer = prompt(passQueries[passOrder[i]]);
          if (promptAnswer === null){ // if user hits cancel, exit for loop
            cancellation = true;
            return;
          }
          console.log(typeof promptAnswer);
          promptAnswer = Number(promptAnswer);
          console.log(typeof promptAnswer);
          console.log(promptAnswer);
          if (Number.isInteger(promptAnswer) && (8 <= promptAnswer) && (promptAnswer <= 128) ){
            passData.passLength = promptAnswer;
            return;
          }
          else{
            alert("Sorry, this prompt can only take an integer between 8 and 128");
            getData();
          }
          return;
        }
        else {
          var promptAnswer = prompt(passQueries[passOrder[i]]);
          if (promptAnswer === null){
            cancellation = true;
            return;
          }
          if (promptAnswer === ("Y" || "N")){
            passData[passOrder[i]] = promptAnswer;
            return;
          }
          else{
            alert("This prompt is very dim. Please only answer Y or N.");
            getData();
          }
          return;
        }
      }
      if(cancellation){
        break getAnswers;
      }
      getData();
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
