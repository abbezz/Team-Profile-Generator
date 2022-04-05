const Manager = require("../Library/Manager")
const testManager = new Manager('abbe','111','abbezz@live.com','8210');

test('test if we can get the constructor values for the manager object', () =>{
     expect(testManager.name).toBe('abbe');
     expect(testManager.id).toBe('111');
     expect(testManager.email).toBe('abbezz@live.com');
     expect(testManager.officeNumber).toBe('8210');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testManager.getName()).toBe('abbe');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testManager.getId()).toBe('111');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testManager.getEmail()).toBe('abbezz@live.com');

});
test('test if we can get the office number from the getOfficeNumber() method', () =>{
    expect(testManager.getOfficeNumber()).toBe('8210');

});
test('test if we can get the role from the getRole() method', () =>{
    expect(testManager.getRole()).toBe('Manager');

});