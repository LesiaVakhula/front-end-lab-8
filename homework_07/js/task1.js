var num = Number(prompt('natural number from 1 to 20', ''));
var str, emptyStr, strArr,
    result = '',
    arr = [],
    n = '\n';

if (Number.isInteger(num) && (num > 0 && num <= 20)) {

    for (let i = 0; i < num; i++) {

        str = '';
        emptyStr = '';

        for (let j = 1; j < num - i; j++) {
            emptyStr += '   ';
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            str += '[~]';
        }
        result += emptyStr + str + n;
    }
    console.log(result);
} else {
    console.log('Incorrect!');
}

//--------------

if (Number.isInteger(num) && (num > 0 && num <= 20)) {

    for (let i = 0; i < num; i++) {
        for (var j = 1; j < num - i; j++) {
            arr.push('   ');
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            arr.push('[~]');
        }
        arr.push('\n');
    }
    strArr = arr.join('');
    console.log(strArr);
} else {
    console.log('Incorrect!');
}