function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
}

