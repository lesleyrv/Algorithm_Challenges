// most significant digit

function mostSigDig(myNum){
    while (num >= 1) {
        let newNum = myNum.toString().split("");
        return newNum[0];
    } else {
        let newNum = myNum.toString().split("");
        for (let i = 0, i < newNum.length; i++){
            if (newNum[i] > 0) {
                return newNum[i];
                break;
            }
        }
    }
}

mostSigDig(12345)
