const Employee = require('../Lib/Employee');
const employee = new Employee('newPerson','newID','newEmail');

test('test constructors', () => {
    expect(employee.name).toBe('newPerson');
    expect(employee.id).toBe('newId');
    expect(employee.email).toBe('newEmail');
});

test('test getName()', () => {
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