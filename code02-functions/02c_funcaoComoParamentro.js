function decision (question, doOK, doCancel) {
    if (question == 'OK') doOK()
    else doCancel()
}

let beOK = function showOk() {
    console.log('You agreed to')
}

let beCancel = function showCancel() {
    console.log('You cancelled the execution')
}

decision("OK", beOK, beCancel)
decision("Cancel", beOK, beCancel)