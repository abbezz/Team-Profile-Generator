const Engineer = require("../Library/Engineer")
const testEngineer = new Engineer('abbezz','7777','abbezz@live.com','abbezz');

test('test if we can get the constructor values for the engineer object', () =>{
     expect(testEngineer.name).toBe('abbezz');
     expect(testEngineer.id).toBe('7777');
     expect(testEngineer.email).toBe('abbezz@live.com');
     expect(testEngineer.githubUsername).toBe('abbezz');

});

test('test if we can get the name from the getName() method', () =>{
     expect(testEngineer.getName()).toBe('abbezz');

});
test('test if we can get the id from the getId() method', () =>{
    expect(testEngineer.getId()).toBe('7777');

});
test('test if we can get the email from the getEmail() method', () =>{
    expect(testEngineer.getEmail()).toBe('abbezz@live.com');

});
// test('test if we can get the office number from the getOfficeNumber() method', () => {
// //    expect(testEngineer.getSchool()).toBe('Birmingham');

// });
test('test if we can get the role from the getRole() method', () =>{
    expect(testEngineer.getRole()).toBe('Engineer');

});