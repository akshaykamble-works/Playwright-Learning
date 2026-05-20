/*
 write a program to create a details form using function and print the details in console.  


*/

function Details(name, lastName, age, company, isEmployedActive) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.company = company;
    this.isEmployedActive = isEmployedActive;
}

let detailsForm = new Details('Akshay', 'Kamble', 30, 'Capgemini', true);
console.log("Details form value is:", detailsForm); // Output: Details form value is: Details { name: 'Akshay', lastName: 'Kamble', age: 30, company: 'Capgemini', isEmployedActive: true }

// Accessing details form properties
console.log("Name from details form is:", detailsForm.name); // Output: Akshay
console.log("Company from details form is:", detailsForm['company']); // Output: Capgemini

// Modifying details form properties
detailsForm.age = 31;
console.log("Updated age in details form is:", detailsForm.age); // Output: 31

// Adding new property to the details form
detailsForm.department = 'Engineering';
console.log("Added department in details form is:", detailsForm.department);
console.log("================================================================"); // Output: Added department in details form is: Engineering
// Example 2:
 function UserDetails()
 {
    return{
        name:'Akshay',
        age:30,
        company:'Capgemini',
        isEmployedActive :true
    }
 }
 let userDetailsForm = UserDetails();
 console.log("User details form value is:", userDetailsForm); // Output: User details form value is: { name: 'Akshay', age: 30, company: 'Capgemini

 // Example 3:
 function fruiteDetails()
 {
    return['Apple', 'Banana', 'Cherry'];
    
 }
 let fruiteDetailsForm = fruiteDetails();
 console.log("Fruite details form value is:", fruiteDetailsForm); // Output: Fruite details form value is: ['Apple', 'Banana', 'Cherry']
 console.log("================================================================");