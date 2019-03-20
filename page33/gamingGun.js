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