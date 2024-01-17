function decision(question, doOK, doCancel) {
    if(question == "OK") doOK()
    else doCancel()
}

decision(
    "OK", 
    function () {
        console.log("You agrerd")
    },
    function () {
        console.log("You cancelled the execution")
    }
)

console.log('--------------------------------')

decision(
    "Cancel", 
    function () {
        console.log("You agrerd")
    },
    function () {
        console.log("You cancelled the execution")
    }
)

console.log('--------------------------------')