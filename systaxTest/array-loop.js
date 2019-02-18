var number = [
    1, 300, 12, 24, 33
];
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i += 1;
}
console.log(`total: ${total}`);