document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault();
    const MobileNumber = 12345678910
    const PinNumber =1234
    const MobileNumberValue = document.getElementById('mobile-number').value
    const MobileNumberValueConverted = parseInt(MobileNumberValue)

   const PinNumberValue = document.getElementById('pin-number').value
   const PinNumberValueConverted =parseInt(PinNumberValue)
   console.log(MobileNumberValueConverted,PinNumberValueConverted)

   if(MobileNumberValueConverted===MobileNumber && PinNumberValueConverted === PinNumber){
    window.location.href = 'main.html'

   }else{
   alert('invalid')
   }


})