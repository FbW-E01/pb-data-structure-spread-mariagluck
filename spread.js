// ### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

const euroCountries = ["Paris", "Madrid", "London", "Berlin"];
const asianCountries = ["Beijing", "Tokio", "Yakarta", "Seul"];


euroCountries.push(asianCountries);
console.log(euroCountries);
//it prints: 
// [
//     'Paris',
//     'Madrid',
//     'London',
//     'Berlin',
//     [ 'Beijing', 'Tokio', 'Yakarta', 'Seul' ]
//   ]

const array1 = ["aa", "bb", "cc"];
const array2 = ["dd", "ee", "ff"];
const newArray = [[array1] +  [array2]];
console.log(newArray); //it prints [ 'aa,bb,ccdd,ee,ff' ]


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
const coolArray = ["hola", "hey", "ciao"];
const copyWithSpread = [...coolArray];
copyWithSpread.push("hallo");
console.log(coolArray);//original array stays the same
console.log(copyWithSpread);//copy changed

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

const arrayOfNumbers = [19, 252, 517, 209, 134, 8, 33, 4, 77];

const LargestNumber = array => Math.max(...arrayOfNumbers);

console.log(LargestNumber(arrayOfNumbers));//it prints 517

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

const arrayOfNum = [19, 252, 517, 209, 134, 8, 33, 4, 77];

const smallestNumber = array => Math.min(...arrayOfNum);

console.log(smallestNumber(arrayOfNum));//it prints 4


// #### 5. Clone and Merge
// * 5.1 Clone the person object.

const person = {name: "John"};
const job = {role: "Teacher"};
const clonedPerson = person;
console.log(clonedPerson == person);//true
console.log(clonedPerson === person);//true
//but if ..WE CHANGE the cloned object the person object also changes
clonedPerson.name = "Suzanne";
console.log(person);//it has changed : it prints { name: 'Suzanne' }
console.log(clonedPerson);// it prints { name: 'Suzanne' }

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
const employee = {...person, job };

console.log(employee);// it prints { name: 'John', role: 'Teacher' }
//console.log(person); it prints { name: 'John' } so has not changed
//console.log(job); it prints { role: 'Teacher' } so has not changed

// * 5.3 Then change the values of the properties in the employee object.

employee.role = "designer";
employee.name = "Lola";

console.log(person);//it doesnt change again and prints: { name: 'Suzanne' }
console.log(employee);//it prints { name: 'Lola', job: { role: 'Teacher' }, role: 'designer' }



// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
 

const isWhole = (num1, num2, num3, num4) => {
    const average = (num1 + num2 + num3 + num4) / 4;
    if (Number.isInteger(average)) {
        return true;
    } else {
        return false;
    }
}
console.log(isWhole(1, 2, 3, 4));//it prints false
console.log(isWhole(9, 2, 2, 5));// it prints false
console.log(isWhole(1, 7, 10, 2));// it prints true

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

const arrayNumbers = [1, 7, 10, 2];
console.log(isWhole(...arrayNumbers));//true
console.log(isWhole(arrayNumbers));//like this it will print wrongly the result so false