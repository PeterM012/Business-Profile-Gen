//Displays the test when calling on Jest
const Employee = require('../Lib/Employee.js');
const employee = new Employee('newPerson','newId','newEmail');

test('Tests for class input to match output', () => {
    expect(employee.getName()).toBe('newPerson');
    expect(employee.getId()).toBe('newId');
    expect(employee.getEmail()).toBe('newEmail');
    expect(employee.getRole()).toBe('Employee');
});

