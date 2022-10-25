const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');

function generateHTML(members) {


let output = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Profile GenPro</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-danger text-white text-center fs-1 fw-bold"> My Team </div>
  <div class="row row-cols-1 row-cols-md-3 p-5 g-4 gap-5 row justify-content-center">
  `

for(const member of members) {
  output +=
  `<div class="card border-dark shadow bg-body rounded" style="max-width: 18rem;">
    <h2 class="card-header text-white text-bg-primary p-3">${member.getName()}</h2>
    <h3 class="text-white text-bg-primary p-3 fw-light">${member.getRole()}</h3>
    <ul class="card list-group list-group-flush p-3">
    <li class="list-group-item">ID: ${member.getId()}</li>
    <li class="list-group-item">Email: <a href="${member.getEmail()}">${member.getEmail()}</a></li>
    `

  output += (member instanceof Manager) ?
   `<li class="list-group-item">Office Number:${member.getOfficeNumber()}</li>
   `
   : ``;
    
  output += (member instanceof Engineer) ?
   `<li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></li>
   `
  : ``;

  output += (member instanceof Intern) ?
   `<li class="list-group-item">School: ${member.getSchool()}</li>
   `
  : ``;

  output += 
   `</ul>
  </div>
  `
}

output += 
`</div>
</body>
</html>`;

console.log(output);

fs.writeFile('./dist/index.html', output, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
);
}

async function PromptUserInput() {
  let members = [];

  await inquirer.prompt([
    {
      name: 'name',
      message: 'What is your Full name?',
    },
    {
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      name: 'email',
      message: 'What is your email?',
    },
    {
      name: 'officeNumber',
      message: 'What is your officeNumber?',
    },
  ])

  .then(async function (answers) {
    members.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    let newEmployees = true;

    while (newEmployees) {
      await inquirer.prompt([
        {
          type: "list",
          message: "add new employee",
          name: "jason",
          choices: ["Engineer", "Intern", "no"]
        }      
      ]).then(async function(response) {
        if (response.jason === "no"){
          newEmployees = false;
        } else if(response.jason === "Engineer") {
          await inquirer.prompt([
            {
              name: 'name',
              message: 'What is your Full name?',
            },
            {
              name: 'id',
              message: 'What is your ID number?',
            },
            {
              name: 'email',
              message: 'What is your email?',
            },
            {
              name: 'gitHub',
              message: 'What is your Github username?',
            },
          ]).then(async function(response) {
            members.push(new Engineer(response.name, response.id, response.email, response.gitHub));  
          });
        } else if(response.jason === "Intern") {
          await inquirer.prompt([
            {
              name: 'name',
              message: 'What is your Full name?',
            },
            {
              name: 'id',
              message: 'What is your ID number?',
            },
            {
              name: 'email',
              message: 'What is your email?',
            },
            {
              name: 'school',
              message: 'What school did you go to?',
            },
          ]).then(async function(response) {
            members.push(new Intern(response.name, response.id, response.email, response.school));  
          });
        }
      })
    }
    generateHTML(members);
  });
}

PromptUserInput();
