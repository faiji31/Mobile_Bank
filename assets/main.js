document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
   
    const bank = document.getElementById('bank').value
    const Accountnumber = document.getElementById('account-number').value
    const Addmoney = parseInt( document.getElementById('add-money').value)
    const Pin = document.getElementById('pin-number').value

    const AvilableBalence = parseInt(document.getElementById('tk').innerText)
    console.log(AvilableBalence)

    const totalnewAilableBalence = Addmoney + AvilableBalence
    document.getElementById('tk').innerText =totalnewAilableBalence
   
})