
function getInputValue(getInputId){

    const inputValue = document.getElementById(getInputId)
    const inputValueInText = inputValue.value
    const inputValueInNumber = parseFloat(inputValueInText)
    inputValue.value = ''
    return inputValueInNumber

}

function getTotalAreaValue(getTotalAreaId,amount){

    const totalAreaValue = document.getElementById(getTotalAreaId)
    
    const totalAreaValueInText = totalAreaValue.innerText
    const totalAreaValueInNumber = parseFloat(totalAreaValueInText)
    totalAreaValue.innerText = totalAreaValueInNumber + amount
    
}
function  currentBalance (){
    const balanceUpdate = document.getElementById('balance-total')
    const balanceUpdateInText = balanceUpdate.innerText
    const balanceUpdateInNumber =  parseFloat(balanceUpdateInText)
    return balanceUpdateInNumber
}

function updatingBalance(inputNumber,isAddition){
    const balanceUpdate = document.getElementById('balance-total')
    const balanceUpdateInNumber = currentBalance()

   if(isAddition == true){
    balanceUpdate.innerText = balanceUpdateInNumber + inputNumber
    
   }

else{
    balanceUpdate.innerText = balanceUpdateInNumber  - inputNumber
}
}

document.getElementById('deposit-btn').addEventListener('click',function(){

    const depositInputNumber = getInputValue('deposit-input')
    if (depositInputNumber > 0){
        getTotalAreaValue('deposit-total',depositInputNumber)
        updatingBalance(depositInputNumber,true)
    }
    

})
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawInputNumber = getInputValue('withdraw-input')
    const totalCurrentBalance = currentBalance()
    if(withdrawInputNumber > 0 && withdrawInputNumber < totalCurrentBalance){
        getTotalAreaValue('withdraw-total',withdrawInputNumber)
        updatingBalance(withdrawInputNumber,false)
    
    }
   
})