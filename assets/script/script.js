// Assignment code here

function randoNum (rangeNum){
  return Math.floor(Math.random() * rangeNum)
}

function generatePassword (){
    //create array to order the questions in a for loop
    var passOrder = ["passLength", "passUpper", "passLower", "passNum", "passSpec"]
    //define empty array for future .push(), define empty string for future .concat()
    var passData = [];
    var passFinal = "";

    var passLength;
    var passInfo;
    var usedChar = [0, 0, 0, 0]
    var usedCharCounter = 0;
    //create object to store prompt messages
    var passQueries = {
      passLength: "How long would you like your password to be? Please write an integer between 8 and 128.",
      passUpper: "Would you like uppercase letters? Please answer Y/N.",
      passLower: "Would you like lowercase letters? Please answer Y/N.",
      passNum: "Would you like numbers? Please answer Y/N.",
      passSpec: "Would you like special characters? Please answer Y/N.",
    }

    //for loop to prompt user for password info 
    for (var i = 0; i < passOrder.length; i++) {
      //prompt for answers, in order
      var promptAnswer = prompt(passQueries[passOrder[i]]);
      //if user hits cancel, end process
      if (promptAnswer === null){
        break;
      }
      //function for verifying and storing answers
      function getData(){
        //passLength is the only number, so it gets its own if-statement
        if (passOrder[i] === "passLength"){
          //convert to number
          promptAnswer = Number(promptAnswer);
          //check if value is in range or not a number
          if (Number.isInteger(promptAnswer) && (8 <= promptAnswer) && (promptAnswer <= 128) ){
            passLength = promptAnswer;
            return;
          }
          else{
            //de-increment the for-loop variable to re-ask and not skip this question, if the input was unacceptable
            alert("Sorry, this prompt can only take an integer between 8 and 128");
            i--;
          }
        }
        else {
          //check whether they gave a Yes or No answer in proper format.
          promptAnswer = promptAnswer.toUpperCase();
          if ((promptAnswer === "Y") || (promptAnswer === "N")){
            passData.push(promptAnswer);
          }
          else{
            console.log("why is this failing");
            alert("This prompt is quite dim. Please only answer Y or N.");
            i--;
          }
        }
      }
      getData(); 
    }
    //check for at least 1 Y
    if (passData.toString() === "N,N,N,N"){
      console.log(passData.toString());
      alert("You have to give us SOMETHING to work with.")
    }
    else if (passData.length === 4){
      passInfo = true;
    }

    function makePass(){
      //make strings of possible characters
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var specChar = " !#\"$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      //reset passFinal in case this isn't the first attempt
      passFinal = "";

      for (var i = 0; i < passLength; i++){
        //generate random number for which type of character to use
        //generate character based on number
        function charGen() {
          var charType = randoNum(4);
          if ((charType === 0) && (passData[0] === "Y")){
            //append random uppercase letter
            passFinal = passFinal.concat(alphabet[randoNum(alphabet.length)].toUpperCase());
            usedChar[0] = 1;
          }
          else if ((charType === 1) && (passData[1] === "Y")){
            //append random lowercase letter
            passFinal = passFinal.concat(alphabet[randoNum(alphabet.length)]);
            usedChar[1] = 1;
          }
          else if ((charType === 2) && (passData[2] === "Y")){
            //append random digit
            passFinal = passFinal.concat(randoNum(9).toString());
            usedChar[2] = 1;
          }
          else if ((charType === 3) && (passData[3] === "Y")){
            //append random special character
            passFinal = passFinal.concat(specChar[randoNum(specChar.length)]);
            usedChar[3] = 1;
          }
          //if the random number generator rolled a character type that the user didn't select, re-roll
          else{
            charGen();
          }
        }
        charGen();
      }
    }   

    //if user answered all prompts correctly, make password
    if (passInfo){
      while(1){
        makePass();
        //check to make sure all requested character types are used. If not, make new password
        for(var i = 0; i < usedChar.length; i++){
            if((usedChar[i] === 0) && (passData[i] === "Y")){
              usedChar = [0, 0, 0, 0];
              usedCharCounter = 0;
              break;
            }
            else{
              usedCharCounter++;
            }
        }
        if (usedCharCounter === 4){
          break;
        }

      }      
    }
    //prevents the password box from showing 'undefined' if password creation was canceled by prompt   
    else{
      return "";
    }
    //send password to writePassword()
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
