function getMin() {
    let min=0;
    for (let i=0, l=arguments.length; i < l; i++){
        if(arguments[i]<min){
            min=arguments[i]
        }
    }
    return min
}

