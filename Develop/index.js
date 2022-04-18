//Generate html is required to create the markdown
const renderHTML = require("./Library/generate-site");

//The manager class is imported
const Manager = require("./Library/Manager");

//The engineer class is imported
const Engineer = require("./Library/Engineer");

//The intern class is imported
const Intern = require("./Library/Intern");

const inquirer = require("inquirer");

//Fs is required to write the team profile file
const fs = require("fs");

//teamMemberArray is declared as an empty array
const teamMembersArray = [];

/* Prompts for manager */

function managerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Please enter the manager's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager's office number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
      );
      teamMembersArray.push(manager);
      renderTeam();
    });
};

function renderTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "roles",
        message: "Please choose your employee's role.",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((answers) => {
      if (answers.roles === "Engineer") {
        engineerPrompts();
      } else if (answers.roles === "Intern") {
        internPrompts();
      } else {
        writeFile();
      }
    });
};

/* Prompts for engineer */

function engineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Please enter the engineer's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter engineer's ID.",
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
        message: "Please enter engineers's email.",
      },
      {
        type: "input",
        name: "gitUsername",
        message: "Please enter engineer's GitHub Username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitUsername,
      );
      teamMembersArray.push(engineer);
      renderTeam();
    });
}

/* Prompts for intern */

function internPrompts() {
  inquirer
    .prompt([
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
       const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
        );
        teamMembersArray.push(intern);
        renderTeam();
       });
       }

         const writeFile = () => {
          fs.writeFileSync("./Develop/index.html", renderHTML(teamMembersArray), (err) => {
         //Any errors with writing to the file are captured
         if (err) {
         console.log(err);
         return;
           //if writing to the file was successful, then the HTML file created a message is logged in the console
             } else {
           console.log("Good your team profile has been created!");
          }
        });
      };

       managerPrompts();