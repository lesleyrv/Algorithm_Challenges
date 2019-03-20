function weekdayName2(weekdayNum) {

    var rem = weekdayNum % 7;

    switch (rem) {
        case 0:
            console.log("Sunday");
            break;

        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            return 0;
            break;
    }
}

function someDays() {
    var num;

    for (var i = 1; i <= 100; i++) {
        var num = weekdayNum2(Math.floor(Math.random() * 365 + 1));
        if (num == 0 || num == 6) {
            console.log("Enjoy your day off!")
        }
        else {
            console.log("Work Hard!");
        }
    }
}

someDays()