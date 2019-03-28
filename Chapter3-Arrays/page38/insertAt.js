// array insert at
function insertAt(arr, idx, val){
    for (var i= arr.lenght-1; i >= idx; i--){
        arr [i+1] = arr [i];
    }
    arr[idx] = val;
    console.log(arr);
    return arr;
}

insertAt([2,3,4,5],2,24)