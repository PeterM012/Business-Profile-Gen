//Child class for JS properties
const Employee = require('./Employee.js');

//Methods created for child class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
    }
    
}

module.exports = Manager;