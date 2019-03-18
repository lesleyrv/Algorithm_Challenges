// Extract-o-matic, page32
function extractDigit(num, digitNum) {
    let newNum = num.toString().split("");
    console.log('newNum: ' + newNum);
    return newNum[newNum.length - digitNum - 1];
    
}
//console.log(extractDigit(18253463563544, 2));
console.log(extractDigit(1824, 2));
console.log(extractDigit(1824, 0));
console.log(extractDigit(1824, 1));