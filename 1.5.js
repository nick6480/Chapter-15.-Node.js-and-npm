const readline = require("readline-sync");
const fs = require("fs");
const checkValue = require("./1.0a");


let filename = "data.json";

let name;
let email;
let users = [];
let emailBool = false;



let data = fs.readFileSync("data.json", "utf8");
if (data.length > 0) {
  users = JSON.parse(data);
}




function createDetails() {
  enterName();
  if (emailBool == false) {
    enterEmail()
    user = {
          name: name,
          email: email,
      };

    users.push(user);
  }
}



function enterName() {
  //console.log(users)
  name = readline.question("Enter name:");
  if (!checkValue.checkIfValue(name)) {
    console.log("Please enter a name");
    enterName();
  }
  if (checkAvailability(name) == true) {
    console.log("A user width that name already exists");
    newEnterEmail()
  }
}


function enterEmail() {
  email = readline.question("Enter email:");
  if (!checkValue.checkIfValue(email)) {
    console.log("Please enter an email");
    enterEmail()
  }
}

function newEnterEmail() {

  changeEmail = readline.question("Do you wish to change the email [Y/N]");
  if (changeEmail.toUpperCase() == "Y") {
    emailBool = true;
    users[foundI].email = readline.question("Enter new email:");

  } else if (changeEmail.toUpperCase() == "N") {
    emailBool = false;
    enterName()
  } else {
    newEnterEmail()
  }
}


let found;
let foundI;

function checkAvailability(userid) {
  for (var i = 0; i < users.length; i++) {
    //console.log(users[i].name == userid)
    if (users[i].name == userid){// Looking for a match
      found = true;
      foundI = i;
      break;
    }else
      found = false;
      foundI = "";
  }
  return found;
}


createDetails()




let jsonString = JSON.stringify(users)

fs.writeFile(filename, jsonString, (err) => {
    if (err) {
        throw err;
    }
    console.log("Your details has been saved");
});
