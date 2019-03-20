// Gaming fun(damentals)

function rollOne() {
    return Math.floor(Math.random() * 6+1);
  }
  
console.log(rollOne());


  //playStatistics()

  function playStatistics(numTimes){
      var max;
      var min;
      var sum = 0;

      for (var i = 1; i <= numTimes; i++){
          result = rollOne();
          if (!max) {
              max = result;
          }
          if (!min){
              min = result;
          }

          if (result > max){
              max = result;
          }
          if (result < min){
              min = result;
          }
          sum += result;

      }
      console.log ("Max is "+ max);
      console.log ("Min is " + min);
      console.log ("sum is " + sum);
  }

  playStatistics(10)