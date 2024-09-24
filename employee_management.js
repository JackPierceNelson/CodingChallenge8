// Task 1: Create an Employee Class
class employee {
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
const alice = new employee("Alice", 80000, "Developer", "Engineering");
const bob = new employee("Bob", 75000, "Designer", "Marketing");
// extracting employee details
console.log(alice.getDetails());
console.log(bob.getDetails());