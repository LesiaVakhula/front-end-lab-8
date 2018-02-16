function getClosestToZero () {
    var closeToZero =arguments[0];
    for(let i = 1, l = arguments.length; i < l; i++){
        if(Math.abs(arguments[i]) === Math.abs(closeToZero)){
            continue;
        }
        if(Math.abs(arguments[i]) < Math.abs(closeToZero)){
            closeToZero = arguments[i];
        }
    }
    return closeToZero
}
