(function () {
    var euro = Number(prompt('input amount of EURO:', '')),
        usd = Number(prompt('User input amount of USD:', '')),
        one_euro = 33.8565,
        one_usd = 27.4609,
        strResult = euro + ' euros are equal ';
    var euro_uah,
        usd_uah,
        euro_usd;

    if(euro && euro >= 0){
        euro_uah = (euro * one_euro).toFixed(2);
        strResult += euro_uah + ' UAH, ';
    } else{
        strResult = 'input EURO - Incorrect data, ';
    }

    if(usd && usd >= 0){
        usd_uah = (usd * one_usd).toFixed(2);
        strResult += usd + ' dollars are equal ' + usd_uah + ' UAH';
    } else{
        strResult +=' input USD - Incorrect data';
    }

    euro_usd = (one_euro/one_usd).toFixed(2);
    strResult += ', one euro is equal ' + euro_usd + ' dollars';

    console.log(strResult);
})();