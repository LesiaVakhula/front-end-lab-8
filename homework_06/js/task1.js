(function () {

    var a = Number(prompt('input length of sides a:', '')),
        b = Number(prompt('input length of sides b:', '')),
        c = Number(prompt('input length of sides c:', ''));
    var perimeter, sqrTriangle, typeTriangle,
        ab = a + b,
        ac = a + c,
        bc = b + c,
        powA = Math.pow(parseInt(a), 2),
        powB = Math.pow(parseInt(b), 2),
        powC = Math.pow(parseInt(c), 2);

    if (!(a && b && c) || ((a <= 0) || (b <= 0) || (c <= 0)) || ((a >= bc) || (b >= ac) || (c >= ab))) {
        console.log('Incorrect data');
    } else {
        perimeter = (a + b + c) / 2;
        sqrTriangle =parseFloat( Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)).toFixed(2));

        if(powA == powB + powC || powB == powA + powC || powC == powB + powA){
            typeTriangle = 'right triangle';
            if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
                typeTriangle += ' and Isosceles';
            }
        } else if (a == b && b == c) {
            typeTriangle = 'Equilateral';
        } else if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
            typeTriangle = 'Isosceles';
        } else if (a != b && b != c && a != c) {
            typeTriangle = 'Scalene';
        }
        console.log('Type of triangle is ' + typeTriangle + ' and square is ' + sqrTriangle);
    }
})();