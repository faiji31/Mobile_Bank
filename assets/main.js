const validpin =1234

function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber

}

function getInputValueInner(id){
    const innertext = document.getElementById(id)
    const innertextvalue = innertext.innerText
    const innertextvaluenumber = parseInt(innertextvalue)

    return innertextvaluenumber
}


document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
   
    const bank = document.getElementById('bank').value
    const Accountnumber = document.getElementById('account-number').value
    const Addmoney = getInputValueNumber('add-money')
    const Pin = getInputValueNumber('pin-number')

    const AvilableBalence = getInputValueInner('tk')
   if(Accountnumber.length<11){
    alert("enter your valid account number")
    return
   }

   if (Pin!==validpin){
    alert("enter your valid pin")
    return
   }

    const totalnewAilableBalence = Addmoney + AvilableBalence
    document.getElementById('tk').innerText =totalnewAilableBalence
   
})

// toggoling feature
document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('cash-out').style.display = 'none'
     document.getElementById('add-money-bank').style.display = 'block'

})
document.getElementById('cash-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('add-money-bank').style.display = 'none'
     document.getElementById('cash-out').style.display = 'block'

})

// cash out section
document.getElementById('cash-out-btn').addEventListener('click',function(e){
    e.preventDefault(e)
    const agent = document.getElementById('agent-number').value
    const WithdrawMoney = getInputValueNumber('withdraw-money')
    const PinNumber = getInputValueNumber('pinnumber')

    if(agent.length<11){
        alert('Please provide Correct Number')
        return
    }
    if(PinNumber!==validpin){
        alert('Please Provide Correct Pin Number ')
        return
    }

    const TotalBalence = getInputValueInner('tk')


    const totalwithdrawBalence = TotalBalence - WithdrawMoney
    document.getElementById('tk').innerText=
    totalwithdrawBalence
})
