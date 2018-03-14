function debounce(callback, delay) {
    let td = Date.now();
    let timeoutId = null;
    return function () {
        let applyFunction =function () {
            callback();
            timeoutId = null;
            console.log(Date.now()- td);
        };
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId=setTimeout(applyFunction, delay);
    }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'