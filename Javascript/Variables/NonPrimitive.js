/*
Non Primitive Datatype is used to store value more then one value. like array, object etc.
1. Array
2. Object
3. Function

An Object stores key-value pairs — like a form with labeled fields.
Each piece of data has a name (key) and a value.
Real-Life Analogy
An employee ID card:
• Name: John Doe
• Department: Engineering
• Salary: 85000

*/
let Details={
    name:'Akshay',
    lastName:'Kamble',
    age:30,
    company:'Capgemini',
    isEmployedActive :true
}
console.log("Details object value is:",Details); // Output: { name: 'Akshay', lastName: 'Kamble', age: 30, company: 'Capgemini', isEmployedActive: true }

// Accessing object properties
console.log("Name from Details object is:",Details.name); // Output: Akshay
console.log("Company from Details object is:",Details['company']); // Output: Capgemini

// Modifying object properties
Details.age = 31;
console.log("Updated age in Details object is:",Details.age); // Output: 31

// Adding new property to the object
Details.department = 'Engineering';
console.log("Added department in Details object is:",Details.department); // Output: Engineering
delete Details.isEmployedActive; // Deleting a property from the object
console.log("Details object after deleting isEmployedActive property:",Details); // Output: { name: 'Akshay', lastName: 'Kamble', age: 31, company: 'Capgemini', department: 'Engineering' }