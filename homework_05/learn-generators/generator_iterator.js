function *factorial(n){
    let fact=1;
    for(let i = 1; i <= n; i++){
        fact *=i;
        yield fact;
    }
};

for (var n of factorial(5)) {
    console.log(n)
};