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

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.bonus + employee.salary;
            }
            else {
                return total + employee.salary;
            }
        }, 0);
    }
}

// add employees to department
const Engineering = new Department("Engineering");


Engineering.addEmployee(alice);
// calculating department salaries


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
Engineering.addEmployee(robert);
// Task 4: Handle Bonuses for Managers
// added the calculateTotalSalaryWithBonus() to Task 2
/*
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

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.bonus + employee.salary;
            }
            else {
                return total + employee.salary;
            }
        }, 0);
    }
}
    */
console.log(`Engineering department total Salary: $${Engineering.getDepartmentSalary()}`);
console.log(`Engineering Department total salary bonus: $${Engineering.calculateTotalSalaryWithBonus()}`);

// Task 5: Create and Manage Departments and Employees
// From lines 118-125, those commented out have already been created before for test cases. These below are for demo purpose
// const Engineering = new Department("Engineering");
const Marketing = new Department("Marketing");
// const alice = new Employee("Alice", 80000, "Developer", "Engineering");
// const bob = new Employee("Bob", 75000, "Designer", "Marketing");
// const robert = new Manager("Robert", 300000, "Lead Manager", "Engineering", 20000);
const sara = new Manager("Sara", 400000, "Marketing Manager", "Marketing", 40000);
// Engineering.addEmployee(robert);
// Engineering.addEmployee(alice);
// adding employees for marketing dep. 
Marketing.addEmployee(bob);
Marketing.addEmployee(sara);
// display dep. salary for engineering and marketing
console.log(`Total Engineering Salary: $${Engineering.getDepartmentSalary()}`);
console.log(`Total Marketing Salary: $${Marketing.getDepartmentSalary()}`);
// display dep. salary with bonus for engineering and marketing
console.log(`Total Engineering Salary With Bonus: $${Engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total Marketing Salary With Bonus: $${Marketing.calculateTotalSalaryWithBonus()}`);
// display total company salary for engineering and marketing dep.
const totalCompanySalary = Engineering.getDepartmentSalary() + Marketing.getDepartmentSalary();
// display total company salary with bonus for engineering and marketing dep.
const totalCompanySalaryWithBonus = Engineering.calculateTotalSalaryWithBonus() + Marketing.calculateTotalSalaryWithBonus();
// display company wide new structure and updated calculation with bonus for all employees in the company
console.log("Company Wide New Structure Totals:");
console.log(`Total Company Salary: $${totalCompanySalary}`);
console.log(`Total Company Salary With Bonus: $${totalCompanySalaryWithBonus}`);

