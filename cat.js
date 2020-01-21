const pwd = require('./pwd');
const fs = require('fs');

function cat (fileName) {
  let pwdString = pwd();
  let filePath = pwdString.concat(`/${fileName}`);
  fs.readFile(filePath, 'utf8', (err,data) => {
    if (err) {
      throw error;
    } else {
      data = data.toString();
      process.stdout.write(data);

    }

  })

}

module.exports = cat;

//WHAT: Print contents of file

//TAKES PARAMS: Name of file, name of command goes in bash

//result of pwd, concat on the filename Param

//Look up file in the system, and print out the code inside it

//HOW??
