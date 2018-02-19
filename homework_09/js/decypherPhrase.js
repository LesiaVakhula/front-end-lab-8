function decypherPhrase(object = {a: 'o', c: 'd', t: 'g'}, str ='kiggy dog') {
    var reverseObject = {};
    for(key in object){
        reverseObject[object[key]] = key;
    }
    return cypherPhrase(reverseObject,str);
}
console.log(decypherPhrase());