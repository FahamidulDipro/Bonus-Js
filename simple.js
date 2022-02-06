// for (var i = 0; i < 6; i++) {
//     console.log(i);
// }

function consoleNum(num) {
    console.log(num);
    consoleNum(num++);
}
consoleNum(4);