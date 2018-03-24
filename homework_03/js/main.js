function Company({name,owner,maxCompanySize}) {
    var companyInfo = {
        name: name,
        owner: owner,
        maxCount: maxCompanySize
        },
        _emmployees = [],
        _history = [];

    _history.push(`${companyInfo.name} was created in ${new Date()}`);

    this.getCompanyInfo = function () {
        return companyInfo;
    };

    this.addNewEmployee = function (worker) {
        let minSalary = 1000000;
        let emp;
        let indexExp;
        if(typeof worker !=="object"){
            console.log('Please try to add Employee instance');
            return;
        };

        if(companyInfo.maxCount > _emmployees.length){
            _emmployees.push(worker);
            worker._hire(companyInfo.name);
            _history.push(`${worker.getName()} starts working at ${companyInfo.name} in ${new Date()};`);
        } else{
            for(let i=0, l= _emmployees.length; i<l; i++){
                if(minSalary > _emmployees[i].getSalary()){
                    minSalary = _emmployees[i].getSalary();
                    emp = _emmployees[i].getName();
                    indexExp = i;
                };
            };

            this.removeEmployee(indexExp);
            _emmployees.push(worker);
            worker._hire(companyInfo.name);
            _history.push(`${worker.getName()} starts working at ${companyInfo.name} in ${new Date()};`);
        };
    };

    this.removeEmployee = function (value){
        if(typeof value === 'number'){
            _emmployees[value]._fire(companyInfo.name);
            let removeElement = _emmployees.splice(value,1);
            _history.push(`${removeElement[0].getName()} ends working at ${companyInfo.name} in ${new Date()};`);
        }else if(typeof value === 'string'){
            let index = -1;
            _emmployees.forEach(function (item,i) {
                if(item.getName() === value){
                    index = i;
                };
            });
            if(index < 0){
                console.log('incorrect name');
            } else{
                let removeElement = _emmployees.splice(index,1);
                _history.push(`${removeElement[0].getName()} ends working at ${companyInfo.name} in ${new Date()};`);
            };
        };
    };
    
    this.getAverageSalary = function () {
        let sum = 0;
        _emmployees.forEach(function (item) {
            sum +=item.getSalary();
        });
        return sum/_emmployees.length;
    };

    this.getEmployees = function () {
        return _emmployees.map(function (item) {
            let obj = {};
            obj.name = item.getName();
            obj.age = item.getAge();
            obj.salary = item.getSalary();
            obj.primarySkill = item.getPrimarySkill();
            return obj;
        });
    };
    
    this.getFormattedListOfEmployees = function () {
        let listOfEmployees = [];

        _emmployees.forEach(function (item,index) {
            let now = Date.now();
            let timeInCompany = (now - _emmployees[index].getTimeHire())/1000;
           listOfEmployees.push(`${_emmployees[index].getName()} -  works in ${companyInfo.name} ${timeInCompany} seconds`);
        });
        return listOfEmployees;
    };

    this.getAverageAge = function () {
        let sum = 0;
        _emmployees.forEach(function (item) {
           sum += item.getAge();
        });
        return sum/_emmployees.length;
    };

    this.getHistory = function () {
        return _history;
    };
};

function Employee ({name,age,salary,primarySkill}) {
    var timeHire = 0,
        nameEmployee = name,
        ageEmployee = age,
        salaryEmployee = salary,
        primarySkills = primarySkill,
        allWorkTime = 0,
        historyLog = [],
        timeFire = 0,
        currentCompany = '';

    this.getPrimarySkill = function () {
        return primarySkills;
    };

    this.getName = function () {
        return nameEmployee;
    };

    this.getAge = function () {
        return ageEmployee;
    };

    this.setAge = function () {
        ageEmployee++;
    };

    this.getTimeHire = function () {
        return timeHire;
    };

    this.getInfoEmployee = function () {
        return {'name':nameEmployee,'age':ageEmployee, 'salary':salaryEmployee};
    };

    this.getSalary = function () {
        return salaryEmployee;
    };

    this.setSalary = function (value) {
        if(typeof value === 'number' && isFinite(value)){
            if(value < salaryEmployee){
                console.log(`try to change salary from ${salaryEmployee} to ${value} `);
                return;
            } else {
                salaryEmployee = value;
                console.log(`change salary from ${salaryEmployee} to ${value} `);
            };
        }else {
            console.log(`you set inccorrect value`);
        }
    };

     this.getWorkTimeInSeconds = function () {
         if(timeFire!==0){
             allWorkTime+=timeFire-timeHire;
         }else {
             let nowTime =Date.now();
             allWorkTime += nowTime - timeHire;
         };
         return allWorkTime/1000;
     };
    this._hire = function (companyName) {
        timeHire = Date.now();
        currentCompany = companyName;
        historyLog.push(`${this.getName()} is hired to ${companyName} in ${new Date()}`)
    };

    this._fire = function (companyName) {
        currentCompany = '';
        timeFire = Date.now();
        historyLog.push(`${this.getName()} is fired from ${companyName} in ${new Date()}`)
    };
    this.getHistory = function () {
        return historyLog;
    }
}



let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());

console.log(epam.getAverageSalary());

console.log(epam.getAverageAge());

console.log(epam.getEmployees());

console.log(epam.getCompanyInfo());

epam.addNewEmployee(5,6,9,5);

setTimeout(() => {
    epam.removeEmployee(1);
    console.log(artem.getWorkTimeInSeconds());
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
vova.setSalary('sdsd');

console.log(`${vova.getName()}'s salary is ${vova.getSalary()}`);

console.log(vova.getHistory());

console.log(epam.getFormattedListOfEmployees());

console.log(epam.getEmployees());

console.log(vasyl.getInfoEmployee());




