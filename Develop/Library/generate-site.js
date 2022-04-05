const { div } = require("prelude-ls");

const generateTeam = (team) => {
  console.log(team);
  // create an empty array to push html elements on to and lop through the team data 
  const html = [];
  // Create functions for each type of employee that return html data 
  const generateManager = manager => {
    console.log(manager);
    let managerHtml =`
 <div class="card" style="width: 18rem;">
     </div class="card-header">
    ${manager.name} <br/>
    <i class="fas fa-mug-hot"></i>Manager</div>
    <ul class="list-group list-group-flush"></ul>
    <li class="list-group-item">ID:${manager.id}</li>
    <li class="list-group-item">Email:<span id="email"><a href=""mailto:${manager.email}">${manager.email}</a></span></li>
    <li class="list-group-item">Office Number: ${manager.Number}</li>
    </ul>
 </div>
   `;
   html.push(managerHtml);
  }
 const generateEngineer = engineer => {

   console.log(engineer);
   let engineerHtml =`
     <div class="card" style="width:18rem;">
        <div class="card-header">
        ${engineer.name} <br/>
        <i class=fas fa-glasses"></i>Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group list-group-item">ID: ${engineer.id}</li>
        <li class="list-group list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group list-group-item">Github Username: <a target"_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        >/ul>
    </div>
    `;
    html.push(engineerHtml);
 }
const generateIntern =  Intern => {
   console.log(Intern);
   let InternHtml =`
   <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${Intern.name} <br/> 
    <i class="fas fa-user-graduate"></i>Intern</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: <span id="email><a href="mailto:${Intern.email}">${Intern.email}</a></span></li>
    <li class="list-group-item">School:${Intern.school}</li>
    </ul?
  </div>
   `;
   html.push(InternHtml);
}

// Create a loop for all the employees
for(let i = 0; i < team.length;  i++){
    if(team[i].getRole() === "Manager"){
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Engineer"){
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Intern"){
        generateManager(team[i]);
    }
}
// join the HTML blocks
return html.join('');


}
// export function to generate entire page
module.exports = team => {
    return `
     <!DOCTYPE html>
     <html lang="en">
     <head>
    `
}