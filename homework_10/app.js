class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

class Decorator{
    constructor (object){
        this.placeHolder = object.placeHolder;
        this._value = object._value;
        this.type = object.type;
    }
    verify(val){
        this.valid = val;
    }
};

class AddRequiredValidation extends Decorator {
    constructor(object) {
        super(object);
        if (object.value === '' || object.value === undefined) {
            super.verify(false);
            console.log(`Ooops. You\`ve set incorrect type of value. Valid:  ${this.valid}`);
        } else {
            super.verify(true);
            console.log(`You\`ve set correct value. Valid: ${this.valid}`);
            }
    }
};

class AddMaxLengthValidation extends Decorator{
    constructor (object, maxValueLength){
        super(object);
        let val = object._value;
        if(String(val).length > maxValueLength){
            super.verify(false);
            console.log(`Too large value length. Valid: ${this.valid}`);
        }else{
            super.verify(true);
            console.log(`Good value length. Valid: ${this.valid}`);
        }
    };

};

class AddNumberValidation extends Decorator{
    constructor (object){
        super(object);
        console.log(object.valid + '----');
        if(typeof this.value === this.type){
            this.valid = true;
            console.log(`Your type value is number. Valid: ${this.valid}`);
        }else {
            this.valid = false;
            console.log(`Your type value is not a number. Valid: ${this.valid}`);
        }
    };

};

let numberInput = new NumberInput("Type numbers...");

numberInput.setValue();
numberInput = new AddRequiredValidation(numberInput);
numberInput = new AddMaxLengthValidation(numberInput, 5);
numberInput = new AddNumberValidation(numberInput);

console.log('---------');

let numberInput1 = new NumberInput("Type numbers...");
numberInput1.setValue(1234);
numberInput1 = new AddRequiredValidation(numberInput1);
numberInput1 = new AddMaxLengthValidation(numberInput1, 3);
numberInput1 = new AddNumberValidation(numberInput1);

console.log('---------');

let numberInput2 = new NumberInput("Type numbers...");
numberInput2.setValue('ytyuyfy');
numberInput2 = new AddRequiredValidation(numberInput2);
numberInput2 = new AddMaxLengthValidation(numberInput2, 3);
numberInput2 = new AddNumberValidation(numberInput2);

console.log('---------');






