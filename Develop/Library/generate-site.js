                  
     //Manager-card
   const generateTeam = (team) => {
   console.log(team);
    
    const html = [];
    const generateManager = manager => {
    console.log(manager);
       let managerHtml =`
       <div class="card" style="width: 18rem;">
       <h2>${manager.name}</h2>
       <h3> ${manager.getRole()}</h3>
       <div class="list-card" style="width: 18rem;">
           <ul class="list">
               <li class="list-group-item">ID: ${manager.id} </li>
               <li class="list-group-item">Email: ${manager.email} </li>
               <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
           </ul>
         </div>
     </div>
      </div>
        `;
          html.push(managerHtml);
       }
                       
       
       //Engineer-card
       const generateEngineer = engineer => {
       console.log(engineer);
       let engineerHtml =`
       <div class="card" style="width: 18rem;">
    <h2>${engineer.name}</h2>
    <h3>${engineer.getRole()}</h3>
    <div class="list-card" style="width: 18rem;">
        <ul class="list">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
      </div>
  </div>
       `;
       html.push(engineerHtml);

}
// Intern-card
   const generateIntern = intern => {
    console.log(intern);
    let internHtml =`
    <div class="card" style="width: 18rem;">
    <h2>${intern.name}</h2>
    <h3>${intern.getRole()}</h3>
    <div class="list-card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${intern.id} </li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school} </li>
        </ul>
      </div>
  </div>
 </div>
 `;
  html.push(internHtml);
}

               
       for (let i = 0; i < team.length; i++) {
       if (team[i].getRole() === "Manager") {
       generateManager(team[i]);
       }
       if (team[i].getRole() === "Engineer") {
       generateEngineer(team[i]);
       }
      if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
            }
          }

           
            return html.join('');
  
           }



module.exports = team => {
    return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/Develop/css/bootstrap.min.css"
     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
     <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="../Develop/style.css">
    <title> Team Profile Generator </title>
</head>
<body>
    <header>
        My Team
    </header>
    <main> ${generateTeam(team)} </main>
</body>
</html>
    `;
}