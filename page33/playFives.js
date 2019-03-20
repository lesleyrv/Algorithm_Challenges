// Gaming fun(damentals)

function rollOne() {
    return Math.floor(Math.random() * 6+1);
  }
  
console.log(rollOne());

  // playFives(num)
  function playFives(num){
      for (var i = 1; i <= num; i++){
          var result = rollOne();
          console.log(result);
          if (result == 5){
              console.log("Thats good luck!")
          }
      }
  }

  playFives(10);

  //playStatistics()

  function playStatistics(){
      var max;
      var min;
      var sum;

      for (var i = 1; i <= 8; i++){
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

  playStatistics()