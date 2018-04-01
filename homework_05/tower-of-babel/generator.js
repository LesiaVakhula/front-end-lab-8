const max = +process.argv[2];

let FizzBuzz = function* (val) {
    for(let i=1; i<=val; i++){
        if (i % 15 === 0) {
            yield 'FizzBuzz';
        } else if (i % 3 === 0) {
            yield 'Fizz';
        } else if (i % 5 === 0) {
            yield 'Buzz';
        } else {
            yield i;
        }
    }
}(max);

for (var n of FizzBuzz) {
    console.log(n);
}