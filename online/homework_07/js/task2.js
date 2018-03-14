var startGame = confirm('Do you want to play a game?');
var userNum, attempt, maxRange, totalPrize, currentPrize, round, startCurrentPrize;
for (; ;) {
    startCurrentPrize = 10;
    attempt = 0;
    totalPrize = 0;
    maxRange = 5;
    round = 1;
    if (startGame) {
        var randomNum = Math.round(Math.random() * 5) * round;
        console.log(randomNum);
        for (let i = 0; i < 3; i++) {
            attempt++;
            if (i == 0 && round == 1) {
                currentPrize = 10;
            } else if (i == 0 && round > 1) {
                startCurrentPrize *= 3;
                currentPrize = startCurrentPrize;
            }
            if (round > 1 && attempt == 1) {
                maxRange *= 2;
                randomNum = Math.round(Math.random() * 5) * round;
                console.log(randomNum);
            }
            userNum = prompt(`enter a number from 0 to ${maxRange}\nAttempts left: ${attempt}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPrize}$`, ' ');
            if (!userNum) {
                if (attempt == 3) {
                    startGame = confirm('Do you want to play a game again?');
                    round = 1;
                    if (startGame) {
                        continue;
                    } else {
                        totalPrize = 0;
                        console.log('Thank you for a game. Your prize is: ' + totalPrize);
                        break;
                    }
                }
            }
            if (userNum == ' ' || userNum % 1 != 0 || (userNum < 0 || userNum > maxRange)) {
                console.log('your number is incorrect!');
                if (attempt == 3) {
                    startGame = confirm('Do you want to play a game again?');
                    round = 1;
                    if (startGame) {
                        continue;
                    } else {
                        totalPrize = 0;
                        console.log('Thank you for a game. Your prize is: ' + totalPrize);
                        break;
                    }
                } else {
                    currentPrize = parseInt(currentPrize / 2);
                    continue;
                }
            }
            if (userNum == randomNum) {
                totalPrize += currentPrize;
                round++;
                attempt = 0;
                i = -1;
                startGame = confirm('Do you want to continue the game ?');
                if (startGame) {
                    continue;
                } else {
                    console.log('Thank you for a game. Your prize is: ' + totalPrize);
                    startGame = confirm('Do you want to play a game again?');
                    round = 1;
                    break;
                }
            } else if (userNum != randomNum && attempt < 3) {
                currentPrize = parseInt(currentPrize / 2);
                continue;
            }
        }
    } else if ((!startGame && round > 1 )|| !startGame) { break;
    } else {
        console.log('You did not become a millionaire');
        break;
    }
    if (attempt == 3 && startGame) { continue; }
}

