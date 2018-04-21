import createPage from './interface-module';
import calculator from './calculating-module';
import "../styles/styles.css";


createPage();
let buttons = document.getElementsByClassName('btn-operation');
let inputFirst = document.getElementById('input-first');
let inputSecond = document.getElementById('input-second');
let result = document.getElementById('result');
    for(let i=0, l=buttons.length; i<l;i++){
        buttons[i].addEventListener('click',function (e) {
        let first = inputFirst.value;
        let second = inputSecond.value;
        let operation = e.target.innerHTML;
            result.innerHTML = calculator(first,second,operation);
        })
    }

