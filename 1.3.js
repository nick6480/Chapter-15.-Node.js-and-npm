const readline = require('readline-sync');
const fs = require("fs");
const checkValue = require("./1.0a");


let filename = "data.json";

//Gets data and parses it
let data = fs.readFileSync("data.json", "utf8");
if (data.length > 0) {
  users = JSON.parse(data);
}

let found;


function findUser() {
  userid = readline.question("Enter user id: ");
  if (!checkValue.checkIfValue(userid)) {
    console.log("Please enter a user id");
    findUser()
  } else {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name == userid) {// Looking for a match
        console.log(`${users[i].name} - ${users[i].email}`);
        found = users[i].name == userid;
      }

    }
    if (!found) {
      console.log("No user with that id was found");
    }
  }
}

findUser()
