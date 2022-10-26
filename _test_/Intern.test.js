//Displays the test when calling on Jest
const Intern = require('../Lib/Intern.js');
const intern= new Intern('newPerson','newId','newEmail','newSchool');

test('Tests for class input to match output', () => {
    expect(intern.getName()).toBe('newPerson');
    expect(intern.getId()).toBe('newId');
    expect(intern.getEmail()).toBe('newEmail');
    expect(intern.getSchool()).toBe('newSchool');
});
