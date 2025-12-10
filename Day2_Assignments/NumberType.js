function numbertype(numbervalue) {
    if (numbervalue > 0) {
        console.log("Input value is : " + numbervalue + " and it is a positive number")
    }
    else if (numbervalue < 0) {
        console.log("Input value is : " + numbervalue + " and it is a Negative number")
    }
    else {
        console.log("Input value is : " + numbervalue)
    }
}

let numbervalue = 0
numbertype(numbervalue)