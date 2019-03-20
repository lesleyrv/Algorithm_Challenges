//Statistics Until Doubles
function rollOneTo20() {
    return Math.floor(Math.random() * 20+1);
  }
  
console.log(rollOneTo20());

function statsUntilDoubles(){

    var min;
    var max;
    var avg;
    var flag = true;
    var val;
    var prev;
    var count = 0;

    while (flag) {
        val = rollOneTo20();
        count ++;
        console.log("Val is: " + val);

        if (!max){
            max = val;
        }

        if (!min){
            min = val;
        }

        if (val > max){
            max = val;
        }
        if (val < min) {
            min = val;
        }

         sum += val;
         if (prev == val) {
             console.log ("You rolled two " + val + "s in a row!");
             flag = false;
         }
         else {
             prev = val;
             flag = true
         }
    }
    console.log ("Max is: " + max);
    console.log ("Min is: " + min);
    console.log ("Avg is: " + sum/count);
    console.log ("Number of rolls: " + count);

}

statsUntilDoubles();