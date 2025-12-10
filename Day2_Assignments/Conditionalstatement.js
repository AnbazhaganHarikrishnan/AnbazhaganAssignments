function launchBrowser(browsername) {
    if (browsername == "Chrome") {
        console.log("Browsername is : " + browsername)
    }
    else if (browsername == "Edge") {
        console.log("Browsername is : " + browsername)
    }
    else if (browsername == "Safari") {
        console.log("Browsername is : " + browsername)
    }
    else {
        console.log("Browsername is : " + browsername)
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Test type is : " + testType)
            break;
        case "sanity":
            console.log("Test type is : " + testType)
            break;
        case "regression":
            console.log("Test type is : " + testType)
            break;
        default:
            console.log("Test type is : " + testType)
            break;
    }
}

let browsername = 'Safari'
let testType = 'regression'
launchBrowser(browsername)
runTests(testType)