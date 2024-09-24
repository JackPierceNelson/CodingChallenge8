// Task 1: Create an Employee Class
class Employee {
    constructor( name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.deparment = department;
    }
    getDetails() {
        return `${this.name} - ${this.position} - $${this.salary}`;
    }
}
// create employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
// extracting employee details
console.log(alice.getDetails());
console.log(bob.getDetails());

// Task 2: Create a Department Class
class Department {
    // initializing the department with a name and an empty array for employees
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    // add an employee object to the employees array
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }
        // checking to ensure the valid employee objects are added
        else {console.error("Invalid employee object");}
    }
    // returns the total salary of all employees in the department and reduce method would sum up all employee salaries
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0); 
    }
}
// add employees to department
const Engineering = new Department("Engineering");
Engineering.addEmployee("Jack");
Engineering.addEmployee(alice);
// calculating department salaries
console.log(`Engineering department total Salary: $${Engineering.getDepartmentSalary()}`);

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    // Used super to call the employee constructor with base properties
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); 
        // adding the bonus property specific to managers
        this.bonus = bonus;
    }
    // overiding the getDetails method in the parent class using super.getDetails
    // appending the bonus info to the string for the manager
    getDetails() {
        return `${super.getDetails()} - Bonus: $${this.bonus}`;
    }

}
// test case
const robert = new Manager("Robert", 300000, "Lead Manager", "Engineering", 20000);
console.log(robert.getDetails());

