document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input')
    const depositInputInText = depositInput.value
    const depositInputInNumber =  parseFloat(depositInputInText)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalInText = depositTotal.innerText
    const depositTotalInNumber =  parseFloat(depositTotalInText)

    const newDepositTotal =  depositInputInNumber + depositTotalInNumber
    depositTotal.innerText = newDepositTotal
    depositInput.value = ''


    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalInText  = balanceTotal.innerText
    const balanceTotalInNumber = parseFloat(balanceTotalInText)
    const newBalanceTotal = balanceTotalInNumber  + depositInputInNumber 
    balanceTotal.innerText = newBalanceTotal


})

document.getElementById('withdraw-btn').addEventListener('click',function()
{

const withdrawInput = document.getElementById('withdraw-input')
const withdrawInputInText = withdrawInput.value
const withdrawInputInNumber =parseFloat(withdrawInputInText)

const withdrawTotal = document.getElementById('withdraw-total')
const withdrawTotalInText = withdrawTotal.innerText
const withdrawTotalInNumber =parseFloat(withdrawTotalInText)

const newWithdrawTotal =  withdrawInputInNumber + withdrawTotalInNumber
withdrawTotal.innerText = newWithdrawTotal

const balanceTotal = document.getElementById('balance-total')
    const balanceTotalInText  = balanceTotal.innerText
    const balanceTotalInNumber = parseFloat(balanceTotalInText)
    const newBalanceTotal = balanceTotalInNumber - withdrawInputInNumber
    balanceTotal.innerText = newBalanceTotal
 
    withdrawInput.value = ''



})