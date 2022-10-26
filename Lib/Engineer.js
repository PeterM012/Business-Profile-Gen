//Child class for JS properties
const Employee = require('./Employee.js');

//Methods created for child class
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
    super(name,id,email);
    this.gitHub = gitHub;
 }
    getGithub(){
        return this.gitHub;
    }
     getRole(){
        return "Engineer";
    }
    
}

module.exports = Engineer;