function reverseNumber(num) {
    var reverseNum =Math.abs(num).toString().split('').reverse().join('');
    return (num < 0)? parseInt(reverseNum) * (-1) : parseInt(reverseNum);
}

