function getFilteredArray(arr,func) {
    var newArr =[];
    forEach(arr,function(elemArr) {
        if(func(elemArr)){
            newArr.push(elemArr);
        }
    });
    return newArr
}
