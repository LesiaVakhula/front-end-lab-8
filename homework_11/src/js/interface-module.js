export default function () {
    let mainDiv = document.createElement('div');
    let inputDiv = document.createElement('div');
    let buttonDiv = document.createElement('div');
    let inputFirst = document.createElement('input');
    let inputSecond = document.createElement('input');
    let result = document.createElement('p');
    let p = document.createElement('p');
    let buttonOperation = ['+','-','/','*'];
        inputFirst.setAttribute('placeholder','enter number');
        inputFirst.id = 'input-first';
        inputSecond.setAttribute('placeholder','enter number');
        inputSecond.id ='input-second';
        result.id = 'result';
        p.innerHTML = '<span>Result: </span>';
        for(let i = 0, l = buttonOperation.length; i < l; i++){
            let button = document.createElement('button');
            button.className = 'btn-operation';
            button.innerHTML = buttonOperation[i];
            buttonDiv.appendChild(button);
        };
        mainDiv.className = 'main';
        inputDiv.className = 'main-input';
        buttonDiv.className = 'main-button';
        inputDiv.appendChild(inputFirst);
        inputDiv.appendChild(inputSecond);
        mainDiv.appendChild(inputDiv);
        mainDiv.appendChild(p);
        mainDiv.appendChild(result);
        mainDiv.appendChild(buttonDiv);
        document.body.appendChild(mainDiv);
}