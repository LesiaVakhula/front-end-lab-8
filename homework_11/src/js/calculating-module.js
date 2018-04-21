export default function (num1, num2, operation) {
    let result = 0;
    if(!Number(num1) || !Number(num2)){
        result = 'error';
        return result;
    }
    switch (operation){
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    };
    return result;
};