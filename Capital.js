
let str = ["rana","jhumka","giraffe"];

let newString = str.map((str)=>str.toUpperCase());

console.log(newString);

// 10. Array of objects of book
let books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        title: "1984",
        author: "George Orwell"
    }
];

// Remove the second book
books.splice(1, 1);

console.log(books);

// 11. Sorting an array of strings
let strings = ["watermelon", "kiwi", "strawberry", "blueberry", "pineapple"];
strings.sort();
console.log(strings);

// 12. Filtering an array
let fruits = ["Mango", "Melon", "Papaya", "Pineapple", "Peach", "Pomegranate"];
let filteredArray = fruits.filter(fruit => fruit.startsWith('P'));
console.log(filteredArray);

// 13. Map to extract ages
let students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 23 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 22 }
];
let ages = students.map(student => student.age);
console.log(ages);
