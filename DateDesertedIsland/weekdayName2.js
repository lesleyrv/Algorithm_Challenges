function weekdayName2(weekdayNum){
    var rem = weekdayNum % 7;
    
    console.log(rem);

    switch(rem){
        case 0:
        console.log ("Sunday");
        break;

        case 1:
        console.log ("Monday");
        break;

        case 2:
        console.log ("Tuesday");
        break;

        case 3:
        console.log ("Wednesday");
        break;

        case 4:
        console.log ("Thursday");
        break;

        case 5:
        console.log ("Friday");
        break;

        case 6:
        console.log ("Saturday");
        break;

        default:
        console.log("Invalid week day number");
    }
}

weekdayName2(14);
weekdayName2(30);
weekdayName2(60);
weekdayName2(21);