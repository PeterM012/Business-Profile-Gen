const Employee = require('../Employees/Employee');
const employee = new Employee('newPerson','newID','newEmail');

test('test constructors'), () => {
    expect(employee.name).toBe('newPerson');
    expect(employee.id).toBe('newId')
    expect(employee.name).toBe('newEmail');
}