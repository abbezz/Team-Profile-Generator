const Employee = require ('../Library/Employee');
const testEmployee = new Employee('David756@hotmail.com', '555','David756@hotmail.com');

test ('test if we can get the constructor for the employee object', () =>{
       expect(testEmployee.id).toBe('555');
       expect(testEmployee.email).toBe('David756@hotmail.com');

});

test('test if we can get the name from the getName()method',() => {
      expect(testEmployee.getName()).toBe('David756@hotmail.com');

});

test('test if we can get the id from the getId()method',() => {
      expect(testEmployee.getId()).toBe('555');

});

test('test if we can get the email from the getEmail()method',() => {
      expect(testEmployee.getEmail()).toBe('David756@hotmail.com');

});

test('test if we can get the role from the getName()method',() => {
      expect(testEmployee.getRole()).toBe('Employee');

});