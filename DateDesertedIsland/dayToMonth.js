// dayToMonth
function monthName(monthNum){

    switch (true){
        case (monthNum <= 31):
        console.log("January");
        break;

        case (monthNum <= 59):
        console.log("February");
        break;
        
        case (monthNum <= 90):
        console.log("March");
        break;

        case (monthNum <= 120):
        console.log("April");
        break;

        case (monthNum <= 151):
        console.log("May");
        break;

        case (monthNum <= 181):
        console.log("June");
        break;

        case (monthNum <= 212):
        console.log("July");
        break;

        case (monthNum <= 243):
        console.log("August");
        break;

        case (monthNum <= 273):
        console.log("September");
        break;

        case (monthNum <= 304):
        console.log("October");
        break;
        

        case (monthNum <= 335):
        console.log("November");
        break;
        

        case (monthNum <= 365):
        console.log("December");
        break;

        default:
        console.log("Invalid number for day to month");
    }
}

monthName(75);