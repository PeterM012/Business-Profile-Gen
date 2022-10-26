//Displays the test when calling on Jest
const Manager = require('../Lib/Manager.js');
const manager= new Manager('newPerson','newId','newEmail','newOfficeNumber');

test('Tests for class input to match output', () => {
    expect(manager.getName()).toBe('newPerson');
    expect(manager.getId()).toBe('newId');
    expect(manager.getEmail()).toBe('newEmail');
    expect(manager.getOfficeNumber()).toBe('newOfficeNumber');
});

