function decision(question, doOk, doCancel) {
    if(question =='OK') doOk()
    else doCancel()
}

function showOk() {
    console.log('You agreed to')
}

function showCancel() {
    console.log('You cancelled the execution')
}

decision('OK', showOk, showCancel)
decision('Cancel', showOk, showCancel)