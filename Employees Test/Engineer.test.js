const Engineer = require('../Lib/Engineer');
const engineer= new Engineer('newPerson','newID','newEmail','newGitHub');

test('test constructors', () => {
    expect(engineer.name).toBe('newPerson');
    expect(engineer.id).toBe('newId');
    expect(engineer.email).toBe('newEmail');
    expect(engineer.gitHub).toBe('newGitHub');
});

test('test getName()', () => {
    expect(engineer.getName()).toBe('newPerson');
});

test('test getId()', () => {
    expect(engineer.getId()).toBe('newId');
});

test('test getEmail()', () => {
    expect(engineer.getEmail()).toBe('newEmail');
});

test('test getGithub()', () => {
    expect(engineer.getOfficeNumber()).toBe('newGitHub');
});

test('test getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});