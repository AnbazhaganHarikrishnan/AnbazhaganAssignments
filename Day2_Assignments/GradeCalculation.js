let studentmark = 75
grade(studentmark)

function grade(studentmark) {
    switch (true) {
        case studentmark >= 90:
            console.log("Grade is : O")
            break;
        case studentmark >= 80 && studentmark < 89:
            console.log("Grade is : A")
            break;
        case studentmark >= 60 && studentmark < 80:
            console.log("Grade is : B")
            break;
        case studentmark >= 40 && studentmark < 60:
            console.log("Grade is : C")
            break;
        default:
            console.log("Grade is : F")
            break;
    }
}