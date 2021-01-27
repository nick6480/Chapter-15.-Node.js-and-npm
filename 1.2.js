const readline = require('readline-sync');
const fs = require("fs");



let filename = "data.json";

let data = fs.readFileSync('data.json', 'utf8')
if (data.length > 0) {
  users = JSON.parse(data);
}


function displayUsers() {
  console.log("--All users--");
  for (var i = 0; i < users.length; i++) {
    console.log(`${users[i].name} - ${users[i].email}`);
  }
}

displayUsers()
