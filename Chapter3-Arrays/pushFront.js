// chapter 3 - arrays
// arrays: push front

function pushFront( arr, val){
    for (var i = arr.lenght-1; i >= 0; i --){
        arr [i+1] = arr[i]
    }
    arr [0] = val;
    return arr;
}

pushFront([1,2,3,4,5],50)