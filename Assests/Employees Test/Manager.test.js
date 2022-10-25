const Manager = require('../Employees/Manager');
const manager= new Manager('newPerson','newID','newEmail','newOfficeNumber');

test('test constructors', () => {
    expect(manager.name).toBe('newPerson');
    expect(manager.id).toBe('newId');
    expect(manager.name).toBe('newEmail');
    expect(manager.name).toBe('newOfficeNumber');
});

test('test getName()', () => {
    expect(manager.getName()).toBe('newPerson');
});

test('test getId()', () => {
    expect(manager.getId()).toBe('newId');
});

test('test getEmail()', () => {
    expect(manager.getEmail()).toBe('newEmail');
});

test('test getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('newOfficeNumber');
});

test('test getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

