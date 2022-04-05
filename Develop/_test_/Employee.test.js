const Employee = require ('../Library/Employee');
const testEmployee = new Employee('abbe', '07878','abbezz@live.com');

test ('test if we can get the constructor values for the employee object', () =>{
       expect(testEmployee.name).toBe('abbe');
       expect(testEmployee.id).toBe('07878');
       expect(testEmployee.email).toBe('abbezz@live.com');

});

test('test if we can get the name from the getName()method',() => {
      expect(testEmployee.getName()).toBe('abbezz@live.com');

});

test('test if we can get the id from the getId()method',() => {
      expect(testEmployee.getId()).toBe('07878');

});

test('test if we can get the email from the getEmail()method',() => {
      expect(testEmployee.getEmail()).toBe('abbezz@live.com');

});

test('test if we can get the role from the getName()method',() => {
      expect(testEmployee.getRole()).toBe('Employee');

});