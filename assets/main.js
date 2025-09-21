const validpin =1234

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
   
    const bank = document.getElementById('bank').value
    const Accountnumber = document.getElementById('account-number').value
    const Addmoney = parseInt( document.getElementById('add-money').value)
    const Pin = parseInt(document.getElementById('pin-number').value)

    const AvilableBalence = parseInt(document.getElementById('tk').innerText)
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
     document.getElementById('add-money').style.display = 'block'

})
document.getElementById('cash-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('add-money').style.display = 'none'
     document.getElementById('cash-out').style.display = 'block'

})
