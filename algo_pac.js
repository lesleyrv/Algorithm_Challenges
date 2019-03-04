function spliceArr(arr,num){
  arr.splice(0,arr.length-num); // this using the method splice 
  return arr;          
}

console.log (spliceArr([2,4,6,8,10],3));

// # Math help 
// https://stackoverflow.com/questions/36183556/get-x-intercept-given-two-points  

function findX(m,b){
    var y = 0;
    var x = (y-b)/m;
    return x;
}

console.log (findX(3,3));
console.log (findX(1,0));

//poor kenny

function whatHappensToday() {
    let probability = Math.floor(Math.random() * 6) + 1;
    console.log(probability);
    switch (probability) {
        case 1:
            return "happy day";
        case 2:
            return "volcano";
            break;
        case 3:
            return "happy day";
        case 4:
            return "happy day";
        case 5:
            return "tsunami";
            break;
        case 6:
            return "happy day";
        case 7:
            return "happy day";
        case 8:
            return "happy day";
        case 9:
            return "earthquake";
            break;
        case 10:
            return "happy day";
        case 11:
            return "happy day";
        case 12:
            return "happy day";
        case 13:
            return "happy day";
        case 14:
            return "blizzard";
            break;
        default:
            return "meteor";
    }
}
whatHappensToday(); 
// or kirk solution //
var disasters = {
    1 : 'volcano',
    2 : 'tsunami',
    3 : 'earthquake',
    4 : 'blizzard',
    5 : 'meteor'
}
var count = 0;
var volcanos = 0;
var tsunamis = 0;
var earthquakes = 0;
var blizzards = 0;
var meteors = 0;
var sum = 0;
function whatHappensToday(){
    var disaster = Math.floor(Math.random() * 5) + 1; // random numbers from 1-5.
    count ++;
    console.log('count : ' + count);
    if(disasters[disaster] == "volcano"){
      volcanos++;
    } else if(disasters[disaster] == "tsunami"){
      tsunamis++;
    } else if(disasters[disaster] == "earthquake"){
      earthquakes++;
    } else if(disasters[disaster] == "blizzard"){
      blizzards++;
    } else if(disasters[disaster] == "meteor"){
      meteors++;
    } 
    console.log("volcanos :" + volcanos);
    console.log("tsunamis :" + tsunamis);
    console.log('earthquakes :' + earthquakes);
    console.log('blizzards :' + blizzards);
    console.log('meteors :' + meteors);
//     sum = volcanos + tsunamis + earthquakes + blizzards + meteors;
//     console.log("sum " + sum )
    console.log("----------------------")
}
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();

//  What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
function whatReallyHappened() {
    let volcano = false;
    let tsunami = false;
    let earthqauke = false;
    let blizzard = false;
    let meteor = false;
    let probability = function() {
        myNum = Math.floor(Math.random() * 20) + 1;
        return myNum;
    }
    if (probability() <= 2) {
        volcano = true;
    }
    if (probability() <= 3) {
        tsunami = true;
    }
    if (probability() <= 4) {
        earthqauke = true;
    }
    if (probability() <= 5) {
        blizzard = true;
    }
    if (probability() <= 6) {
        meteor = true;
    }

    console.log(`volcano was ${volcano}, tsunami was ${tsunami}, earthqauke was ${earthqauke}, blizzard was ${blizzard} and meteor was ${meteor}`);
}
whatReallyHappened(); // Was looking for something more simple but this keeps the distatsters truly independent with individual random numbers

// Soaring IQ


function soaringIQ() {
    let iq = 101;
    for (let i = 1; i <= 98; i++) {
        iq = iq + (i * .01);
    }
    return iq.toFixed(2);
}
soaringIQ();

// Letter Grade

function letterGrade(grade) {
    switch (true) {
        case grade >= 100 && 97:
            return "A+ ";
            break;
        case grade >= 80:
            return "B";
            break;
        case grade >= 70:
            return "C";
            break;
        case grade >= 60:
            return "D";
            break;
        default:
            return "FAIL;"
    }
}

console.log(letterGrade(89));
console.log(letterGrade(92));

//moreAccurateGrade 

function letterGrade(score) {
    switch (true) {
        case score <= 100 && score >= 97:
            return "Score:" + score + " Grade: A+";
            break;
        
        case score >= 93 && score <= 96:
            return "Score:" + score + " Grade: A";
            break;
        
        case score >= 90 && score <= 92:
            return "Score:" + score + " Grade: A-";
            break;
        
        case score >= 87 && score <= 89:
            return "Score:" + score + " Grade: B+";
            break;
        
       case score >= 83 && score <= 86:
            return "Score:" + score + " Grade: B";
            break;

       case score >= 80 && score <= 82:
            return "Score:" + score + " Grade: B-";
            break;
            
       case score >= 77 && score <= 79:
            return "Score:" + score + " Grade: C+";
            break;
       
      case score >= 73 && score <= 76: 
            return "Score:" + score + " Grade: C";
            break;
      
      case score >= 70 && score <= 72:
            return "Score:" + score + " Grade: C-";
            break;
        
      case score >= 67 && score <= 69:
            return "Score:" + score + " Grade: D+";
            break;
      
      case score >= 63 && score <= 66:
            return "Score:" + score + " Grade: D";
            break;
      
      case score >= 60 && score <= 62:
            return "Score:" + score + " Grade: D-";
            break;
        
      default:
            return  "Score:" + score + " Grade: F";
    }
}


console.log(letterGrade(99));
console.log(letterGrade(91));
console.log(letterGrade(86));
console.log(letterGrade(79));

