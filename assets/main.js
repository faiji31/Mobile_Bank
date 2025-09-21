document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
   
    const bank = document.getElementById('bank').value
    const Accountnumber = document.getElementById('account-number').value
    const Addmoney = parseInt( document.getElementById('add-money').value)
    const Pin = document.getElementById('pin-number').value
    console.log(bank,Accountnumber,Addmoney,Pin)
})