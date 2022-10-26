//Child class for JS properties
const Employee = require('./Employee.js');

//Methods created for child class
class Intern extends Employee {
    constructor(name, id, email, school){
    super(name,id,email);
    this.school = school;
 }
    getSchool(){
        return this.school;
    }
     getRole(){
        return "Intern";
    }
    
}

module.exports = Intern;