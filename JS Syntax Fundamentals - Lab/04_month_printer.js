function monthPrinter(number) {
    let months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }

    if (number in months){
        console.log(months[number])
    }

    else{
        console.log("Error!")
    }
}
