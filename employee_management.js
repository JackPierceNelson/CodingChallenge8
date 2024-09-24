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
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }
        else {console.error("Invalid employee object");}
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0); 
    }
}
// add employees to department
const Engineering = new Department("Engineering");
Engineering.addEmployee("Jack");
Engineering.addEmployee(alice);
console.log(`Engineering department total Salary: $${Engineering.getDepartmentSalary()}`);