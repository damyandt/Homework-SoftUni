function vacation(numOfPeople, typeOfGroup, day) {
    let totalSum = 0;

    switch (typeOfGroup) {
        case "Students":
            switch (day) {
                case "Friday": totalSum = 8.45 * numOfPeople; break;
                case "Saturday": totalSum = 9.8 * numOfPeople; break;
                case "Sunday": totalSum = 10.46 * numOfPeople; break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday": totalSum = 10.9 * numOfPeople; break;
                case "Saturday": totalSum = 15.6 * numOfPeople; break;
                case "Sunday": totalSum = 16 * numOfPeople; break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday": totalSum = 15 * numOfPeople; break;
                case "Saturday": totalSum = 20 * numOfPeople; break;
                case "Sunday": totalSum = 22.5 * numOfPeople; break;
            }
            break;

    }
    if (typeOfGroup === "Students" && numOfPeople >= 30) {
        totalSum -= totalSum * 0.15
    } else if (typeOfGroup === "Business" && numOfPeople >= 100) {
        numOfPeople -= 10
        switch (typeOfGroup) {
            case "Students":
                switch (day) {
                    case "Friday": totalSum = 8.45 * numOfPeople; break;
                    case "Saturday": totalSum = 9.8 * numOfPeople; break;
                    case "Sunday": totalSum = 10.46 * numOfPeople; break;
                }
                break;
            case "Business":
                switch (day) {
                    case "Friday": totalSum = 10.9 * numOfPeople; break;
                    case "Saturday": totalSum = 15.6 * numOfPeople; break;
                    case "Sunday": totalSum = 16 * numOfPeople; break;
                }
                break;
            case "Regular":
                switch (day) {
                    case "Friday": totalSum = 15 * numOfPeople; break;
                    case "Saturday": totalSum = 20 * numOfPeople; break;
                    case "Sunday": totalSum = 22.5 * numOfPeople; break;
                }
                break;
        }
    } else if ( typeOfGroup === "Regular" && numOfPeople >= 10 && numOfPeople <= 20) {
totalSum -= totalSum * 0.05
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`)
}
vacation(100, "Business", "Saturday")
