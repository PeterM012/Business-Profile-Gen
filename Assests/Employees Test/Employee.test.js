const Employee = require('../Employees/Employee');
const employee = new Employee('newPerson','newID','newEmail');

test('test constructors', () => {
    expect(employee.name).toBe('newPerson');
    expect(employee.id).toBe('newId');
    expect(employee.name).toBe('newEmail');
});

test('test Name()', () => {
    expect(employee.getName()).toBe('newPerson');
});

test('test getId()', () => {
    expect(employee.getId()).toBe('newId');
});

test('test getEmail()', () => {
    expect(employee.getEmail()).toBe('newEmail');
});

test('test getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});