const Intern = require("../Library/Intern")
const testIntern = new Intern('abbe','07878','abbezz@live.com','Birmingham');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(testIntern.name).toBe('abbe');
     expect(testIntern.id).toBe('07878');
     expect(testIntern.email).toBe('abbezz@live.com');
     expect(testIntern.school).toBe('Birmingham');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testIntern.getName()).toBe('abbe');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testIntern.getId()).toBe('07878');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testIntern.getEmail()).toBe('abbezz@live.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(testIntern.getSchool()).toBe('Birmingham');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(testIntern.getRole()).toBe('Intern');

});