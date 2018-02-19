function decypherPhrase(object,str) {
    var reverseObject = {};
    for(key in object){
        reverseObject[object[key]] = key;
    }
    return cypherPhrase(reverseObject,str);
}