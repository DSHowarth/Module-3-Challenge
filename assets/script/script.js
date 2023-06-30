// Assignment code here

function randoNum (rangeNum){
  return Math.floor(Math.random() * rangeNum)
}

function generatePassword (){
    //create array to order the questions in a for loop
    var passOrder = ["passLength", "passUpper", "passLower", "passNum", "passSpec"]
    var passData;
    var passLength;
    var passInfo;
    var passFinal;
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
            passLength = promptAnswer;
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
            passData[i] = promptAnswer;
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
      //check for at least 1 Y
      if (passData.toString === "NNNN"){
        alert("You have to give us SOMETHING to work with.")
      }
      else{
        passInfo = true;
      }
    }
    function makePass(){
      //make strings of possible characters
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var specChar = " !#\"$%&'()*+,-./:;<=>?@[\]^_`{|}~";

      for (var i = 0; i < passLength; i++){
        //generate random number for which type of character to use
        //generate character based on number

        function charGen() {
          var charType = randoNum(3);
          if ((charType === 0) && (passDatas[0] === "Y")){
            //append character to password array
            passFinal.push(alphabet[randoNum(alphabet.length)].toUpperCase());
          }
          else if ((charType === 1) && (passDatas[1] === "Y")){
            passFinal.push(alphabet[randoNum(alphabet.length)]);
          }
          else if ((charType === 2) && (passDatas[2] === "Y")){
            passFinal.push(specChar[randoNum(specChar.length)]);
          }
          else if ((charType === 3) && (passDatas[3] === "Y")){
            passFinal.push(randoNum(9));
          }
          else{
            charGen();
          }
        }
        charGen();
      }
    //convert password array to string
    passFinal = passFinal.toString();
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
