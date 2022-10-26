//Parent class for JS properties
class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
 }
//Methods created for parents class
 getName(){
    return this.name
 }
 getId(){
    return this.id
 }
 getEmail(){
    return this.email
 }
 getRole(){
    return "Employee";
 }

}

module.exports = Employee;