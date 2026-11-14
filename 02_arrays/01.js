//Arrays
const arr = [1,2,3,4];
console.log(arr[1]);

//Array methods
console.log(arr.length);

arr.push(5); // Add element at the end
console.log(arr);
arr.pop(); // Remove element at the last
console.log(arr);
arr.unshift(0); // Add elements at the front
console.log(arr);

arr.shift(); // Remove element from front
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(9)); // If not exist , -1 is returned


const newArr = arr.join();
console.log(newArr);
console.log(typeof newArr);

//slice and splice

console.log("A ",arr);
const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("B ",arr);


const myn2 = arr.splice(1,3);
console.log(arr);
console.log(myn2);