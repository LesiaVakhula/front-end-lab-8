function* flat (arr) {
    if (arr instanceof Array) {
        for (let i = 0, l = arr.length; i < l; i++) {
            yield * flat(arr[i]);
        }
    } else {
        yield arr;
    }
};

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}