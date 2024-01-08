document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('input-deposit')
    const depositAmountString = depositField.value;
    
    const depositAmount = parseFloat(depositAmountString)
    depositField.value = ''
    if(isNaN(depositAmount)){
        alert('Input a valid number')
        return;
    }
    
    const depositCurrent = document.getElementById('current-deposit')
    const previousDepositTotalString = depositCurrent.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    
    const currentDepositTotal = depositAmount + previousDepositTotal
    
    depositCurrent.innerText = currentDepositTotal

    const currentBalanceCall = document.getElementById('balance')
    const currentBalanceString = currentBalanceCall.innerText
    const previousCurrentBalance = parseFloat(currentBalanceString)
    
    const newCurrentBalance = depositAmount + previousCurrentBalance
    currentBalanceCall.innerText = newCurrentBalance 

})