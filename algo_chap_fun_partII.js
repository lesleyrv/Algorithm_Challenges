// sigma

function sigma(num){
    var sum = 0;
    
    for (i=1; i<=num ; i++){
       sum += i;
    }
  return sum;
}

console.log(sigma(3));

//factorlial using the recursive method
// condition to test the num - for 
function factorial(n){
    if(n===0||n===1){
      return 1;
    }
    return n*factorial(n-1);
   }
   
   console.log(factorial(3));
   console.log(factorial(5));

//Star Art

function drawLeftStars(num){
    var star = "";
    for (var i = 1; i <= 15; i++){
      if (i <= num) {
          star += "*";
      }
    }
  
  console.log('drawLeftStars')
  console.log(star);
}
drawLeftStars(5);


function drawRightStars(num){
  var star = "";
  for (var i = 1; i <= 15; i++){
    if (i <= 15 -num) {
      star += "-";
    }else {
      star += "*";
    }
  }
  console.log('drawRightStars')
  console.log (star)
}

drawRightStars (10);

function drawCenterStars(num){
 var star = "";
 var mid = Math.floor((15-num)/2);
 console.log (mid)
 for (var i=1; i<=15;  i++){
   if( i<= mid || i>num+mid){
     star +='-';
     } else {
       star += "*";
     }
 }
  console.log('drawCenterStars')
  console.log(star);
 
}

function drawLeftStars(num, char){
    var star = "";
    for (var i = 1; i <= 15; i++){
      if (i <= num) {
          star += char
      }
    }
  
  console.log('drawLeftStars')
  console.log(star);
}
drawLeftStars(5,'y');


function drawRightStars(num,char){
  var star = "";
  for (var i = 1; i <= 15; i++){
    if (i <= 15 -num) {
      star += "-";
    }else {
      star += char;
    }
  }
  console.log('drawRightStars')
  console.log (star)
}

drawRightStars (10, 'y');

function drawCenterStars(num, char){
 var star = "";
 var mid = Math.floor((15-num)/2);
 console.log (mid)
 for (var i=1; i<=15;  i++){
   if( i<= mid || i>num+mid){
     star +='-';
     } else {
       star += char;
     }
 }
  console.log('drawCenterStars')
  console.log(star);
 
}

drawCenterStars(9,'y');


function drawStarWars(num){
  var star = "";
  var mid = Math.floor((15-num)/2);
  
  console.log (mid)
  
  var styleCount  = 1;
  
  for (var i=1; i<=15; i ++){
    if ( i <= mid || i > num+mid){
      star += "-";
    }else {
      console.log("styleCount: " + styleCount)
      if (styleCount == 1){
        star += "(";
      } else if (styleCount == 3) {
        star += "*";
      } else if (styleCount == 5) {
        star += ")";
      } else if (styleCount % 2 === 0){
        star += "="
      }
      
      styleCount ++;
      if (styleCount == 6){
        styleCount = 1;
      }
    }
    
  }
  console.log(star);
}

drawStarWars(15);
drawStarWars(10);

