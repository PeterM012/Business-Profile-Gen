//Displays the test when calling on Jest
const Engineer = require('../Lib/Engineer.js');
const engineer= new Engineer('newPerson','newId','newEmail','newGitHub');

test('test constructors', () => {
    expect(engineer.getName()).toBe('newPerson');
    expect(engineer.getId()).toBe('newId');
    expect(engineer.getEmail()).toBe('newEmail');
    expect(engineer.getGithub()).toBe('newGitHub');
});

