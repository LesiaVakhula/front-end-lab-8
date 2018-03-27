
// Task 1

function assign(object, defaultObject, optionsObject) {
    return Object.assign(object, defaultObject, optionsObject);
};

var defaults = { width: 100, height: 100 };
var options = { width: 150 };

var configs = assign({}, defaults, options);
console.log(configs);


// Task 2

function Config(object) {
    this.name = object.name;
    this.attack = object.attack;
    this.totalHipoints = object.hitpoints;
    this.hitpoints = object.hitpoints;
}

Config.prototype.getHitpoints = function () {
    return this.hitpoints;
};

Config.prototype.setHitpoints  = function (value) {
    this.hitpoints = value;
};

Config.prototype.getTotalHitpoints  = function () {
    return this.totalHipoints;
};

Config.prototype.setTotalHitpoints  = function (value) {
    this.totalHipoints = value;
};

Config.prototype.getAttack = function () {
    return this.attack;
};

Config.prototype.setAttack = function (value) {
    this.attack = value;
};

Config.prototype.fight = function (fighter) {
    if(fighter.name === this.name) {
        console.log(`You can't attack yourself`);
        return;
    } else {
        if(fighter.isAlive()){
            if(fighter._block){
                fighter._block = false;
                return;
            }
            let result = fighter.getHitpoints() - this.getAttack();
                if(result < 0){
                    result = 0;
                }
            fighter.setHitpoints(result);
        }
    }
};

Config.prototype.isAlive = function () {
    return this.getHitpoints() > 0;
};

function Champion () {
    Config.apply(this,arguments);
    this._block = false;

    this.heal = function () {
        let result = this.getHitpoints()+ 5;
            this.setHitpoints(result);
            if(this.getHitpoints()>this.getTotalHitpoints()){
                this.setHitpoints(this.getTotalHitpoints());
            }
    };

    this.defence = function () {
        let result = this.getTotalHitpoints() + 1;
            this._block = true;
            this.setTotalHitpoints(result);
    };

    this.trains = function () {
        constAttack = this.getAttack() + 1;
        this.setAttack(constAttack);
    };
};

Champion.prototype = Object.create(Config.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.fight = function () {
  Config.prototype.fight.apply(this,arguments);
    this.trains();
};


function Monster () {
    Config.apply(this,arguments);

    let constAttack = this.getAttack();
    let count = 0;
    this._doubleAttack = false;

    this.countIncrease = function () {
      count++;
    };

    this.getCount = function () {
        return count;
    };

    this.setCount = function () {
        count = 0;
    };

    this.getConstAttack = function () {
      return this.getConstAttack;
    };

    this.enrage = function () {
        if(this._doubleAttack){
            console.log(`${this.name} you can't double your attack, it has been already doubled`);
            return;
        }
        let result = this.getAttack() * 2;
        this.setAttack(result);
        this._doubleAttack = true;
    };

    this.calm = function () {
        this._doubleAttack = false;
        this.setAttack(constAttack);
    };
    
    this.fury = function () {
        if(this.hitpoints > 5 && this.totalHipoints > 5 && !this._doubleAttack){
            this.totalHipoints -= 5;
            this.hitpoints -= 5;
            constAttack = this.getAttack() + 2;
            this.setAttack(constAttack);
        }
    };
};

Monster.prototype = Object.create(Config.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.fight = function (fighter) {
    if(this._doubleAttack){
        this.countIncrease();
        if(this.getCount() === 2){
            this.calm();
            this.setCount();
        }
    };

    Config.prototype.fight.apply(this, arguments);

    if(fighter.getHitpoints() === 0){
        let totalFiter =fighter.getTotalHitpoints();
        let resultHitpoints = Math.floor(this.getHitpoints() + totalFiter * 0.1);
        let resultTotalHitpoints = Math.floor(this.getTotalHitpoints() + totalFiter * 0.25);
            this.setHitpoints(resultHitpoints);
            this.setTotalHitpoints(resultTotalHitpoints);
    }
};

var hunter = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beast = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});

console.log(hunter);
console.log(beast);

hunter.fight(beast);

console.log('beast hitpoints - ' + beast.getHitpoints());
console.log(hunter);

hunter.fight(beast);

console.log(beast);
console.log('beast hitpoints - ' + beast.getHitpoints());

hunter.fight(beast);

console.log('beast hitpoints - ' + beast.getHitpoints());

beast.enrage();
hunter.fight(beast);

console.log('hunter hitpoints before '+hunter.getHitpoints());

hunter.defence();
beast.fight(hunter);

console.log('beast attack '+ beast.getAttack());
console.log('hunter  hitpoints after use defence '+ hunter.getHitpoints());

beast.fight(hunter);

console.log('beast attack '+ beast.getAttack());

beast.fight(hunter);

console.log('beast attack - '+ beast.getAttack());
console.log('hunter hitpoints after end defence '+ hunter.getHitpoints());
console.log('hunter total hitpoints'+hunter.getTotalHitpoints());

hunter.heal();

console.log('hunter hitpoints - ' + hunter.getHitpoints());

hunter.heal();

console.log('hunter hitpoints - ' + hunter.getHitpoints());
console.log('beast hitpoints -'+beast.getHitpoints());
console.log('before fury ');
console.log(beast);

beast.fury();

console.log('after fury ');
console.log(beast);
beast.fight(beast);
beast.fight(hunter);

console.log(hunter);
console.log(beast);
