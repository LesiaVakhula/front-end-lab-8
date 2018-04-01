const max = +process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let start = 1;
        let i;
        return {
            next() {
                if (start > max) {
                    return {done: true, value:undefined};
                }

                i = start;
                if (i % 15 === 0) {
                    i = 'FizzBuzz';
                } else if (i % 3 === 0) {
                    i = 'Fizz';
                } else if (i % 5 === 0) {
                    i = 'Buzz';
                }
                start++;
                return {done: false, value: i};
            }
        }
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}