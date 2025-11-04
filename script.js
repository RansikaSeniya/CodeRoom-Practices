// ------map() Tasks------

// 1. Convert all names to uppercase
const names = ["Asha", "Ravi", "Kamal"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

// Add 10% discount to all prices
const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9);
console.log(discounted);

// 3. Show student name with marks
const students = [
  { name: "Asha", marks: 75 },
  { name: "Ravi", marks: 88 }
];

const newArr = students.map(s => `${s.name}: ${s.marks} marks`);
console.log(newArr);

// ------filter() Tasks------

// 4. Get adults (age ≥ 18)
const ages = [12, 18, 20, 15];
const adults = ages.filter(age => age >= 18);
console.log(adults);

// 5. Students scoring above 50
const marks = [45, 67, 92, 33];
const passed = marks.filter(m => m > 50);
console.log(passed);

// 6. Products in stock
const products = [
  { name: "Pen", inStock: true },
  { name: "Book", inStock: false }
];

const inStockItems = products.filter(p => p.inStock);
console.log(inStockItems);

// ------find() & findIndex() Tasks------

// 7. Find student named "Ravi"
const students2 = ["Asha", "Ravi", "Kamal"];
const ravi = students2.find(n => n === "Ravi");
console.log(ravi);

// 8. Find first mark below 50 & its index
const marks2 = [65, 45, 80, 30];
const below50 = marks2.find(m => m < 50);
const index = marks2.findIndex(m => m < 50);
console.log(below50, index);

// 9. Find product with id = 3
const products2 = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Notebook" },
  { id: 3, name: "Mouse" },
  { id: 4, name: "Keyboard" }
];

const item = products2.find(p => p.id === 3);
console.log(item);

// ------includes() Tasks------

// 10. Check if "Asha" exists
const names2 = ["Asha", "Ravi", "Kamal"];
console.log(names2.includes("Asha"));

// 11. Check if 10 exists
const nums = [5, 10, 15, 20];
console.log(nums.includes(10));

// 12. Check if "red" is included
const colors = ["blue", "yellow" , "red", "green"];
console.log(colors.includes("red"));

// ------Method Chaining Tasks------

// 13. Students above 50 , names , sort & check "Ravi"
const students3 = [
  { name: "Asha", marks: 75 },
  { name: "Ravi", marks: 40 },
  { name: "Kamal", marks: 90 }
];

const result = students3
  .filter(s => s.marks > 50)
  .map(s => s.name)
  .sort();

console.log(result);
console.log(result.includes("Ravi"));

// 14. Products in stock , under 200 , show names & check "Keyboard"
const items = [
  { name: "Mouse", price: 150, inStock: true },
  { name: "Keyboard", price: 450, inStock: true },
  { name: "Pen", price: 50, inStock: false }
];

const finalResult = items
  .filter(i => i.inStock)
  .filter(i => i.price < 200)
  .map(i => i.name);

console.log(finalResult);
console.log(finalResult.includes("Keyboard"));
