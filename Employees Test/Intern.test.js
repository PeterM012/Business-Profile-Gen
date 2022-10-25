const Intern = require('../Lib/Intern');
const intern= new Intern('newPerson','newID','newEmail','newSchool');

test('test constructors', () => {
    expect(intern.name).toBe('newPerson');
    expect(intern.id).toBe('newId');
    expect(intern.email).toBe('newEmail');
    expect(intern.school).toBe('newSchool');
});

test('test getName()', () => {
    expect(intern.getName()).toBe('newPerson');
});

test('test getId()', () => {
    expect(intern.getId()).toBe('newId');
});

test('test getEmail()', () => {
    expect(intern.getEmail()).toBe('newEmail');
});

test('test getSchool()', () => {
    expect(intern.getOfficeNumber()).toBe('newSchool');
});

test('test getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});