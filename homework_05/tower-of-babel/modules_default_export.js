import obj from './modules_default_export_math';

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(obj.PI);
console.log(obj.sqrt(+arg1));
console.log(obj.square(+arg2));
