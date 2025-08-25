document.getElementById("loginbtn").addEventListener('click',function(e){
    e.preventDefault()
    const mobilenumber = 17905289111;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobilenumberValueConverted = parseInt(mobileNumberValue);
    const pinNumbervalue = document.getElementById("pin-number").value
    const PinNumbervalueConverted = parseInt(pinNumbervalue);

    console.log(mobilenumberValueConverted,PinNumbervalueConverted);


    if(mobilenumberValueConverted === mobilenumber && PinNumbervalueConverted === pinNumber){
        console.log("all value matched");

    }else{
        console.log('invalid');
    }
    

})
