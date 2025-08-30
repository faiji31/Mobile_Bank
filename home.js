const validPin =1234
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const AccountNumber = document.getElementById('bank-acc').value 
    if (AccountNumber.length<11){
    alert("Please Enter your Valid Acc Number")
    return;
   }

    const AmountAdd = parseInt(document.getElementById('amount-add').value)
    
    const pin = parseInt(document.getElementById('pin-number').value)

    if (pin!=1234){
        alert("Enter Your Valid Pin")
        return
    }
   const AvilableBalance = parseInt(document.getElementById('money').innerHTML)

   
   



   const totalBalance = AmountAdd + AvilableBalance
   document.getElementById('money').innerHTML = totalBalance
})

// toggoling 
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('cashout-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display ="block"  

})

document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cashout-parent').style.display = "block"
})

// cashout btn
