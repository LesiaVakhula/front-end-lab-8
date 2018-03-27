function battle(fighter,enemy) {
    let randomNumber;
    let randomFighter = Math.round(Math.random() * 1);
    for (let i=randomFighter; ;i++) {
        randomNumber = Math.round(Math.random() * 9);

        if(i%2 === 0) {
            if (fighter instanceof Champion) {
                if (randomNumber >= 0 && randomNumber < 5) {
                    fighter.fight(enemy);
                    if(enemy.getHitpoints()>0){
                        console.log(`${fighter.name} has hit ${enemy.name}`);
                    }else{
                        console.log(`${fighter.name} has killed ${enemy.name}`);
                    }
                } else if (randomNumber >= 5 && randomNumber < 8) {
                    fighter.heal();
                    console.log(`${fighter.name} has restored hitpoins`);
                } else {
                    fighter.defence();
                    console.log(`${fighter.name} has blocked ${enemy.name}'s attack`);
                }
            }
            if (fighter instanceof Monster) {
                if (randomNumber >= 0 && randomNumber <= 4) {
                    fighter.fight(enemy);
                    if(enemy.getHitpoints()>0){
                        console.log(`${fighter.name} has hit ${enemy.name}`);
                    }else{
                        console.log(`${fighter.name} has killed ${enemy.name}`);
                    }
                } else if (randomNumber > 4 && randomNumber <= 8) {
                    if(!fighter._doubleAttack){
                        console.log(`${fighter.name} has doubled the attack`);
                    }
                    fighter.enrage();
                } else {
                    fighter.fury();
                    if (!fighter._doubleAttack){
                        console.log(`${fighter.name} has increased attack`);
                    }else {
                        console.log(`${fighter.name} can't increase attack, it has been doubled`);
                    }
                }
            }

        }

        if(i%2 !== 0) {
            if (enemy instanceof Champion) {
                if (randomNumber >= 0 && randomNumber <= 5) {
                    enemy.fight(fighter);
                    if(fighter.getHitpoints()>0){
                        console.log(`${enemy.name} has hit ${fighter.name}`);
                    }else{
                        console.log(`${enemy.name} has killed ${fighter.name}`);
                    }
                } else if (randomNumber > 5 && randomNumber < 8) {
                    enemy.heal();
                    console.log(`${enemy.name} has restored hitpoins`);
                } else {
                    enemy.defence();
                    console.log(`${enemy.name} has blocked ${fighter.name}'s attack`);
                }
            }
            if (enemy instanceof Monster) {
                if (randomNumber >= 0 && randomNumber < 5) {
                    enemy.fight(fighter);
                    if(fighter.getHitpoints()>0){
                        console.log(`${enemy.name} has hit ${fighter.name}`);
                    }else{
                        console.log(`${enemy.name} has killed ${fighter.name}`);
                    }
                } else if (randomNumber > 5 && randomNumber < 8) {
                    if(!enemy._doubleAttack){
                        console.log(`${enemy.name} has doubled the attack`);
                    }
                    enemy.enrage();
                } else {
                    enemy.fury();
                    if (!enemy._doubleAttack){
                        console.log(`${enemy.name} has increased attack`);
                    }else {
                        console.log(`${enemy.name} can't increase attack, it has been doubled`);
                    }
                }
            }
        }

        if (fighter.getHitpoints() === 0) {
            console.log(`${enemy.name} is winner!`);
            break;
        }

        if (enemy.getHitpoints() === 0) {
            console.log(`${fighter.name} is winner!`);
            break;
        }

    }
};

var hunter1 = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beast1 = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});
console.log('----------Extra task-------------');

console.log('Champion vs Monster');

console.log(hunter1);
console.log(beast1);

battle(hunter1,beast1);

console.log(hunter1);
console.log(beast1);

console.log('Champion vs Champion');

var hunter2 =new Champion({name: 'Alex', attack: 15, hitpoints: 65});
var hunter3 =new Champion({name: 'Victor', attack: 13, hitpoints: 70});

console.log(hunter2);
console.log(hunter3);

battle(hunter3,hunter2);

console.log(hunter2);
console.log(hunter3);

console.log('Monster vs Monster');

var beast2 = new Monster({name: 'Queen', attack: 12, hitpoints: 75});
var beast3 = new Monster({name: 'Godzila', attack: 13, hitpoints: 85});

console.log(beast2);
console.log(beast3);

battle(beast2,beast3)

console.log(beast2);
console.log(beast3);

