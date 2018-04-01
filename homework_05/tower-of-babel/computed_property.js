var evenOrOdd = +process.argv[2];
var sum = +process.argv[3] + evenOrOdd;
var obj = {};

obj[((num)=>num % 2 === 0 ? "even" : "odd")(evenOrOdd)] = evenOrOdd;
obj[((sum, num)=>+sum + num)(process.argv[3],evenOrOdd)] = sum;
console.log(obj);