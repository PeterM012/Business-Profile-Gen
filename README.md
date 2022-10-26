# Business-Profile-Gen

## Video Link
https://drive.google.com/file/d/1qaOI2iJRnSTS9CNvqa9LfrSGVCky2_Ss/view

## Technologies Used
- JS - Used to create interactions and animations on webpage
- Node JS - Run Code outside browser and add in additional modules

## To Do
- Give a command-line application that accepts user input
- Prompt for information about application repository
- Generate a high-quality, professional README.md with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- Enter project title display as the title of the README
- Enter a description, installation instructions, usage information, contribution guidelines, and test instructions information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- Choose a license for application from a list of options add a badge for that license near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- Enter GitHub username added to the section of the README entitled Questions, with a link to GitHub profile
- Enter email address this is added to the section of the README entitled Questions, with instructions on how to reach with additional questions
- Click on the links in the Table of Contents taken to the corresponding section of the README


## Summary 
This project was to create a Professional README.md using Node.JS . To begin this task I had to spend some time reading different articles such as how to download modeules and format a README. After reviewing the material I was going to need I utilizing Node.JS and Package-lock.JSON to execute what was needed. In order to complete this task I had to use the starter code given. I used node index.js to make sure my code stayed true and prompt users. During my research I discovered how to use the generateMarkdown package in order to format a README properly. I felt the most challenging task to overcome for this task was understanding how to read the starter code and use it to execute this assignment. Something that I took away from this was how you can really personalize a read me and make it look professional. I feel at the end of this I have achieved a better node.js. Below is my code for the function that excutes the README.md.

## Code Snippet
JS
```js
// Creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// Creates a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
    var file = "README.md"
    var markDown = genMD.generateMarkdown(response)
    writeToFile(file,markDown)      
    });
}

// Function call to initialize app
init();
```
