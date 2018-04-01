function *upper (items) {
    for (let i = 0, l = items.length; i < l; i++) {
        try {
            let val = items[i].toUpperCase();
            yield val;
        } catch (e) {
            yield null;
        }
    }
};


var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
};