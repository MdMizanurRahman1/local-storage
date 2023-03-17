// Store a value in local storage
localStorage.setItem('name', 'John');

// Retrieve the value from local storage
const name = localStorage.getItem('name');
console.log(name); // Output: "John"

// Store an object in local storage
const person = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};
localStorage.setItem('person', JSON.stringify(person));

// Retrieve the object from local storage
const storedPerson = JSON.parse(localStorage.getItem('person'));
console.log(storedPerson.name); // Output: "John"
console.log(storedPerson.age); // Output: 30
console.log(storedPerson.email); // Output: "john@example.com"

// Store a value in local storage
localStorage.setItem('name', 'John');

// Remove the value from local storage
localStorage.removeItem('name');
