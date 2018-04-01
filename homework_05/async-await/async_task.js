const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (triggerFail) {
            reject(false);
            return;
        }
        resolve(true);
    }, msec);
    });
};

const asyncFn = async () => {
    const result = await waitFewSec(1000);
    return result;
};

async function doAsyncMagic(){
    let arr = [];
    for(let i=0; i < 4; i++){
        try{
            let res = await asyncFn();
            arr.push(res);
        }catch (e){
            arr.push(e);
        }

    }
    console.log(arr);
    return arr;
};

doAsyncMagic();// [true, true, true, true]

async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
        yield i;
    }
};

async function  iterateRange () {
    let sum = 0;
    for await(let value of rangeGen()){
        sum+=value;
    };
    console.log(sum);
    return sum;
};

iterateRange(); // Promise {<resolved>: 120}
console.log(iterateRange()); // Promise {<resolved>: 120}

