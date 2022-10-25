const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Employee.js');

function generateHTML(members) {
  // fs.writeFile('index.html', htmlPageContent, (err) =>
  //   err ? console.log(err) : console.log('Successfully created index.html!')
  // );

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Profile GenPro</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
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