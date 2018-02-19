function cypherPhrase(object={a: 'o',c: 'd', t: 'g'}, string='kitty cat' ){
    var newStrArr,
        arrKey=[],
        arrValue=[];
    arrKey = Object.keys(object);
    for(key in object){
        arrValue.push(object[key]);
    }
    newStrArr =string.split('');
   return getTransformedArray(newStrArr,
       function (elemArr) {
            for (var i=0, l = arrKey.length; i < l; i++){
                if(elemArr=== arrKey[i]){
                    elemArr = arrValue[i];
                }
            }
        return elemArr
    }).join('');
}
console.log(cypherPhrase())