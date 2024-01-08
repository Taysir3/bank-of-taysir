document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountCall = document.getElementById('input-withdraw')
    const withdrawAmountString = withdrawAmountCall.value
    const withdrawAmount = parseFloat(withdrawAmountString)
    if(isNaN(withdrawAmount)){
        alert('Input a valid number')
        return;
    }

    // console.log(typeof withdrawAmount);

    const previousCurrentWithdrawCall = document.getElementById('current-withdraw')
    const previousCurrentWithdrawString = previousCurrentWithdrawCall.innerText
    const previousCurrentWithdraw = parseInt(previousCurrentWithdrawString)

    const previousTotalCall = document.getElementById('balance')
    const previousTotalString = previousTotalCall.innerText
    const previousTotal = parseFloat(previousTotalString)

    withdrawAmountCall.value = ''

    if(withdrawAmount > previousTotal){
        alert('Insufficient Balance')
        return;
    }
    
    const currentWithdraw = previousCurrentWithdraw + withdrawAmount
    previousCurrentWithdrawCall.innerText = currentWithdraw

    const newTotal = previousTotal - withdrawAmount;
    previousTotalCall.innerText = newTotal;
})