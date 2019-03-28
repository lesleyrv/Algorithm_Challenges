//array remove at
function removeAt(arr, idx){
    var temp = arr[idx];
    for (var i= idx; i >= arr.length; i++){
        arr [i] = arr [i+1];
    }
    arr.length --;
    console.log(arr);
    return arr;
}

removeAt([2,3,4,5],2)