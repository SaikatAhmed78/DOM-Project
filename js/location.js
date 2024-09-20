//add money to the account

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
   
    const addMoneyInput = document.getElementById('add-money-input').value;
   const  pinNumberInput = document.getElementById('pin-number-input').value;

   if(pinNumberInput === '1234'){
  

    const currentBalance = document.getElementById('current-balance').innerText;

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(currentBalance);
    const updateBalance = addMoneyNumber + balanceNumber;
    console.log(updateBalance)

    document.getElementById('current-balance').innerText =updateBalance;
   }
   else{
    alert('Failed to add money! please try again')
   }
})