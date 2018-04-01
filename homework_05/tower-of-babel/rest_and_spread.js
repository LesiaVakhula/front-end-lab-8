var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
    if(val !== '') args.push(+val);
    });
});

function avg(...rest){
    return rest.reduce((sum,val)=>sum+val)/rest.length;
}


console.log(avg(...args));