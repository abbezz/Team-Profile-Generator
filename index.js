const fs = require("fs");
const inquirer = require('inquirer');
inquirer


// start to write prompts for questions
  .prompt([
    /* Pass your questions in here */
    {
      type: "rawlist",
      name: "options",
      message: "Hi and welcome to Team profile generator. please select a option below.",
      choices: ["Add Manager", "Add Engineer", "Add Intern"],

    },

    {
      type: "input",
      name: "name",
      message: "What is your employees name?",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name"
        }
        return true
      }
    },

    {
       type: "input",
       name: "id",
       message: "Please enter your employees ID",
       validate: (answer) => {
        if(isNaN(answer)){
          return "Please enter a valid ID number"
        }
        return true
      }
    },

    {
      type: "input",
      name: "Email",
      message: "Enter your employees email please",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name"
        }
        return true
      }
    },

    {
      type: "input",


    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });