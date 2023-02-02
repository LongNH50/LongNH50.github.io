const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const flag = false;
let sum = 0;
function getNumber() {
    
    readline.question('Enter your number: ', (number) => {
        console.log(`You just enter number: ${number}`);
        if (number == ('stop')) {
            console.log(sum);
            readline.close();
        }
        else{
            sum += parseInt(number);
            getNumber();
        }
    })
}

getNumber();