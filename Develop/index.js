const Manager = require("Manager");
const Engineer = require("Engineer");
const Intern = require("Intern");
const fs = require("fs");
const inquirer = require('inquirer');
inquirer


// start to write prompts for Manager questions

   .prompt([   
    /* Pass your questions in here */
    {
      type: "rawlist",
      name: "options",
      message: "Hi and Welcome to Team profile generator. please select a option below 😀.", 
      choices: ["Add Manager", "Add Engineer", "Add Intern"],

    },

    {
      type: "input",
      name: "name",
      message: "What is your Manager name?",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name 😡"
        }
        return true
      }
    },

    {
       type: "input",
       name: "id",
       message: "Please enter your Manager ID",
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
      message: "Please enter your Manager email 📪",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name"
        }
        return true
      }
    },

    {
      type: "input",
      name: "Number",
      message: " Please Enter your Managers number",
      validate: (answer) => {
        if(isNaN(answer)){
          return "Please enter a valid number"
        }
        return true
      }


    },
    
    // start to write prompts for Engineer questions

     {
      type: "input",
      name: "name",
      message: "What is your Engineer name?",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name 😡"
        }
        return true
      }
    },

    {
       type: "input",
       name: "id",
       message: "Please enter your Engineer ID",
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
      message: "Please enter your email 📪",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name"
        }
        return true
      }
    },

    {
      type: "input",
      name: "gitName",
      message: " Please enter your GitHub userName",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid GitHub userName"
        }
        return true
      }


    },

    // start to write prompts for Intern questions

    {
      type: "input",
      name: "name",
      message: " Please enter the intern's name.",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid name 😡"
        }
        return true
      }
    },
    {
      type: "input",
      name: "id",
      message: "Please enter intern's ID.",
      validate: (answer) => {
        if(isNaN(answer)){
          return "Please enter a valid ID number"
        }
        return true
      }
    },
    {
      type: "input",
      name: "email",
      message: "Please enter intern's email.",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid email 😡"
        }
        return true
      }
    },
    {
      type: "input",
      name: "school",
      message: "Please enter intern's school.",
      validate: (answer) => {
        if(answer --- ""){
          return "Please enter a valid school name 😡"
        }
        return true
      }
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