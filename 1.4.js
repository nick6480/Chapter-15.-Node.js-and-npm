const readline = require('readline-sync');
const fs = require("fs");
const checkValue = require("./1.0a");


let filename = "data.json";




let name;
let email;
let users = [];

let data = fs.readFileSync("data.json", "utf8")
if (data.length > 0) {
  users = JSON.parse(data);
}




function createDetails() {
  enterName();
  enterEmail();

  user = {
      name: name,
      email: email,
  };

  users.push(user);
}



function enterName() {
  //console.log(users)
  name = readline.question("Enter name:");
  if (!checkValue.checkIfValue(name)) {
    console.log("Please enter a name");
    enterName()
  }
  if (checkAvailability(name) == true) {
    console.log("A user width that name already exists");
    enterName()
  }
}

function enterEmail() {
  email = readline.question("Enter email:");
  if (!checkValue.checkIfValue(email)) {
    console.log("Please enter an email");
    enterEmail()
  }
}

let found;

function checkAvailability(userid) {
  for (var i = 0; i < users.length; i++) {
    //console.log(users[i].name == userid)
    if (users[i].name == userid){// Looking for a match
      found = true;
      break;
    } else
      found = false;
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
