function getTransformedArray(arr,funcTransf) {
    var newArr = [];
       forEach(arr, function (elemArr) {
           newArr.push(funcTransf(elemArr));
       });

    return newArr
}
